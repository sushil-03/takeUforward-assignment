import { AddCodeType } from "@/types.dt";
import axios from "axios";

const addCode = async (data: AddCodeType) => {
  try {
    const response = await axios.post("http://localhost:3001/api/v1/code", {
      data: { ...data },
    });
    return response;
  } catch (error) {
    return new Error("went wrong");
  }
};
export default addCode;
