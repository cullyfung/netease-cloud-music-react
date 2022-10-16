import { getBannerList } from '@/api'
import { getPersonalized } from '@/api/playlist'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getBannerListData = createAsyncThunk(
  'recommend/banner',
  async () => {
    const result = await getBannerList({ type: 1 })
    return result
  }
)
export const getRecommendListData = createAsyncThunk(
  'recommend/recommendList',
  async () => {
    const result = await getPersonalized()
    return result
  }
)

export interface RecommendState {
  banners: Array<any>
  recommendList: Array<any>
}

const initialState: RecommendState = {
  banners: [],
  recommendList: []
}

export const recommend = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBannerListData.fulfilled, (state, { payload }) => {
        state.banners = payload.banners ?? []
      })
      .addCase(getRecommendListData.fulfilled, (state, { payload }) => {
        state.recommendList = payload.result ?? []
      })
  }
})

export const {} = recommend.actions

export default recommend.reducer
