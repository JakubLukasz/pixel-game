import React from 'react'
import CyborgAttack from './assets/Cyborg_climb.png'
import Spritesheet from './components/Spritesheet'
import Engine from './Engine'

const animations = []

const App = () => {
  return (
    // <Spritesheet
    //   imgSrc={CyborgAttack}
    //   isAnimating={true}
    //   frameSize={48}
    //   framesCount={6}
    // />
    <Engine />
  )
}

export default App
