import React from 'react'
import PropTypes from 'prop-types';
import Circle from './Circle';
import { useTimer } from '../hooks/useTimer'
import './circle.css';

const Timer = ( props ) => {
  const { minutes, running, setRunning, timeAtLoad, reset, setReset, showMs } = props
  const { timeLeft, completed } = useTimer( minutes, running, setRunning, timeAtLoad, reset, setReset )

  if ( completed ) props.onComplete();

  let mins = Math.floor( ( timeLeft % 360000 ) / 60000 );
  let secs = Math.floor( ( timeLeft % 60000 ) / 1000 );
  let mils = Math.floor( ( timeLeft % 60000 ) / 10 );

  const pad = ( num ) => ( '00' + num ).slice( -2 )
  const displayTime = `${ pad( mins ) }:${ pad( secs ) }${ showMs ? `:${ pad( mils ) }` : '' }`

  return (
    <Circle
      size={props.size}
      fontSize={props.fontSize}
      minutes={props.minutes}
      fill={props.fillColor}
      bgColor={props.bgColor}
      playState={running ? 'running' : 'paused'}
      reset={reset}
    >
      {timeLeft > 0 ? displayTime : props.completeMsg}
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
  timeAtLoad: PropTypes.number,
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