import React from 'react';
import StockPrize from './components/stockPrize';
import { Provider } from 'react-redux';

import store from './store';


export default () => (
  <Provider store={store}>
    <div className="App">
      <div className="App-header">
          <StockPrize></StockPrize>
      </div>
    </div>
  </Provider>

)
