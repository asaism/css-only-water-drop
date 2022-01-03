import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Drawing | Water Drop</title>
        <meta name="description" content="CSS Drawing | css only water drop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.drops}>
        <div className={styles.drop}></div>
        <div className={styles.drop}></div>
        <div className={styles.drop}></div>
        <div className={styles.drop}></div>
      </div>
    </div>
  )
}

export default Home
