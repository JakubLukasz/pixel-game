import React, { useEffect, useRef } from 'react'
import {
  Engine,
  Render,
  Bodies,
  World,
  Runner,
  Composite,
  Body,
} from 'matter-js'

const Index = ({ children }: { children?: React.ReactNode }) => {
  const handleKeyClick = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp':
        break
      case 'ArrrowRight':
        break
      case 'ArrowLeft':
        break
      case 'ArrowDown':
        break
      case 'Space':
        break
    }
  }

  const scene = useRef<any>(null)
  const engine = useRef(Engine.create())

  useEffect(() => {
    const width = document.body.clientWidth
    const height = document.body.clientHeight

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width,
        height,
        showVelocity: true,
        wireframes: false,
        background: 'transparent',
      },
    })

    Composite.add(engine.current.world, [
      Bodies.rectangle(width / 2, height - 10, width, 10, { isStatic: true }),
      Bodies.rectangle(width / 2, height / 2, 100, 100, { label: 'box' }),
    ])

    Runner.run(engine.current)
    Render.run(render)

    window.addEventListener('keydown', handleKeyClick)

    return () => {
      window.removeEventListener('keydown', handleKeyClick)
      Render.stop(render)
      Engine.clear(engine.current)
      Composite.clear(engine.current.world, false)
      render.canvas.remove()
    }
  }, [])

  return <div style={{ width: '100vw', minHeight: '100vh' }} ref={scene}></div>
}

export default Index
