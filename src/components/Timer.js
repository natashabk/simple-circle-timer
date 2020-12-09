import React from 'react'
import PropTypes from 'prop-types';
import Circle from './Circle';

const Timer = ( props ) => {
  const { size, fontSize, minutes, fillColor, bgColor, showMs, onComplete } = props
  const { completeMsg, running, setRunning, timeAtLoad, reset, setReset } = props
  // const { timeLeft, completed } = useTimer( minutes, running, timeAtLoad )

  // if ( completed ) onComplete();
  const timeLeft = 10000 //delete once custom hooks are working
  const pad = ( num ) => ( '00' + num ).slice( -2 )
  let mins = Math.floor( ( timeLeft % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
  let secs = Math.floor( ( timeLeft % ( 1000 * 60 ) ) / 1000 );
  let mils = Math.floor( ( timeLeft % ( 1000 * 60 ) ) / 10 );

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
export default Timer;

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

Timer.defaultProps = {
  size: 200,
  fontSize: 40,
  minutes: 1,
  fillColor: '#5bcc69',
  bgColor: 'white',
  showMs: false,
  onComplete: () => console.log( 'Timer complete' ),
  completeMsg: '✓',
  running: true,
  setRunning: null,
  timeAtLoad: Date.now(),
  reset: false,
  setReset: null
}