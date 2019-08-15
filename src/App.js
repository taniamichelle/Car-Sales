import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { reducer, initialState } from './reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('state', state);

  const removeFeature = name => {
    // dispatch an action here to remove an item
    dispatch({ type: 'REMOVE_FEATURE', payload: name })
  };

  const buyItem = name => {
    // dipsatch an action here to add an item
    dispatch({ type: 'BUY_ITEM', payload: name })
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
