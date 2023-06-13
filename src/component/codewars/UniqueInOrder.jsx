// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


import React, { useEffect, useState } from "react"

// export const uniqueInOrder = (iterable) => {
//     let array = (!Array.isArray(iterable) ? iterable.split('') : iterable)
//     if (!array.length) return []
//     let result = []
//     for (let i = 0; i < array.length - 1; i++) {

//         if (array[i] !== array[i + 1]) { result.push(array[i]) }
//     }
//     result.push(array[array.length - 1])

//     return result
// }

export const uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}



export const UniqueInOrder = () => {
    const [answer, setAnswer] = useState([])
    const a = 'ABBCcAD'




    const onClick = () => {
        setAnswer(uniqueInOrder(a))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> data: {a}</div>
            {/* <div style={{ marginTop: '10px' }}> B: {b}</div> */}
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}