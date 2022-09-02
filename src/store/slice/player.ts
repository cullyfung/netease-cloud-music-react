import { PlayMode } from '@/components/play-bar/types'
import { createSlice } from '@reduxjs/toolkit'

export const player = createSlice({
  name: 'player',
  initialState: {
    playMode: PlayMode.SEQUENTIAL,
    playStatus: false
  },
  reducers: {
    changePlayMode(state, { payload }) {
      state.playMode = payload
    },
    changePlayStatus(state) {
      state.playStatus = !state.playStatus
    }
  }
})

export const { changePlayMode, changePlayStatus } = player.actions

export default player.reducer