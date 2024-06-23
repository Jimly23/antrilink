import axios from "axios";

export const dataMock = async (data) => {
    try {
      const response = await axios.post("https://4d5c66eb-38a9-44c2-a706-db1812cda4c5.mock.pstmn.io/api/auth/login", data);
      return response.data
    } catch(error){
      console.log(error)
    }
}