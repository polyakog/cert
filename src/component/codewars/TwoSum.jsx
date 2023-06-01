import React, { useEffect, useState } from "react"


export const twoSum = (numbers, target) => {

        for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
    
}





export const TwoSum = () => {
    const [answer, setAnswer] = useState([])
    const arr = [1, 2, 3]
    const tar = 4
   

    const onClick = () => {
        debugger
        setAnswer(twoSum(arr, tar))
        
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