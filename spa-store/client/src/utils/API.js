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
    updateItem: (query, item) => {
        return axios.put("/api/store/" + query, item);
    },
    createOrder: (query, item) => {
        return axios.post("/api/" + query, item);
    },
    searchOrder: (query) => {
        return axios.get("/user/" + query);
    },
    searchOrderById: (query) => {
        return axios.get("/api/cart/" + query);
    },
    updateOrder: (query, item) => {
        return axios.put("/api/cart/" + query, item);
    }
};
