// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

import React, { useEffect, useState } from "react"


export const distinct=a=> [...new Set(a)]



export const RemoveDuplicates2 = () => {
    const [answer, setAnswer] = useState([])
    const a = [1,1,2]
    
  
    const onClick = () => {
        setAnswer(distinct(a))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> массив: [{a.join(', ')}]</div>
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            {/* <div style={{ marginTop: '10px' }}> Answer: {answer}</div> */}
            <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div>


        </div>
    )

}