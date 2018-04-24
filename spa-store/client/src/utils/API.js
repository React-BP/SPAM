import axios from "axios";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    searchFeatured: () => {
        return axios.get("/api/featured");
    },
    searchItem: (query) => {
        return axios.get("/api/" + query);
    },
    searchItems: (query) => {
        return axios.get("/api/store/" + query);
    },
};
