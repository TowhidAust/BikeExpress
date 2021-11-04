import BudgetBikes from './budgetBikes';
import Banner from './common/banner/banner';
import CommonCard from './oneStopCard';


export default function Index() {
  return (
    <>
      <Banner />
      <section className="one-stop-section-root">
        <CommonCard />
        <BudgetBikes/>
      </section>
    </>
  )
}
