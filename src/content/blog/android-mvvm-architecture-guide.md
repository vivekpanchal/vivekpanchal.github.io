---
title: 'Android MVVM Architecture: A Practical Guide'
description: 'A hands-on guide to implementing MVVM architecture in Android using ViewModel, LiveData, Repository pattern, and Hilt for dependency injection.'
pubDate: '2023-06-15'
tags: ['Android', 'MVVM', 'Architecture', 'Kotlin', 'Hilt', 'LiveData']
heroImage: '/images/blog/mvvm-architecture.jpg'
---

## Why Architecture Matters

When I started Android development, I put everything in `Activity` and `Fragment` classes. It worked — until it didn't. God Activities, untestable code, and state loss on rotation were constant pain points.

MVVM with Android Jetpack solved all of this. Here's how to do it properly.

## The MVVM Pattern

```
View (Activity/Fragment)
    ↕  observes/dispatches events
ViewModel
    ↕  requests/delivers data
Repository
    ↕  selects source (network/cache)
  /       \
Remote    Local
(Retrofit) (Room)
```

**View** — displays data, dispatches user events. Zero business logic.  
**ViewModel** — survives config changes, exposes state via LiveData/StateFlow.  
**Repository** — single source of truth for data. Abstracts remote vs. local.

## Project Setup

```kotlin
// build.gradle (app)
dependencies {
    // ViewModel + LiveData
    implementation "androidx.lifecycle:lifecycle-viewmodel-ktx:2.7.0"
    implementation "androidx.lifecycle:lifecycle-livedata-ktx:2.7.0"

    // Room
    implementation "androidx.room:room-runtime:2.6.1"
    implementation "androidx.room:room-ktx:2.6.1"
    kapt "androidx.room:room-compiler:2.6.1"

    // Retrofit
    implementation "com.squareup.retrofit2:retrofit:2.9.0"
    implementation "com.squareup.retrofit2:converter-gson:2.9.0"

    // Hilt
    implementation "com.google.dagger:hilt-android:2.49"
    kapt "com.google.dagger:hilt-android-compiler:2.49"
    implementation "androidx.hilt:hilt-navigation-fragment:1.1.0"
}
```

## The Repository

```kotlin
class NewsRepository @Inject constructor(
    private val api: NewsApi,
    private val newsDao: NewsDao,
) {
    val news: Flow<List<Article>> = newsDao.getAllArticles()

    suspend fun refreshNews() {
        val response = api.getTopHeadlines()
        newsDao.insertAll(response.articles)
    }
}
```

Key insight: the `Flow` from Room is the single source of truth. The network is just a way to update the local cache.

## The ViewModel

```kotlin
@HiltViewModel
class NewsViewModel @Inject constructor(
    private val repository: NewsRepository,
) : ViewModel() {

    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    val news = repository.news
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    init {
        refresh()
    }

    fun refresh() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            runCatching { repository.refreshNews() }
                .onSuccess { _uiState.value = UiState.Success }
                .onFailure { _uiState.value = UiState.Error(it.message) }
        }
    }

    sealed class UiState {
        object Loading : UiState()
        object Success : UiState()
        data class Error(val message: String?) : UiState()
    }
}
```

## The Fragment

```kotlin
@AndroidEntryPoint
class NewsFragment : Fragment(R.layout.fragment_news) {
    private val viewModel: NewsViewModel by viewModels()
    private lateinit var adapter: NewsAdapter

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setupRecyclerView()
        observeState()
    }

    private fun observeState() {
        viewLifecycleOwner.lifecycleScope.launch {
            viewLifecycleOwner.repeatOnLifecycle(Lifecycle.State.STARTED) {
                launch {
                    viewModel.news.collect { articles ->
                        adapter.submitList(articles)
                    }
                }
                launch {
                    viewModel.uiState.collect { state ->
                        when (state) {
                            is UiState.Loading -> showLoading()
                            is UiState.Success -> hideLoading()
                            is UiState.Error  -> showError(state.message)
                        }
                    }
                }
            }
        }
    }
}
```

## Testing the ViewModel

The best thing about MVVM is testability. The ViewModel has zero Android framework dependencies:

```kotlin
@Test
fun `refresh success updates state to Success`() = runTest {
    val fakeRepo = FakeNewsRepository(shouldSucceed = true)
    val viewModel = NewsViewModel(fakeRepo)

    viewModel.refresh()
    advanceUntilIdle()

    assertThat(viewModel.uiState.value).isEqualTo(UiState.Success)
}
```

## Common Mistakes to Avoid

1. **Leaking Views** — Never hold a reference to Activity/Fragment in ViewModel.
2. **Business logic in Fragment** — If it's not UI, it belongs in ViewModel or lower.
3. **Single-shot operations as Flow** — Use `suspend fun` for one-shot ops; `Flow` for streams.
4. **Forgetting `repeatOnLifecycle`** — Always use it to avoid collecting when the view is stopped.

## Conclusion

MVVM with Jetpack isn't just an architectural pattern — it's the foundation for testable, maintainable Android apps. Start with this structure even on small projects; the discipline pays off immediately.

Have questions? Reach out on [LinkedIn](https://linkedin.com/in/vivekpanchal07) or [GitHub](https://github.com/vivekpanchal).
