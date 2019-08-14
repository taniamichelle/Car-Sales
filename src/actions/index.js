export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = name => {
    return {
        type: ADD_FEATURE,
        payload: name
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = name => {
    return {
        type: REMOVE_FEATURE,
        payload: name
    }
}

export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = item => {
    return {
        type: BUY_ITEM,
        payload: item
    }
}

