<<<<<<< HEAD
import React from 'react'

const SummaryCard = ({icon, text, number, color}) => {
  return (
    <div className="rounded flex bg-white">
      <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>
        {icon}
      </div>
      <div className="pl-4 py-1">
        <p className="text-lg font-semibold">{text}</p>
        <p className="text-xl font-bold">{number}</p>
      </div>
    </div>
  )
}

export default SummaryCard
=======
import React from 'react'

const SummaryCard = ({icon, text, number, color}) => {
  return (
    <div className="rounded flex bg-white">
      <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>
        {icon}
      </div>
      <div className="pl-4 py-1">
        <p className="text-lg font-semibold">{text}</p>
        <p className="text-xl font-bold">{number}</p>
      </div>
    </div>
  )
}

export default SummaryCard
>>>>>>> 789b76e3a6e511471c37f3df811f9bd65b7a1c48
