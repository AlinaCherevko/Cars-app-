import { FC } from "react";

export interface IMake {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

interface ICar {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
export type CarType = IMake | ICar;

export interface ICars {
  cars: CarType[];
}

export const CarList: FC<ICars> = ({ cars }) => {
  return (
    <ul className="grid max-sm:grid-cols-1 grid-cols-[repeat(3,_1fr)] mx-auto gap-6 max-w-[800px] ">
      {cars.map((car) => {
        if ("MakeId" in car) {
          return (
            <li
              className="max-sm:w-full w-[230px] h-[150px] bg-blue-100 p-5 rounded-lg text-center"
              key={car.MakeId}
            >
              <h2 className="text-xl mb-4">{car.MakeName}</h2>
              <p>{car.VehicleTypeName}</p>
            </li>
          );
        }

        return (
          <li
            className="max-sm:w-full w-[230px] h-[150px] bg-blue-100 p-5 rounded-lg text-center"
            key={car.Model_ID}
          >
            <h2 className="text-xl mb-4">{car.Make_Name}</h2>
            <p>{car.Model_Name}</p>
          </li>
        );
      })}
    </ul>
  );
};
