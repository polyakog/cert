// https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

import React, { useEffect, useState } from "react"


const areaOrPerimeter = (l , w) => l===w ? l*l: (l+w)*2


export const AreaOrPerimeter = () => {
    const [answer, setAnswer] = useState([])

    const l = 3
    const w=4
  
    const onClick = () => {

        setAnswer(areaOrPerimeter(l, w))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> длина: [{l}]</div>
            <div style={{ marginTop: '10px' }}> ширина: [{w}]</div>
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            {/* <div style={{ marginTop: '10px' }}> Answer: {answer}</div> */}
            <div style={{marginTop:'10px'}}> Answer: {answer}</div>


        </div>
    )

}