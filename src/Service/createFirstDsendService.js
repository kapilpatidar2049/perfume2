import axios from "axios";
import secrets from "../secrets_url_&_token";
export const fetchDescriptionDataServe = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${secrets.perfume_access_token}`
    };
    const response = await axios.get(
      `${secrets.BASE_URL_API}dcentPerfumeFirst/firstAction`,
      { headers }
    );
    console.log(response.data.data, 'serv..res')
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const dcentPerfumeFirstServe = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${secrets.perfume_access_token}`
      };
      const response = await axios.get(
        `${secrets.BASE_URL_API}dcentPerfumeFirst`,
        { headers }
      );
      console.log(response.data.data, 'serv..res')
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  export const dcentPerfumeSecondServe = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${secrets.perfume_access_token}`
      };
      const response = await axios.get(
        `${secrets.BASE_URL_API}dcentPerfumeFirst/secondAction`,
        { headers }
      );
      console.log(response.data.AuthorizationgetData, 'serv..res')
      return response.data.getData;
    } catch (error) {
      throw new Error(error.message);
    }
  };
 

