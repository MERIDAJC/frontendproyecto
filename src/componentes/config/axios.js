

import axios from "axios";

const ClienteAxios = axios.create({
    MiURL : process.env.ECOMMERCE_URL_BACK
})

export default ClienteAxios