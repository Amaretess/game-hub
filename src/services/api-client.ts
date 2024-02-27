import axios from "axios";
// API KEY: aca03c19d52342f0abeee36264df522e

export default axios.create({
    // custom configuration
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'aca03c19d52342f0abeee36264df522e'
    }
})
