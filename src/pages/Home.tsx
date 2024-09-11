import ProductRange from "../components/home/ProductRange";
import ProductsContainer from "../components/home/ProductsContainer";
import FuniroFurniture from "../components/home/FuniroFurniture";
import SLickRoomSlider from "../components/home/SLickRoomSlider";
import PrimaryHero from "../components/home/PrimaryHero";

const Home = () => {
  return (
    <>
      <PrimaryHero />
      <ProductRange />
      <ProductsContainer />
      <SLickRoomSlider />
      <FuniroFurniture />
    </>
  )
}

export default Home;