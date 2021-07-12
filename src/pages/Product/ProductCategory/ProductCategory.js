import React, { Component } from 'react';
// import { GET_PRODUCTS_API } from '../../config';

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

  makeCondition = () => {
    // 비동기 문제 있음
    // 패치를 위한 함수를 만들어야할까?
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

    // fetch(`${GET_PRODUCTS_API}?${filtered}`)
    fetch(`./data/ProductData.json${filtered}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  };

  handleCheckBox = event => {
    const checkBoxName = event.target.name;
    const tf = !this.state.filterState[checkBoxName];

    this.setState(
      {
        filterState: { ...this.state.filterState, [checkBoxName]: tf },
      },
      () => {
        this.makeCondition();
      }
    );
    console.log(`this.state.filterState`, this.state.filterState);
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
    // id: 4,
    name: 'skin',
    alt: 'skin',
    src: '/images/therapy.svg',
    categoryText: '피부',
  },
];
export default ProductCategory;
