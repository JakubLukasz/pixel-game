import styled from 'styled-components'

export const SpritesheetContainer = styled.div<{ frameSize: number }>`
  position: relative;
  width: ${({ frameSize }) => `${frameSize}px`};
  height: ${({ frameSize }) => `${frameSize}px`};
  overflow: hidden;
`

export const SpritesheetElement = styled.img<{
  x: number
  isAnimating: boolean
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  ${({ isAnimating, x }) =>
    isAnimating ? `transform:translateX(${x}px)` : null};
`
