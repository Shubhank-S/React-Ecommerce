import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import Offers from "../../components/Offers/Offers";
import NewCollections from "../../components/NewCollections/NewCollections";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
}

export default Home;
