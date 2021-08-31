import Banner from './common/banner/banner';
import { Button } from '@material-ui/core';
import CommonCard from './common/card/card';
// import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <>
      
      <Banner/>
      <section className="one-stop-section-root">
       <CommonCard/>
      </section>
    </>
  )
}
