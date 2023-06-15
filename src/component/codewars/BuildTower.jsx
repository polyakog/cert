// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// Build Tower
// Build a pyramid - shaped tower, as an array / list of strings, given a positive integer number of floors.A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]



import React, { useEffect, useState } from "react"

export const towerBuilder = (nFloors) => {
    let result = []
    let stars = [1]
    for (let i = 0; i < nFloors-1; i++) {
        stars.push(stars[i]+2)              
    }

    for (let i = 0; i < nFloors; i++) {
        let chars = "*".repeat(stars[i])
        if ((nFloors - 1 - i) !==0) {
            let spaces = " ".repeat(nFloors-1-i)
            chars = spaces + chars + spaces
        }
        result.push(chars)      
                
    }
    return result
}



export const TowerBuilder = () => {
    const [answer, setAnswer] = useState([])
    const a = 5





    const onClick = () => {
        setAnswer(towerBuilder(a))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> floors: {a}</div>
            {/* <div style={{ marginTop: '10px' }}> minor words: {b}</div> */}
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}