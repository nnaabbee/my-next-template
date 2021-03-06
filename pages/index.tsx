import { VFC } from "react"
import Head from "next/head"
import styled from "styled-components"

const Home: VFC = () => (
  <Wrapper>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Hello World</h1>
    </main>
  </Wrapper>
)

export default Home

const Wrapper = styled.div`
  display: flex;
`
