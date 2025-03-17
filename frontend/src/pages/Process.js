import React from 'react'
import ProcessCoverPhoto from './process/ProcessCoverPhoto'
import Congratulations from './process/Congratulations'
import WhatYouNeedToKnow from './process/WhatYouNeedToKnow'
import SuccessfulResearchProject from './process/SuccessfulResearchProject'
import PeopleYoullWorkWith from './process/PeopleYoullWorkWith'
import Journals from './process/Journals'

const Process = () => {
  return (
    <div className='bg-[#eef1f3]'>
      <ProcessCoverPhoto />
      <Congratulations />
      <WhatYouNeedToKnow />
      <SuccessfulResearchProject />
      <PeopleYoullWorkWith />
      <Journals />
    </div>
  )
}

export default Process
