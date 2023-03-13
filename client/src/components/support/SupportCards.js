import { Box } from '@mui/system'
import React from 'react'
import legalHelp from '../../assets/images/legal-help.svg'
import financialHelp from '../../assets/images/financial-help.svg'
import psychoHelp from '../../assets/images/psychological-help.svg'
import SupportSingleCard from './SupportSingleCard'
import Support from './Support'

const SupportCards = () => {

  const cardctx1 = 'Temma offers free legal support especially for students. You can use this in case of accidents,conflicts with your landlord, objections from, for example...'

  const cardctx2 = 'Weet je niet zo goed hoe je met geldzaken moet handelen? Je bookie, ofwel financiële adviseur,kan al je geldvragen beantwoorden aan...'

  const cardctx3 = 'Everyone struggles with mental problems. Do not be afraid to ask for advice ifyou are under too much stress or if other things outside of school are not going well...'

  return (
    <>
      <Support />
      <Box sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(3,1fr)', sm: 'repeat(1,1fr)', gap: "2rem" }, marginBottom: "4rem" }}>
        <SupportSingleCard imgs={legalHelp} name={'My lawyer'} cardctx={cardctx1} />
        <SupportSingleCard imgs={financialHelp} name={'My bookie'} cardctx={cardctx2} />
        <SupportSingleCard imgs={psychoHelp} name={'My mental coach'} cardctx={cardctx3} />
      </Box>
    </>
  )
}
export default SupportCards