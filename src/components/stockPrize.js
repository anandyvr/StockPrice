import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStockPrice, getStockDescription } from "../action";
import SelectMenu from '../elements/SelectMenu';
import StockList from '../constants/stockList';
import ContentText from '../elements/ContentText';
import TextElement from '../elements/TextElement';

class StockPrize extends Component {


  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      selectValue: ""
    }
  }
  selectStock = tgt => {
    if (tgt.currentTarget.type === 'select-one') {
      this.setState({ textValue: "" });
      this.setState({ selectValue: tgt.currentTarget.value });
    } else {
      this.setState({ selectValue: "" });
    }
    this.props.getStockPrice({ stockId: tgt.currentTarget.value });
    this.props.getStockDescription({ stockId: tgt.currentTarget.value });
    return;
  }

  textChange = event => {
    this.setState({ textValue: event.target.value });
  }

  render() {
    const stockPrice = this.props.data ? this.props.data.stockPrice.latestPrice : null;
    const stockSymbol = this.props.data ? this.props.data.stockPrice.symbol : null;
    const companyDecription = this.props.data ? this.props.data.stockDescription.description : "";
    const error = this.props.data.stockPrice.error || this.props.data.stockDescription.error;
    return (
      <div>
        <SelectMenu headtext={"Select a stock symbol"} options={StockList} event={this.selectStock} className={"select-box"} value={this.state.selectValue} /><span className="seperator">{"OR"}</span>
        <TextElement className="text-element" headtext={"Enter a stock symbol"} event={this.selectStock} value={this.state.textValue} change={this.textChange} />
        <br />{
          stockPrice ?
            <div>
              <br />
              <div> <ContentText head={"Symbol"} text={stockSymbol} />
                <br />
                <ContentText head={"Current Stock Price"} text={stockPrice} />
                <br />
                <ContentText head={"Description"} text={companyDecription} />
              </div>
            </div>
            : error ? <div className="error-description">{"Stock symbol not found"}</div> : null
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({ data: state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getStockPrice, getStockDescription }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StockPrize)

