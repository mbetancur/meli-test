import Image from 'next/image';
import { fetchProduct, fetchDescription } from '../../services/searchProduct';
import "./styles/page.css"

const fetchProductInfo = async (id) => {
  try {
    const productData = fetchProduct(id);
    const productDescription = fetchDescription(id);

    const [product, description] = await Promise.all([productData, productDescription]);

    return { product, description };
  } catch (error) {
    console.error(error);
    // TODO handle error
  }
};

const ProductPage = async ({ params: { slug: id } }) => {
  const { product, description } = await fetchProductInfo(id);
  return (
    <div className="items-page">
      <div className="items-page__product">
        <Image
          src={`${product.thumbnail}`}
          width={480}
          height={480}
          alt={`${product.title}`}
        />
        <p className="description">
          <h3>
            Descripcion del producto:
          </h3>
          {description.plain_text}
        </p>
      </div>
      <div className="items-page__product-info">
        <p className="items-page__product-info__title">{product.title}</p>
        <p className="items-page__product-info__price">$ {product.price}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default ProductPage;
