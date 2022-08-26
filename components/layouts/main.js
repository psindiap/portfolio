import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Partha Sarathi's Homepage" />
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <meta property="og:site_name" content="Partha Sarathi Purkayastha" />
        <meta name="og:title" content="Partha Sarathi Purkayastha" />
        <meta property="og:type" content="website" />
        <title>PSP - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        { router.route !== '/cv' && <LazyVoxelDog />}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
