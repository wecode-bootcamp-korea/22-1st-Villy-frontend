import React, { Component } from 'react';

import './ProductCategory.scss';

export class ProductCategory extends Component {
  render() {
    return PRODUCT_CATEGORY.map(category => {
      return (
        <div className="ProductCheckBox" key={category.id}>
          <input
            type="checkbox"
            name={category.name}
            onChange={this.props.handleCheckBox}
            checked={this.props.name}
          />
          <label>
            <img className="iconImage" alt={category.alt} src={category.src} />
            <span className="categoryText">{category.categoryText}</span>
          </label>
        </div>
      );
    });
  }
}

const PRODUCT_CATEGORY = [
  {
    id: 1,
    name: 'bone',
    alt: 'bone',
    src: '/images/bone.svg',
    categoryText: '뼈',
  },
  {
    id: 2,
    name: 'hair',
    alt: 'hair',
    src: '/images/hairstyle.svg',
    categoryText: '모발',
  },
  {
    id: 3,
    name: 'growth',
    alt: 'growth',
    src: '/images/height.svg',
    categoryText: '성장',
  },
  {
    id: 4,
    name: 'skin',
    alt: 'skin',
    src: '/images/therapy.svg',
    categoryText: '피부',
  },
];
export default ProductCategory;
