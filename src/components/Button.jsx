import React from 'react'

function Button({operator, fn}) {

  return (
    <button
        type='button'
        className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full effectButton shadow- hover:shadow-[inset_-2px_-2px_8px_rgb(190,255,190),inset_3px_3px_5px_rgba(0,0,0,0.1)]'
        onClick={fn}
    >{ operator }</button>
  )
}

export default Button

//hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500