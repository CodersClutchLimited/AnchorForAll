import Image from 'next/image'
import React from 'react'

const Focused2 = () => {
  return (
    <div className='flex justify-center mt-[90px] my-10 px-[4%] md:px-[10%]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="max-md:text-sm flex flex-col space-y-5">
            <h1 className='font-bold text-4xl whitespace-nowrap text-black'>Youth Empowerment & Advocacy</h1>
          <p className="">
          Africa’s youth represent the continent’s future, but lack of access and options prevent many from achieving their potential. Our youth initiatives work to: </p>
        <ul className="md:pl-8">
            <li>• Sponsor Secondary & Vocational Education: Provides scholarships, uniforms, supplies and tuition assistance.</li>
            <li>• Support Extracurriculars: Funds programs in arts, sports, technology and language to nourish passions.</li>
            <li>• Provide Mentorships: Matches youth to advisors to nurture personal growth and opportunity.</li>
            <li>• Develop Leadership Skills: Encourages civic participation, advocacy and vision setting to groom future leaders.</li>
            <li>• Amplify Voices: Engages policy makers on issues impacting youth like climate change and unemployment.</li>
          </ul>
          <p>
          By investing in their development today, we empower youth to reach their full potential as Africa’s leaders of tomorrow.          </p>
        </div>

        <div className="flex flex-col">
          <Image
          src="https://newafricafoundation.org/wp-content/uploads/2023/10/Screenshot-2023-10-04-at-11.35.04%E2%80%AFAM.png"
          alt="Description"
          width={300}
          height={300}
          className='w-full h-[530px] object-cover'
          />

        </div>

      </div>
    </div>
  )
}

export default Focused2