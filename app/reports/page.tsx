import CustomBarChart from '@/components/Reports/CustomBarChart'
import ReportsBanner from '@/components/Reports/ReportsBanner'
import Stats from '@/components/Reports/Stats'
import React from 'react'

const pages = () => {
  return (
    <div>
        <ReportsBanner />
        <Stats/>
        <CustomBarChart/>
    </div>
  )
}

export default pages