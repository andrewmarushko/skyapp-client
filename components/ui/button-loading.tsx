import React from 'react'

export const ButtonLoading: React.FC = () => {
  return (
    <div className="select-none flex justify-center items-center">
      <i className='w-1 h-1 border-radius-50 bg-accent-700 animate-loading-blink' />
      <i className='w-1 h-1 border-radius-50 bg-accent-700 animate-loading-blink delay-200' />
      <i className='w-1 h-1 border-radius-50 bg-accent-700 animate-loading-blink delay-500' />
    </div>
  )
}

export default ButtonLoading