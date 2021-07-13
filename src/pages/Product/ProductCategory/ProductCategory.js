import React, { Component } from 'react';
import { GET_PRODUCTS_API } from '../../../config';

import './ProductCategory.scss';

export class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      filterState: {
        bone: false,
        hair: false,
        growth: false,
        skin: false,
      },
    };
  }

  componentDidMount() {
    // fetch(`${GET_PRODUCTS_API}`)
    fetch(`${GET_PRODUCTS_API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  }

  makeCondition = () => {
    const filterMatch = {
      bone: 1,
      hair: 2,
      growth: 3,
      skin: 4,
    };

    const filtered = Object.entries(this.state.filterState).reduce(
      (acc, [key, value]) => {
        if (!acc && value) {
          return acc + `efficacy=${filterMatch[key]}`;
        }

        if (value) {
          return acc + `&efficacy=${filterMatch[key]}`;
        }
        return acc;
      },
      ''
    );

    // fetch(`${GET_PRODUCTS_API}?${filtered}`);
    fetch(`${GET_PRODUCTS_API}?efficacy=1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
    console.log(filtered);
  };

  handleCheckBox = event => {
    const checkBoxName = event.target.name;
    const checkBoxNameState = !this.state.filterState[checkBoxName];
    this.setState(
      {
        filterState: {
          ...this.state.filterState,
          [checkBoxName]: checkBoxNameState,
        },
      },
      () => {
        this.makeCondition();
      }
    );
  };

  render() {
    return PRODUCT_CATEGORY.map(category => {
      return (
        <div className="ProductCheckBox" key={category.id}>
          <input
            type="checkbox"
            name={category.name}
            onChange={this.handleCheckBox}
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
