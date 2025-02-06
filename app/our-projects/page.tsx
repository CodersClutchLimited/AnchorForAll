import ContentCards from '@/components/Projects/ContentCards'
import ProjectBanner from '@/components/Projects/ProjectBanner'
import React from 'react'

const pages = () => {
    return (
        <div>
            <>
                <ProjectBanner />
                <ContentCards/>
            </>
        </div>
    )
}

export default pages