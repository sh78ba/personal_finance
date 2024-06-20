import React from 'react'
import Barchartcard from './Barchartcard'
import Piechartcard from './Piechartcard'


const Card = (props) => {
    
  return (
    <div className='border-2 p-4 inline-block text-center bg-white rounded-lg ' >
        <h3 className='text-2xl my-2'>{props.cardheading}</h3>
        <div className=''>
            <div className='flex '>
            <div className='border-2 p-2 mx-3 rounded-lg bg-green-200'>
                <h4>{props.title1}</h4>
                <h3>₹ {props.incomeamount}</h3>
            </div>

            <div className='border-2 p-2 mx-3 rounded-lg bg-red-200'>
                <h4>{props.title2}</h4>
                <h3>₹ {props.expanseamount}</h3>
            </div>
                
            </div>

            <div className='flex justify-center '>
          
            {/* <div className=''> */}
                
            {props.charttype === 'bar' ? <Barchartcard /> : <Piechartcard />}


            {/* </div> */}
            
            </div>
        </div>
    </div>
  )
}

export default Card