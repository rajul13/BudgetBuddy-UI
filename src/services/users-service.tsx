import axios from "axios";
import { ApiRoutes } from "../app/api-routes";
import {login} from "../models/login-model";

export const AuthenticateUser = async (
  emailOrUserName: string,
  password: string 
): Promise<login> => {
    const { data } = await axios.post<login>(
      ApiRoutes.loginUser,
      {
        emailOrUserName,
        password,
      }
    );
    return data;
};
              