import { useState } from 'react'

function EventHandling() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    const newCount = count + 1
    setCount(newCount)
    alert("Count increased to " + newCount)
  }

  const handleDecrease = () => {
    const newCount = count - 1
    setCount(newCount)
    alert("Count decreased to " + newCount)
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default EventHandling