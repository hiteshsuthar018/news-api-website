import React from 'react'
import Loading from '../Fidget-spinner.gif'
const Spinner = () => {

  return (
    <div className='my-3 text-center spin'>
      <img src={Loading} alt="" />
    </div>
  )
}
export default Spinner;
