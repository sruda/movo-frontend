import React from 'react';

import Product from 'app/components/Product/Product';

import { IObjectKey } from 'app/interfaces/common';
import { IProductData } from 'app/interfaces/product-data';

export interface IProps {
  products: Array<IProductData>;
  totals: IObjectKey;
  values: IObjectKey;
  onInputChange: (product: IProductData, newValue: number) => void;
  onInputBlur: (product: IProductData, newValue: number) => void;
  onMinusClick: (product: IProductData, newValue: number) => void;
  onPlusClick: (product: IProductData, newValue: number) => void;
}

// TODO: Conectar con IProps
const ShoppingCart = ({
  products,
  totals,
  values,
  onInputChange,
  onInputBlur,
  onMinusClick,
  onPlusClick
}: IProps) => {

  const productsList = products.map((product) =>
    <Product 
      key={product.id}
      product={product}
      value={values[product.code]}
      total={totals[product.code]}
      onInputChange={onInputChange}
      onInputBlur={onInputBlur}
      onMinusClick={onMinusClick}
      onPlusClick={onPlusClick}/>
  );

  return (
    <section className="ShoppingCart py-8 px-12 flex-1">
      <h1 className="pb-4 border-solid border-b border-gainsboro font-black">
        Shopping cart
      </h1>
      <ul className="products-list relative w-full py-8">
        <li className="products-list-title text-quick-silver uppercase text-2xs leading-4 tracking-wider font-bold row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list relative w-full">
        {productsList}
      </ul>
    </section>
  );
}

export default ShoppingCart;
