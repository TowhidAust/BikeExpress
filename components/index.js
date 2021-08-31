import Banner from './common/banner/banner';
import { Button } from '@material-ui/core';
// import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <>
      
      <Banner/>
      <section className="one-stop-section-root">
        <Button color="primary">Hello World</Button>
      </section>
    </>
  )
}
