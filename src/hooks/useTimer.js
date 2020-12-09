import { useState, useEffect } from 'react'
let timeAtPause = 0;

export const useTimer = ( minutes, running, timeAtLoad ) => {
  const [ ms, setMs ] = useState( minutes * 1000 * 60 )
  const [ startTime, setStartTime ] = useState( timeAtLoad )
  const [ count, setCount ] = useState( 0 )
  const [ completed, setCompleted ] = useState( false )

  const timeLeft = ( ms + startTime ) - Date.now()

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
    } else if ( timeLeft <= 0 && running ) setCompleted( true )
  }, [ timeLeft, running, count ] );

  return {
    timeLeft,
    completed,
  }

}