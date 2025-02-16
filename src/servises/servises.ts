import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllVehiclesMakes = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/GetMakesForVehicleType/car?format=json`
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw error.response?.data.message;
  }
};

export const getVehicleByNameAndYear = async (makeId: string, year: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) throw error.response?.data.message;
  }
};
