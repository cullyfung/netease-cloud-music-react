import {
  getPersonalized,
  getToplistDetail,
  getPlaylistDetail,
  getBannerList,
  getTopArtists
} from '@/api'
import { useQuery } from '@tanstack/react-query'

export const useRecommend = () => {
  return useQuery(['recommend'], () =>
    Promise.all([getPersonalized(), getBannerList({ type: 2 })])
  )
}

export const useRank = () => {
  return useQuery(['rank'], () => getToplistDetail())
}

export const useArtist = (params?: { limit?: number; offset?: number }) => {
  return useQuery(['artists', params], () => getTopArtists(params))
}

export const usePlayListDetail = (params: { id: string }) => {
  return useQuery(['playlist-detail', params], () =>
    getPlaylistDetail(params).then(res => res?.playlist)
  )
}
