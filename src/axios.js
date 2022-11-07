import {baseUrl} from './constants/constents'
import axios from "axios";


const instance = axios.create({
    baseURL: baseUrl,
 
  });

  export default instance