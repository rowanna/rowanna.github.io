---
title: "Redux가 어려운 그대를 위한 튜토리얼 1"
description: Redux 사용법 파헤쳐보기
image: "https://rowanna.github.io/assets/images/image-8c1f10f8fc07a16e01ae83e74cbab729.png"
sidebar_position: 1
---

**Redux 사용법 파헤쳐보기**

<!-- truncate -->

## Redux 패턴 요약

### Slice 만들기 `createSlice`

```jsx
const themeSlice = createSlice({
  name: "theme",
  initialState: DARK_THEME,
  reducers: {
    change: (state, action) => action.payload,
  },
});
```

### Store 생성 (configureStore)

```jsx
const store = configureStore({
  reducer: { theme: themeSlice.reducer },
});
```

### Provider로 감싸기

```jsx
<Provider store={store}>
  <App />
</Provider>
```

### useSelector로 상태 가져오기

```jsx
const color = useSelector((state) => state.theme.color);
```

### useDispatch로 상태 변경하기

```jsx
const dispatch = useDispatch();
dispatch(themeSlice.actions.change(LIGHT_THEME));
```
