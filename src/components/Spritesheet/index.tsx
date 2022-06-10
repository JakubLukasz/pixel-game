import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SpritesheetContainer, SpritesheetElement } from './Spritesheet'

interface Props {
  imgSrc: any
  frameSize: number
  framesCount: number
  isAnimating: boolean
}

interface Frame {
  x: number
  currentFrame: number
}

const Spritesheet = ({
  imgSrc,
  frameSize,
  framesCount,
  isAnimating = false,
}: Props) => {
  const [frame, setFrame] = useState<Frame>({
    x: 0,
    currentFrame: 1,
  })

  useEffect(() => {
    const animationInteval = setInterval(() => {
      setFrame(({ x, currentFrame }: Frame) => {
        currentFrame += 1
        x -= frameSize
        if (currentFrame === framesCount) return { x: 0, currentFrame: 1 }
        else return { currentFrame, x }
      })
    }, 150)

    return () => clearInterval(animationInteval)
  }, [])

  return (
    <SpritesheetContainer frameSize={frameSize}>
      <SpritesheetElement src={imgSrc} x={frame.x} isAnimating={isAnimating} />
    </SpritesheetContainer>
  )
}

export default Spritesheet
