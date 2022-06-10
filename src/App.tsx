import React from 'react'
import CyborgAttack from './assets/Cyborg_attack1.png'
import Spritesheet from './components/Spritesheet'

const App = () => {
  return (
    <div>
      <Spritesheet
        imgSrc={CyborgAttack}
        isAnimating={false}
        frameSize={48}
        framesCount={6}
      />
    </div>
  )
}

export default App
