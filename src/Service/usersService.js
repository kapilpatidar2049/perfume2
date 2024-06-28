import axios from "axios";
import secrets from "../secrets_url_&_token";

export const fetchUserDataServe = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${secrets.perfume_access_token}`
      };
      const response = await axios.get(
        `${secrets.BASE_URL_API}userData`,
        { headers }
      );
      console.log(response, 'serv..res')
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };