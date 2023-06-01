import React, { useEffect, useState } from "react"


// const reverseSeq = n => {
//     let array=[]
//     for (let i = 0; i < n; i++) {
//         array.push(i+1);        
//     }
//     return array.reverse();
// };

const reverseSeq = n => {
    return Array(n).fill(0).map((a, i) => n - i);
};



export const ReversedSequence = () => {
    const [answer, setAnswer] = useState([])
    const n = 10


    const onClick = () => {

        setAnswer(reverseSeq(n))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>

            <button onClick={onClick} style={{ marginTop: '200px', background: '#4b81df', color: 'white'}}>Result</button>

            {/* <div> Answer: {answer}</div> */}
            <div> Answer: {answer.join(', ')}</div>


        </div>
    )

}