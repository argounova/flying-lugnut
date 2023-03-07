import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const Counter = () => {
    const [count, setCount] = useState(0)

    // Console logs the current value of count
    useEffect(() => {
        console.log(count)
    }, [count])

    const adjustCount = (amount) => {
        setCount(currentCount => {
            return currentCount + amount
        })
    }

    return (
        <>
            <Button onClick={() => adjustCount(-1)}>-</Button>
            <span>{count}</span>
            <Button onClick={() => adjustCount(+1)}>+</Button>

        </>
    );
}

export default Counter;