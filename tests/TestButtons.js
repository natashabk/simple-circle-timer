import React, { useState } from 'react';
import Timer from '../src';

const TestButtons = () => {
  const [ running, setRunning ] = useState( true )
  const [ timerExists, setTimerExists ] = useState( false )
  const [ reset, setReset ] = useState( false )

  const mountPaused = () => {
    setTimerExists( true )
    setRunning( false )
  }

  const mountRunning = () => {
    setTimerExists( true )
    setRunning( true )
  }

  return (
    <>
      <div style={{ display: 'grid' }}>
        Controls
      <button onClick={() => mountRunning()}>Load New Timer (running)</button>
        <button onClick={() => mountPaused()}>Load New Timer (paused)</button>
        <button onClick={() => setTimerExists( false )}>Remove Timer</button>
        <button onClick={() => setRunning( true )}>Play</button>
        <button onClick={() => setRunning( false )}>Pause</button>
        <button onClick={() => setReset( true )}>Reset</button>
      </div>
      <br />
      {timerExists ? <Timer running={running} setRunning={setRunning} reset={reset} setReset={setReset} /> : null}
    </>
  )
}
export default TestButtons;