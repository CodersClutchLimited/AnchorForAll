import React from 'react'

const Stats = () => {
  return (
    <div className='mx-10'>
        <section className="flex justify-between bg-white py-10  border-b border-b-gray-300">
      <div className="text-center">
        <h2 className="text-[3.5rem] mb-3 font-bold">$23.0B</h2>
        <p className="text-sm mt-2 tracking-wide text-black">EXPENDITURES TO DATE</p>
      </div>
      <div className="text-center">
        <h2 className="text-[3.5rem] mb-3 font-bold">$1.7B</h2>
        <p className="text-sm mt-2 tracking-wide text-black">TOTAL 2023 EXPENDITURES</p>
      </div>
      <div className="text-center">
        <h2 className="text-[3.5rem] mb-3 font-bold">16.2%</h2>
        <p className="text-sm mt-2 tracking-wide text-black">
          AVERAGE ANNUAL CHANGE IN EXPENDITURES SINCE 2016
        </p>
      </div>
    </section>
    </div>
  )
}

export default Stats