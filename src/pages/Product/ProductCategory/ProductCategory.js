import React, { Component } from 'react';

export class ProductCategory extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="efficacy"
          value="모발"
          checked={this.props.checked}
          onChange={this.handleCheckBox}
        />
        모발
      </div>
    );
  }
}

export default ProductCategory;
