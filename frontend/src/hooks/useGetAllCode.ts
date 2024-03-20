import { OrderEnum } from "@/types.dt";
import axios from "axios";

const getAllCodes = async (order: OrderEnum, username: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/v1/code?order=${order}&username=${username}`
    );
    return response.data.allCodes;
  } catch (error) {
    return new Error("went wrong");
  }
};
export default getAllCodes;
