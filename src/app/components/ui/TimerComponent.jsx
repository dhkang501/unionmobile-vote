'use client'
import React from 'react'
import '@/app/styles/mainHome/timer.scss'

const TimerComponent = ({deadline}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div className='timerContainer'>
      <div>
        <div className='timerBox'>{timeLeft.days}</div>
        <div className='smText'>DAY</div>
      </div>
      <div className='colon'> : </div>
      <div>
        <div className='timerBox'>{timeLeft.hours}</div>
        <div className='smText'>HR</div>
      </div>
      <div className='colon'> : </div>
      <div>
        <div className='timerBox'>{timeLeft.minutes}</div>
        <div className='smText'>MIN</div>
      </div>
      <div className='colon'> : </div>
      <div>
        <div className='timerBox'>{timeLeft.seconds}</div>
        <div className='smText'>SEC</div>
      </div>
    </div>
  )
}

export default TimerComponent