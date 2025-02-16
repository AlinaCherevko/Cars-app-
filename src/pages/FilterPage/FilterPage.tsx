import { FC, useEffect, useState } from "react";
import { getAllVehiclesMakes } from "../../servises/servises";
import SelectEl, { Option } from "../../components/Select/Select";
import { yearOptions } from "../../utils/utils";
import { Link } from "react-router";
import { CarList, IMake } from "../../components/CarList/CarList";

const FilterPage: FC = () => {
  const [year, setYear] = useState("");
  const [makes, setMakes] = useState<IMake[]>([]);
  const [selectedMake, setSelectedMake] = useState("");
  console.log(year);
  console.log(makes);

  const filteredData = makes.filter((item) => item.MakeName === selectedMake);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllVehiclesMakes();

        setMakes(data.Results);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  const makesOptions: Option[] = Array.from(makes, ({ MakeName }) => ({
    value: MakeName,
    label: MakeName,
  }));

  return (
    <div className="wrapper">
      <h1 className="pb-4 text-center">Vehicles Page App</h1>
      <div className="flex justify-center gap-4 pb-5">
        <SelectEl
          placeholder="Filter by year"
          options={yearOptions}
          onChange={setYear}
        />
        <SelectEl
          placeholder="Filter by make"
          options={makesOptions}
          onChange={setSelectedMake}
        />
      </div>
      <CarList cars={selectedMake ? filteredData : makes} />
      <Link
        to={
          filteredData?.length > 0
            ? `/result/${filteredData[0].MakeId}/${year}`
            : "#"
        }
        className={`${
          year !== "" && selectedMake !== ""
            ? "text-[#ffffff]  bg-blue-700 hover:bg-blue-800 "
            : "cursor-default text-blue-200  bg-blue-700"
        } rounded-md px-4 py-2 block w-fit mr-auto ml-auto mt-4`}
      >
        Next
      </Link>
    </div>
  );
};
export default FilterPage;
