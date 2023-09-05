import { ProductType } from '../types';

type ProductProps = {
  productInfo: ProductType
};

export default function Product(props: ProductProps) {
  const { productInfo } = props;
  return (
    <li>
      <h2>
        { productInfo.title }
      </h2>
      <h3>
        { productInfo.price }
      </h3>
      <img src={ productInfo.image } alt={ productInfo.title } />
    </li>
  );
}
