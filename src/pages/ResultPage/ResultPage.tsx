import { FC, useEffect, useState } from "react";
import { getVehicleByNameAndYear } from "../../servises/servises";
import { CarList } from "../../components/CarList/CarList";
import { useParams } from "react-router-dom";

const ResultPage: FC = () => {
  const [dataCar, setDataCar] = useState([]);
  const { makeId, year } = useParams();

  console.log(typeof makeId);

  useEffect(() => {
    const getDataByYearAndId = async () => {
      try {
        if (year && makeId) {
          const { Results } = await getVehicleByNameAndYear(makeId, year);
          setDataCar(Results);
        }
      } catch (error) {
        alert(error);
      }
    };
    getDataByYearAndId();
  }, [makeId, year]);

  return (
    <div className="wrapper">
      <h1 className="text-center mb-5">Car result</h1>
      <CarList cars={dataCar} />
    </div>
  );
};

export default ResultPage;
