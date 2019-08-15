export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = item => {
    return {
        type: ADD_FEATURE,
        payload: item
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = () => {
    return { type: REMOVE_FEATURE }
}

export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = () => {
    return { type: BUY_ITEM }
}

