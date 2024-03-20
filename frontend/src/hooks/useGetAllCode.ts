import { OrderEnum } from "@/types.dt";
import axios from "axios";
import { BASE_URL } from "@/constant";
const getAllCodes = async (order: OrderEnum, username: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/code?order=${order}&username=${username}`
    );
    return response
  } catch (error: any) {

    return error.response
  }
};
export default getAllCodes;
