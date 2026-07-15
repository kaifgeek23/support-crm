import axios from "axios";

export default axios.create({
    baseURL: "https://support-crm-production-ebe7.up.railway.app/api",
});