
// Given a point in a Euclidean plane(x and y), return the quadrant the point exists in: 1, 2, 3 or 4(integer).x and y are non - zero integers, therefore the given point never lies on the axes.

//     Examples
//     (1, 2)     => 1
//     (3, 5)     => 1
//     (-10, 100) => 2
//     (-1, -9)   => 3
//     (19, -56)  => 4


import React, { useEffect, useState } from "react"

export function quadrant(x, y) {
    if (x>0 & y>0) return 1
    if (x<0 & y>0) return 2
    if (x<0 & y<0) return 3
    if (x>0 & y<0) return 4
}


export const Quadrants = () => {
    const [answer, setAnswer] = useState([[]])
    const x = -5
    const y = 2


    const onClick = () => {

        setAnswer(quadrant(x, y))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>

            <div style={{ marginTop: '200px' }}> x: {x}</div>
            <div style={{ marginTop: '10px' }}> y: {y}</div>
            <button onClick={onClick} style={{ marginTop: '20px', background: '#4b81df', color: 'white'}}>Result</button>

            {/* <div> Answer: {answer}</div> */}
            <div> Answer: {answer}</div>


        </div>
    )

}