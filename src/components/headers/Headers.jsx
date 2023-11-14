import React, { useEffect, useState } from 'react'
import './Headers.css'
import { ThreeCircles } from 'react-loader-spinner'



const Headers = (prop) => {
    const [sppinerOn, setSppinerOn] = useState(true)
    const [headerData, setHeaderData] = useState()


    useEffect(() => {


        if (prop !== undefined) setSppinerOn(!sppinerOn)
        let { data: { fullname } } = prop
        setHeaderData(fullname)

    }, [prop])


    return (
        <div className='headers'>

            {
                sppinerOn ?

                    <ThreeCircles
                        height="100"
                        width="100"
                        color="#d6ae01"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                    :
                    <h1>{headerData}</h1>



            }


        </div>
    )
}

export default Headers
