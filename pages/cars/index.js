import Categories from "../../components/module/Categories";
import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";


const Cars = () => {
    return (
      <>
      <Categories />
      <CarsPage data={carsData} />
      </>
    );
};

export default Cars;