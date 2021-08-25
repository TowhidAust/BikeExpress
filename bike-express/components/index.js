import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SlickCarousel from './common/slickCarousel'

export default function Index() {
  return (
    <div className="container">
      <SlickCarousel/>
    </div>
  )
}
