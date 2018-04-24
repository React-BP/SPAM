import lodash from 'lodash';

export default {
    sortLowtoHigh: (list) => {

        _.sortBy(list, ['price', 'name']);

       console.log(list);
    },
    sortHightoLow: (list) => {
        _.sortBy(list, ['price', 'name']);
        return list.reverse();
    },
    filterByGender: (list, gender) => {

        const filteredList = [];
        for(let i = 0; i < list.length; i++){

            if(list[i].gender === gender){
                filteredList.push(list[i]);
            }

        }

        return filteredList;
    }
}