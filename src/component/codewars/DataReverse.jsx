// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

//     11111111  00000000  00001111  10101010
//         (byte1)(byte2)(byte3)(byte4)
// should become:

// 10101010  00001111  00000000  11111111
//     (byte4)(byte3)(byte2)(byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

import React, { useEffect, useState } from "react"

function dataReverse(data) {
    let a = [];
    while (data.length)
        a.unshift(...data.splice(0, 8));  //меняем местами куски
    return a;
}

/* _______________1st option */
// const dataReverse = a => a.join``.match(/\d{8}/g).reverse().join``.split``.map(Number);

// export const dataReverse = (data) => {
//     let segment = []
//     let bytes = []

/* _______________2nd option */
//     for (let j = 0; j < data.length / 8; j++) {
//         for (let i = j * 8; i < j * 8 + 8; i++) {
//             segment.push(data[i]);
//         }
//         bytes.push(segment.join(''))
//         segment = []
//     }
//     let result = []
//     result = bytes.reverse().map(b => b.split('')).join(',').split(',').map((n) => Number(n))
//        return result
// }


export const DataReverse = () => {
    const [answer, setAnswer] = useState([])
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]

    const onClick = () => {

        setAnswer(dataReverse(data))
    }

    useEffect(() => {
        console.log('answer:', answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> data : {data}</div>
            {/* <div style={{ marginTop: '10px' }}> e: {e}</div>
            <div style={{ marginTop: '10px' }}> s: {s}</div> */}

            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}

        </div>
    )

}