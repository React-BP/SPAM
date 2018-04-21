import axios from "axios";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    searchFeatured: () => {
        console.log('calling axios');
        return axios.get("/api/featured");
    },
    searchItem: (query) => {
        console.log('calling axios');
        return axios.get("/api/" + query);
    },
    searchItems: (query) => {
        console.log('calling axios');
        return axios.get("/api/" + query.type);
    },
    searchSortedItems: (query) => {
        console.log('calling axios');
        return axios.get("/api/" + query.type + "/" + query.sort);
    },
    searchItemByGender: (query) => {
        console.log('calling axios');
        return axios.get("/api/" + query.type + "/" + query.gender);
    },
    searchSortedItemsByGender: (query) => {
        console.log('calling axios');
        return axios.get("/api/" + query.type + "/" + query.gender + "/" + query.sort);
    }
};
