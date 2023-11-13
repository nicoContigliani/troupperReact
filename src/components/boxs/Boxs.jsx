import React from 'react'
import './Box.css'
const Boxs = ({ data }) => {

    return (
        <div className='boxs' >
            {data.map((item) =>

                <li ley={item}>
                    <h1>{item}</h1>
                </li>

            )}
        </div>
    )
}

export default Boxs
