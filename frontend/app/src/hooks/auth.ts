import axios from "../api/axios";
import { LoginParams } from "../types/index"
import { useNavigate } from "react-router-dom";
import { useState, FormEvent} from "react";
import { useCookies } from "react-cookie";

export const signIn = (params: LoginParams) => {
          const url: string = '/token'
          const {email: username, password: password} = params
            return axios({
                method: 'post',
                url: url,
                headers: {
                  'accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: {username,password}
            })
}