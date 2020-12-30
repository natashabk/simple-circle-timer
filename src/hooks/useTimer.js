import { useState, useEffect } from 'react'
let timeAtPause = 0;

export const useTimer = ( minutes, running, setRunning, timeAtLoad, reset, setReset, onComplete ) => {
  const [ ms, setMs ] = useState( minutes * 60000 )
  const [ startTime, setStartTime ] = useState( timeAtLoad )
  const [ count, setCount ] = useState( 0 )
  const [ completed, setCompleted ] = useState( false )

  const timeLeft = () => {
    if ( count === 0 ) return ms
    else return ( ms + startTime ) - Date.now()
  }

  useEffect( () => {
    if ( reset ) {
      setRunning( 0 )
      setCount( 0 )
    }
  }, [ reset, setRunning ] )

  useEffect( () => {
    const startTimer = () => {
      if ( timeLeft() > 0 ) {
        setMs( timeAtPause )
        setStartTime( Date.now() )
        if ( setRunning ) setRunning( true )
      }
    }
    const pauseTimer = () => {
      if ( timeLeft() > 0 ) {
        timeAtPause = timeLeft()
        if ( setRunning ) setRunning( false )
      }
    }
    const resetTimer = () => {
      timeAtPause = minutes * 60000
      setMs( timeAtPause )
      setStartTime( Date.now() )
      if ( setReset ) setReset( false )
    }

    if ( count > 0 && !reset ) { running ? startTimer() : pauseTimer() }
    else if ( reset ) resetTimer()
    else if ( count === 0 && running ) resetTimer()

  }, [ running, minutes, reset ] )

  useEffect( () => {
    if ( timeLeft() > 0 && running ) {
      const tick = setInterval( () => setCount( count + 1 ), 100 );
      return () => clearInterval( tick );
    } else if ( timeLeft() <= 0 && running && !completed ) setCompleted( true )
  }, [ timeLeft(), running, count ] );

  useEffect( () => {
    if ( completed ) onComplete();
  }, [ completed ] )

  return {
    timeLeft: timeLeft(),
  }

}