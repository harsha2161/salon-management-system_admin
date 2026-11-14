import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create(
    {
        baseURL : process.env.NEXT_PUBLIC_BACKEND_URL,
        withCredentials : true,

    }
)

// handel errors in api
api.interceptors.response.use(
    (responce) => {
        return responce
    },
    (error) => {
       
        toast.error(error.responce?.data?.message || "Something went wrong")
        return Promise.reject(error)
    }
)


export default api