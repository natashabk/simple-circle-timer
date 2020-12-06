import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import './styles/styles.css';
let timeAtPause = 0;

const Circle = ( { children, size, fontSize, bgColor, minutes, fill, playState, reset } ) => {
  const bg = `${ fill }29`
  const sec = minutes * 60
  const animations = {
    left: `${ sec * 0.5 }s linear 0s 1 normal both ${ playState } left`,
    right: `${ sec * 0.5 }s linear ${ sec * 0.5 }s 1 normal both ${ playState } right`,
    dot: `${ sec }s linear 0s 1 normal both ${ playState } dot`
  }
  const dotspan = { width: size * 0.1, height: size * 0.1, background: fill }
  const bar = { background: bg, clip: `rect(0px, ${ size }px, ${ size }px, ${ size * 0.5 }px)` }
  const progress = { background: fill, clip: `rect(0px, ${ size * 0.5 }px, ${ size }px, 0px)` }
  const leftProg = { ...progress, animation: animations.left, zIndex: 1 }
  const rightProg = { ...progress, animation: animations.right }
  const dot = { marginTop: size * -0.05, height: size * 0.1, animation: animations.dot }
  const inner = {
    width: size * 0.8,
    height: size * 0.8,
    background: bgColor,
    margin: `${ size * -0.4 }px 0 0 ${ size * -0.4 }px`,
  }

  return (
    <>
      <div className='wrap' style={{ height: size, width: size }}>
        <div className='circle inner' style={inner} />
        <div className='circle' />
        <div className='time' style={{ fontSize: fontSize, color: fill }}>
          {children}
        </div>
        <div className='circle' style={{ zIndex: 1, boxShadow: 'none' }}>
          {!reset ? <div className='dot' style={dot}><span style={dotspan}></span></div> : null}
          <div className='bar' style={bar}>
            {!reset ? <div className='progress' style={leftProg} /> : null}
          </div>
          <div className='bar right' style={bar}>
            {!reset ? <div className='progress' style={rightProg} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

const Timer = ( {
  size = 200,
  fontSize = 40,
  minutes = 1,
  fillColor = '#5bcc69',
  bgColor = 'white',
  showMs = false,
  onComplete = () => console.log( 'Timer complete' ),
  completeMsg = '✓',
  running = true,
  setRunning,
  timeAtLoad = Date.now(),
  reset = false,
  setReset
} ) => {
  const [ ms, setMs ] = useState( minutes * 1000 * 60 )
  const [ startTime, setStartTime ] = useState( timeAtLoad )
  const [ count, setCount ] = useState( 0 )

  const timeLeft = ( ms + startTime ) - Date.now()
  let mins = Math.floor( ( timeLeft % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  let secs = Math.floor( ( timeLeft % ( 1000 * 60 ) ) / 1000 );
  let mils = Math.floor( ( timeLeft % ( 1000 * 60 ) ) / 10 );

  useEffect( () => {
    if ( reset ) {
      setCount( 0 )
      setRunning( 0 )
    }
  }, [ reset, setRunning ] )

  useEffect( () => {
    const startTimer = () => {
      if ( timeLeft > 0 ) {
        setMs( timeAtPause )
        setStartTime( Date.now() )
        if ( setRunning ) setRunning( true )
      }
    }
    const pauseTimer = () => {
      if ( timeLeft > 0 ) {
        timeAtPause = timeLeft
        if ( setRunning ) setRunning( false )
      }
    }
    const resetTimer = ( nextAction ) => {
      timeAtPause = minutes * 1000 * 60
      setMs( timeAtPause )
      setStartTime( Date.now() )
      if ( nextAction === 'run' && setRunning ) setRunning( true )
      if ( setReset ) setReset( false )
    }
    if ( count > 0 ) { running ? startTimer() : pauseTimer() }
    else if ( reset ) resetTimer( 'pause' )
    else if ( count === 0 && running ) resetTimer( 'run' )
  }, [ running, minutes, reset ] )

  useEffect( () => {
    if ( timeLeft > 0 && running ) {
      const tick = setInterval( () => setCount( count + 1 ), 100 );
      return () => clearInterval( tick );
    } else if ( timeLeft <= 0 && running ) onComplete()
  }, [ timeLeft, running, count, onComplete ] );

  const pad = ( num ) => ( '00' + num ).slice( -2 )
  return (
    <Circle
      size={size}
      fontSize={fontSize}
      minutes={minutes}
      fill={fillColor}
      bgColor={bgColor}
      playState={running ? 'running' : 'paused'}
      reset={reset}
    >
      {timeLeft > 0 && `${ pad( mins ) }:${ pad( secs ) }${ showMs ? `:${ pad( mils ) }` : '' }`}
      {timeLeft <= 0 && completeMsg}
    </Circle>
  )
};

ReactDOM.render( <Timer />, document.getElementById( 'root' ) );

Circle.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.number,
  fontSize: PropTypes.number,
  bgColor: PropTypes.string,
  minutes: PropTypes.number,
  fill: PropTypes.string,
  playState: PropTypes.string,
  reset: PropTypes.bool
}

Timer.propTypes = {
  size: PropTypes.number,
  fontSize: PropTypes.number,
  minutes: PropTypes.number,
  fillColor: PropTypes.string,
  bgColor: PropTypes.string,
  showMs: PropTypes.bool,
  onComplete: PropTypes.func,
  completeMsg: PropTypes.string,
  running: PropTypes.bool,
  setRunning: PropTypes.func,
  timeAtLoad: PropTypes.object,
  reset: PropTypes.bool,
  setReset: PropTypes.func
};

ReactDOM.render( timer, document.getElementById( 'root' ) );