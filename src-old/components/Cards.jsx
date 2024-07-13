import React from "react";
import Product from "./Product";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      showName: false,
      counter: 0 ,
      products: []
    };
  }

  render() {
    return (
      <div className="cards d-flex jc-sb p-5 items-center gap-2">
        {
          this.state.showName ? <h2>Mohammad</h2> : <h2>Not Allow</h2>
        }
        <button onClick={() => this.setState({ showName: !this.state.showName })}>
          Show Name
        </button>
        {this.props.productsArray.map((product) => (
          <Product
            sd={product}
            key={product.id}
            addToCart={this.props.addToCart}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
