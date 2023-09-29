import React, {useContext} from 'react'
import Layout from '../components/Layout/Layout'
import { AuhContext } from '../context/authContext'

const HomePage = () => {
  const {auth} = useContext(AuhContext)
  console.log(auth)
  return (
    <Layout><h1>HomePage</h1></Layout>
  )
}

export default HomePage