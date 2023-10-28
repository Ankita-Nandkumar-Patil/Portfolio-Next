"use client"

const { useState } = require("react")


function useCounter(){
    const [count, setcount] = useState(0)
    const [count1, setcount1] = useState(0)

    function Increment(){
        setcount(count + 1);
    }

    function Decrement(){
        setcount1(count1 - 1);
    }

    return [count, count1, Increment, Decrement]
}

export default useCounter