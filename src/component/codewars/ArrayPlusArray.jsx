
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//     P.S.Each array includes only integer numbers.Output is a number too.

import React, { useEffect, useState } from "react"


// export const arrayPlusArray = (arr1, arr2) => {
//     let element1 = 0
//     let element2 = 0
//     for (let index = 0; index < arr1.length; index++) {
//         element1 = arr1[index] + element1    
// }
//         for (let index = 0; index < arr2.length; index++) {
//         element2 = arr2[index] + element2    
// }
//     return element1 + element2
    
// }

export function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}





export const ArrayPlusArray = () => {
    const [answer, setAnswer] = useState([])
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
   
   

    const onClick = () => {
        
        setAnswer(arrayPlusArray(arr1, arr2))
        
    }

    useEffect(() => { 
        console.log(answer)
        
    }, [answer])


    return (
        <div>

            <button onClick={onClick}>Result</button>

            <div> Answer: {answer}</div>


        </div>
    )

}