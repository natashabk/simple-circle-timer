import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor, fireEvent, screen } from '@testing-library/react'
import regeneratorRuntime from "regenerator-runtime";
import Timer from '../src'
import TestButtons from './TestButtons'

const anyTime = /[0-9][0-9]:[0-9][0-9]/

describe( 'Timer with default settings', () => {
  let component
  beforeEach( () => { component = render( <Timer /> ) } )

  test( 'renders Timer with default settings', () => {
    expect( component.container ).toHaveTextContent( anyTime )
  } )

  test( 'Timer component renders Circle component', () => {
    expect( component.container.querySelector( '.wrap' ) ).toBeDefined()
  } )
} )

describe( 'Timer with custom settings', () => {
  let component
  beforeEach( () => { component = render( <Timer minutes={2} running={false} showMs={true} /> ) } )

  test( 'renders paused Timer showing milliseconds', () => {
    expect( component.container ).toHaveTextContent( '02:00:00' )
  } )

  test( 'after 5 seconds time display is still the same', async () => {
    await waitFor( () => expect( component.container ).toHaveTextContent( '02:00:00' ), { timeout: 5000 } )
  } )
} )

describe( 'Test buttons', () => {
  let component
  beforeEach( () => { component = render( <TestButtons /> ) } )

  test( 'Has mount:running button', () => {
    expect( component.container ).toHaveTextContent( 'Load New Timer (running)' )
  } )
  test( 'Has mount:paused button', () => {
    expect( component.container ).toHaveTextContent( 'Load New Timer (paused)' )
  } )
  test( 'Has unmount button', () => {
    expect( component.container ).toHaveTextContent( 'Remove Timer' )
  } )
  test( 'Has play button', () => {
    expect( component.container ).toHaveTextContent( 'Play' )
  } )
  test( 'Has pause button', () => {
    expect( component.container ).toHaveTextContent( 'Pause' )
  } )
  test( 'Has reset button', () => {
    expect( component.container ).toHaveTextContent( 'Reset' )
  } )

} )

test( 'Timer reaches 00:00 and displays completion message', async () => {
  const { container } = render( <Timer minutes={0.08} /> )
  await waitFor( () => expect( container ).toHaveTextContent( '✓' ), { timeout: 5000 } )
} )

test( 'Timer calls the onComplete function at 00:00', async () => {
  const onComplete = jest.fn()
  render( <Timer minutes={0.08} onComplete={onComplete} /> )
  await waitFor( () => expect( onComplete ).toHaveBeenCalledTimes( 1 ), { timeout: 5000 } )
} )

test( 'Mounting the Timer - running', async () => {
  const { container } = render( <TestButtons /> )
  fireEvent.click( screen.getByText( 'Load New Timer (running)' ) )
  await waitFor( () =>
    expect( container ).toHaveTextContent( anyTime ), { timeout: 3000 }
  )
} )

test( 'Mounting the Timer - paused', async () => {
  const { container } = render( <TestButtons /> )
  fireEvent.click( screen.getByText( 'Load New Timer (paused)' ) )
  await waitFor( () =>
    expect( container ).toHaveTextContent( anyTime ), { timeout: 3000 }
  )
} )

test( 'Removing the Timer', async () => {
  const { container } = render( <TestButtons /> )
  fireEvent.click( screen.getByText( 'Load New Timer (paused)' ) )
  await waitFor( () => expect( container ).toHaveTextContent( anyTime ) )
  const circle = document.querySelector( '.circle' )
  fireEvent.click( screen.getByText( 'Remove Timer' ) )
  await waitFor( () => expect( circle ).not.toBeInTheDocument() )
} )



test( 'Pausing the timer while running', async () => {
  const { container } = render( <TestButtons /> )

  fireEvent.click( screen.getByText( 'Load New Timer (running)' ) )
  await waitFor( () => expect( container ).toHaveTextContent( '00:59' ), { timeout: 2000 } )
  const numBeforePause = Number( document.querySelector( '.time' ).innerHTML.slice( -2 ) )

  await waitFor( () => expect( container ).toHaveTextContent( '00:58' ), { timeout: 2000 } )
  fireEvent.click( screen.getByText( 'Pause' ) )
  const numAfterPause = Number( document.querySelector( '.time' ).innerHTML.slice( -2 ) )

  await waitFor( () => expect( numBeforePause ).toBeGreaterThan( numAfterPause ), { timeout: 2000 } )
  const finalNum = Number( document.querySelector( '.time' ).innerHTML.slice( -2 ) )

  expect( finalNum ).toEqual( numAfterPause )
} )

test( 'Playing the timer from pause', async () => {
  const { container } = render( <TestButtons /> )

  fireEvent.click( screen.getByText( 'Load New Timer (paused)' ) )
  await waitFor( () => expect( container ).toHaveTextContent( anyTime ), { timeout: 3000 } )

  fireEvent.click( screen.getByText( 'Play' ) )
  await waitFor( () => expect( container ).toHaveTextContent( '00:58' ), { timeout: 3000 } )
} )

test( 'Resetting the timer from running', async () => {
  const { container } = render( <TestButtons /> )
  fireEvent.click( screen.getByText( 'Load New Timer (running)' ) )
  await waitFor( () => expect( container ).toHaveTextContent( '00:58' ), { timeout: 3000 } )

  fireEvent.click( screen.getByText( 'Reset' ) )
  await waitFor( () => expect( container ).toHaveTextContent( '01:00' ), { timeout: 3000 } )

} )

test( 'Resetting the timer from paused', async () => {
  const { container } = render( <TestButtons /> )

  fireEvent.click( screen.getByText( 'Load New Timer (running)' ) )
  const numBeforePause = document.querySelector( '.time' ).innerHTML
  await waitFor( () => expect( container ).toHaveTextContent( '00:58' ), { timeout: 3000 } )

  fireEvent.click( screen.getByText( 'Pause' ) )
  await waitFor( () => expect( container ).toHaveTextContent( '00:58' ), { timeout: 2000 } )

  fireEvent.click( screen.getByText( 'Reset' ) )
  await waitFor( () => expect( container ).toHaveTextContent( numBeforePause ), { timeout: 3000 } )
} )
