// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
// There are pillars near the road.The distance between the pillars is the same and the width of the pillars is the same.Your function accepts three arguments:

// number of pillars(≥ 1);
// distance between pillars(10 - 30 meters);
// width of the pillar(10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters(without the width of the first and last pillar).

import React, { useEffect, useState } from "react"


export const pillars = (numPill, dist, width) => numPill > 1 ? (dist * 100 * (numPill - 1) + width * (numPill - 2)) : 0


export const PillarDistance = () => {
    const [answer, setAnswer] = useState([])

    const numPill = 3
    const dist = 10
    const width = 20





    const onClick = () => {

        setAnswer(pillars(numPill, dist, width))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> количество столбов: {numPill}</div>
            <div style={{ marginTop: '5px' }}> растояние между столбами (м): {dist}</div>
            <div style={{ marginTop: '5px' }}> ширина столба (см): {width}</div>
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}см</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}