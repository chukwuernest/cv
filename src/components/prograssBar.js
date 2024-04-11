import React, { useEffect, useState } from 'react'
import Main from '../main'

const PrograssBar = () => {
  const [filled, setFilled] = useState(0)

  useEffect(() => {
    if (filled < 100) {
      setTimeout(() => {
        setFilled(filled + 20)
      }, 1000)
    }
  }, [filled])
  const getColor = () => {
    if (filled < 80) {
      return '#EF6416'
    }
    if (filled < 100) {
      return '#2ecc71'
    }
  }
  if (filled >= 100) {
    return <Main />
  }
  return (
    <div className='container'>
      <h1>CHUKWU MONDAY ERNEST MICHEAL</h1>
      <div className='progress-bar'>
        <div
          className='progress-fill'
          style={{ width: `${filled}%`, background: getColor() }}
        ></div>
        <div className='loading'>{filled}%</div>
      </div>
    </div>
  )
}

export default PrograssBar
