export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                /* ...state.car.features brings in everything we have in our features array and
                action.payload adds in the targeted object we want to add to our features array*/
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                },
                additionalPrice: state.additionalPrice + action.payload.price
            }
        case 'REMOVE_FEATURE':
            return {
                ...state,
                /* access features array via car. 'feature' is an object and 'name' is the key we're accessing
                  action is invoked in order to utilize 'payload'(which is an object). If the name of the current 
                  feature.name does not match the action.payload (target) name, then add it to the new array we're creating w/ filter */
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature => feature.name !== action.payload.name)
                },
                additionalPrice: state.additionalPrice - action.payload.price
            }
        default:
            return state;
    }
}