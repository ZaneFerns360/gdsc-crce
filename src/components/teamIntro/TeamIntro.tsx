'use client'

import { useState } from 'react'
import CommunitySection from './subcomponents/communitySection/CommunitySection'
import ContentSection from './subcomponents/contentSection/ContentSection'
import DesignSection from './subcomponents/designSection/DesignSection'
import MobileDesignSection from './subcomponents/designSection/mobileDesignSection/MobileDesignSection'
import MLIntro from './subcomponents/mlSection/MLIntro'
import Terminal from './subcomponents/terminal/Terminal'
import {
  TeamButton,
  TeamDescriptionSection,
  TeamIntroContainer,
  TeamIntroSectionWrapper,
  TeamTitlesSection,
} from './TeamIntro.styled'

interface TeamIntroProps {
  isMobile: boolean
}
const TeamIntro: React.FC<TeamIntroProps> = ({ isMobile }) => {
  const [activeTeam, setActiveTeam] = useState<string>('tech')

  return (
    <TeamIntroContainer className="my-10 bg-transparent">
      <p className="h3 darkText dark:text-white ta-center hero-text font-semibold">What We Do</p>
      <TeamIntroSectionWrapper>
        <TeamTitlesSection>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('tech')}
            isSelected={activeTeam === 'tech'}
          >
            Technical
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('android')}
            isSelected={activeTeam === 'android'}
          >
            ML & Android
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('design')}
            isSelected={activeTeam === 'design'}
          >
            Design
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('content')}
            isSelected={activeTeam === 'content'}
          >
            Content
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('community')}
            isSelected={activeTeam === 'community'}
          >
            Community Management
          </TeamButton>
        </TeamTitlesSection>
        <TeamDescriptionSection>
          {activeTeam === 'tech' && <Terminal />}
          {activeTeam === 'android' && <MLIntro />}
          {activeTeam === 'design' &&
            (isMobile ? <MobileDesignSection /> : <DesignSection />)}
          {activeTeam === 'content' && <ContentSection />}
          {activeTeam === 'community' && <CommunitySection />}
        </TeamDescriptionSection>
      </TeamIntroSectionWrapper>
    </TeamIntroContainer>
  )
}

export default TeamIntro
