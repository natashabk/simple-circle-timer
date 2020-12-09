import React from 'react'
import PropTypes from 'prop-types';

const Circle = ( { children, fontSize, size, bgColor, minutes, fill, playState, reset } ) => {
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

export default Circle

Circle.propTypes = {
  size: PropTypes.number,
  fontSize: PropTypes.number,
  bgColor: PropTypes.string,
  minutes: PropTypes.number,
  fill: PropTypes.string,
  playState: PropTypes.string,
  reset: PropTypes.bool
}