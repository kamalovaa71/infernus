import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Sales from "../components/Sales/Sales";

function HomePage() {
  return (
    <>
      <Banner />
      <div className="container">
        <Categories/>
        <Sales/>
      </div>
    </>
  );
}

export default HomePage;
