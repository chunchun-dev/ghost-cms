import { Button, Page, Text } from '@geist-ui/core'
import type { NextPage } from 'next'
import Collections from '../components/Collections/Collections'

const Home: NextPage = () => {
  return (
    <Page width={'80vw'} padding={2.5} id='page'>
      <Text p style={{ color: '#9a9a9a', lineHeight: '25px', letterSpacing: '-.5px' }}>Collections</Text>
      <Collections/>
    </Page>
  )
}

export default Home
