import React, { Component } from 'react';

export class ProductCategory extends Component {
  render() {
    return (
      <div className="ProductCheckBox">
        <input
          type="checkbox"
          name="bone"
          onChange={this.props.handleCheckBox}
        />
        <label>
          <img className="iconImage" alt="bone" src="/images/bone.svg" />
          <span className="categoryText">뼈</span>
        </label>
      </div>
    );
  }
}

export default ProductCategory;
