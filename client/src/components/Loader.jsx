// this is going to be a loading spinner
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center py-1'>
    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-red-700'/>
    </div>
  )
}

export default Loader