import data from '../data/retailerApi';

const initialState = {
    loadedData: {},
    userRewards: {},
    userTransactions: [],
    users: [],
    currentUser: "",
    newTransaction: { date: new Date(), amount: 0 }
};

function addReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOADEDDATA':
            return { ...state, value: { ...data } };



            
        default:
            return state;
    }
}

export default addReducer;