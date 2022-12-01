import classNames from 'classnames'
import React from 'react'

export enum PlayMode {
  RANDOM,
  LOOP,
  SEQUENTIAL,
  BECKONING
}

export enum PlayStatus {
  PLAY,
  PAUSE
}

const PlayBar = () => {
  function handleClick() {}

  return (
    <div className="flex justify-between items-center w-full px-2 gap-1 rounded-tl-1 rounded-tr-1 h-10 bg-red-5">
      <div className="relative">
        <i className="i-ri-album-fill"></i>
        <img src="" alt="" className="absolute w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-1 w-full text-ellipsis text-white">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-white text-sm">
          千年泪
        </span>
        <span>-</span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-white text-sm">
          TANK
        </span>
      </div>
      <div className="action">
        <i
          className={`i-ri-${
            selector.playStatus ? 'pause' : 'play'
          }-circle-line`}
          onClick={changeStatus}
        ></i>
      </div>
      <i className="i-ri-play-list-2-fill"></i>
    </div>
  )
}

export default React.memo(PlayBar)
