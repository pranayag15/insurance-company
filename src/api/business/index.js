import ROOTURL from "../ROOTURL"
import axios from "axios"
// API call for logging in of user:
const url = ROOTURL + "/businesses"
export const addBusiness = (data) => axios.post(url, data)

export const businesses = userID => axios.get(`${ROOTURL}/users/${userID}/businesses`)