import React, { Component } from 'react';
import SelectMenu from '../elements/SelectMenu';
import StockList from '../constants/stockList';
import ContentText from '../elements/ContentText';
class StockPrize extends Component {


  selectStock = (tgt) =>{
    console.log(tgt.currentTarget.value);
    return;
  }


  render() {
    return (
      <div>
        <SelectMenu options={StockList} event={this.selectStock}/>
        <ContentText />
      </div>
    );
  }

}

export default StockPrize;
