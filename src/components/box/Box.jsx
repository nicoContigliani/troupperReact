import React from 'react'
import './Box.css'
const Box = ({ data }) => {

    return (
        <div className='boxs' >
            <h2>{data[0]}</h2>   

        </div>
    )
}

export default Box
