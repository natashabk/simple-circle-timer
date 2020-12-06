# Simple React Circle Timer
  Lightweight, easily implemented countdown timer with circular progress bar around the outside. 

![demo](https://github.com/natashabuck/circletimer/blob/main/src/Demo/example.png "Demo")


  #### Accurate timekeeping:
  Instead of relying on the component's state to keep track of time, which is very prone to bugs and innaccuracies, this timer uses interval checks on the current Date object, ensuring accurate results down to the millisecond. 
  #### Play/Pause/Reset:
  Most importantly, this timer differs from others in the amount of control it gives the user. See below for how to implement your own buttons or trigger the Play, Pause, Reset functions.
  #### Scalable display:
  The progress bar animation is handled by pure CSS (including the play/pause display). The entire component itself is scalable to any size (using the 'size' and 'fontSize' props) and color (using the 'fillColor' and 'bgColor' props). The font family and other styling will inherit from your parent component.  

## Installation

`yarn add simple-circle-timer`

or

`npm install simple-circle-timer`

## Basic Usage
```javascript
import {Timer} from 'simple-circle-timer'

const YourComponent = () => (
  <Timer/>
)
```

## Props
  **size** : (int) length and width of component in pixels  
  **fontSize** : (int) size of text inside the circle  
  **minutes** : (float) number of minutes you want the timer to run for (whole numbers or decimals)  
  **fillColor** : (str) color of progress bar & countdown text (hex code or color)  
  **bgColor** : (str) color inside the circle (hex code or color)  
  **showMs** : (bool) show milliseconds in the displayed time  
  **onComplete** : (function) runs when the timer reaches 00:00  
  **completeMsg** : (str) text displayed when the time runs out  
  **running** : (bool) whether or not the timer is counting down  
  **setRunning** : (function) needs to be passed to Timer for play, pause, reset (see below)  
  **reset** : (bool) set to true momentarily to trigger reset (see below)  
  **setReset** : (function) needs to be passed to Timer for reset (see below)  


## Play, Pause, Reset
This component is designed to give the user control over the timer. Below is an example of how to set up buttons using React hooks to play, pause, reset, and mount the timer with different settings. 

```javascript
import React, { useState } from 'react';
import {Timer} from 'simple-circle-timer'

const YourComponent = () => {
  const [ timerExists, setTimerExists ] = useState( false )
  const [ running, setRunning ] = useState( true )
  const [ reset, setReset ] = useState( false )

  //new timer is loaded in a paused state, awaiting 'play' command
  const mountPaused = () => {
    setTimerExists( true )
    setRunning( false )
  }

  //new timer is loaded already in a running state
  const mountRunning = () => {
    setTimerExists( true )
    setRunning( true )
  }

  //replace any/all of these buttons with your own components, or trigger the same state changes with functions from elsewhere in your app. 
  return (
    <>
      <div style={{ display: 'grid' }}>
        <button onClick={() => mountRunning()}>Load New Timer (running)</button>
        <button onClick={() => mountPaused()}>Load New Timer (paused)</button>
        <button onClick={() => setTimerExists( false )}>Remove Timer</button>
        <button onClick={() => setRunning( true )}>Play</button>
        <button onClick={() => setRunning( false )}>Pause</button>
        <button onClick={() => setReset( true )}>Reset</button>
      </div>
      {timerExists ? <Timer running={running} setRunning={setRunning} reset={reset} setReset={setReset} /> : null}
    </>
  )
}
```