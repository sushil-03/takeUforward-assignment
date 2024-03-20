import { AddCodeType } from "@/types.dt";
import axios from "axios";
import { BASE_URL } from "@/constant";

const addCode = async (data: AddCodeType) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/code`, {
      data: { ...data },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export default addCode;
