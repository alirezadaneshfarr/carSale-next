import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsDetails from "../../components/templates/CarsDetails";

const CarDetail = () => {

    const router = useRouter();
    const {carId} = router.query;
    console.log(carId);
    const carDetails = carsData[ carId - 1];
    console.log(carDetails);

    return <CarsDetails {...carDetails} />;
};

export default CarDetail;