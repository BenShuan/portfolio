import React from 'react'
import HeroSection from '../ui/HeroSection'
import { SkillsSection } from '../ui/SkillsSection'

function HomePage() {
  return (
    <div className='h-[100%] overflow-scroll'>
      <HeroSection/>
      <SkillsSection/>
    </div>
  )
}

export default HomePage