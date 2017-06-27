import { ZEUS_GATEWAY } from './fetchConfig'
import axios from 'axios'
export const invoke  = async (cfg) =>{
const requestConfig = {
  baseURL: ZEUS_GATEWAY,
  ...cfg
}
try {
  const response = await axios.request(requestConfig)
  return [0, response]
} catch (e) {
  return [e, 0]
}
}
