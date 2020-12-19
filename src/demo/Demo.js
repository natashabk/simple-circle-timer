//icon source: https://www.flaticon.com/authors/those-icons

import React, { useState } from 'react';
import Timer from '../src/index';
import { ReactComponent as Pause } from '.icons/pause.svg';
import { ReactComponent as Play } from '.icons/play.svg';
import { ReactComponent as Stop } from '.icons/stop.svg';

const themeColor = '#8469b5'

const pageStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

const display = {
  backgroundColor: 'white',
  borderRadius: '100%',
  fontSize: 20,
  margin: 5,
  width: 40,
  height: 40
}

const iconStyle = {
  height: 40,
  width: 40,
  fill: themeColor
}

const Demo = () => {
  const [ running, setRunning ] = useState( true )
  const [ reset, setReset ] = useState( false )

  return (
    <div className='wrapper' style={pageStyle}>
      <Timer size={300} fillColor={themeColor} fontSize={60} running={running} setRunning={setRunning} reset={reset} setReset={setReset} />
      <div style={{ width: 200, display: 'flex', justifyContent: 'space-between' }}>
        <div style={display} onClick={() => setRunning( true )}><Play style={iconStyle} /></div>
        <div style={display} onClick={() => setRunning( false )}><Pause style={iconStyle} /></div>
        <div style={display} onClick={() => setReset( true )}><Stop style={iconStyle} /></div>
      </div>
    </div>
  )
}
export default Demo;