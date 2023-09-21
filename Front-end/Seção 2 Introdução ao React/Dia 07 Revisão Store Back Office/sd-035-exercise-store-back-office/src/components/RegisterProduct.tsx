import React, { useState } from 'react';
import '../styles/RegisterProduct.css';
import { ProductType, ProductWithId } from '../types';
import Product from './Product';

const INITIAL_STATE = {
  name: '',
  price: 0,
  description: '',
  tags: '',
  image: '',
} as ProductType;

type Props = {
  handleSubmit: () => void
};

type ChangeEventType = React
  .ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export default function RegisterProduct(props: Props) {
  const [productInfo, setProductInfo] = useState(INITIAL_STATE);
  const { handleSubmit } = props;

  function handleChange({ target }: ChangeEventType) {
    const { name, value } = target;
    setProductInfo({
      ...productInfo,
      [name]: value,
    });
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              name="name"
              value={ productInfo.name }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              value={ productInfo.description }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              id="price"
              name="price"
              value={ productInfo.price }
              onChange={ handleChange }
              required
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              id="image"
              name="image"
              value={ productInfo.image }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              name="tags"
              value={ productInfo.tags }
              onChange={ handleChange }
            />
          </label>
          <button
            type="submit"
          >
            Salvar

          </button>
        </form>
        <Product productInfo={ productInfo } />
      </div>
    </main>
  );
}
