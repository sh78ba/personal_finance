import React from 'react'
import Piechartcard from './Piechartcard'


const Card = () => {
  return (
    <div className='border-2 p-4 inline-block text-center bg-white'>
        <h3 className='text-2xl'>Expanse Tracker</h3>
        <div>
            <div className='flex'>
            <div className='border-2 p-3 mx-3'>
                <h4>Income This Month</h4>
                <h3>$500</h3>
            </div>

            <div className='border-2 p-3 mx-3'>
                <h4>Expanse This Month</h4>
                <h3>$200</h3>
            </div>
                
            </div>

            <div>
            <div className='w-3/6'>
        <Piechartcard>

        </Piechartcard>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Card