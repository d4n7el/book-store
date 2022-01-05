import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { FAKE_PRODUCTS } from '../../../utils/const';
import ProductsView from '../view/products';

describe('products', () => {
  beforeEach(() => {
    render(
      <ProductsView
        products={FAKE_PRODUCTS.results}
        next={true}
        previous={true}
      />
    );
  });

  it('render fake products ', () => {
    const elementName = screen.getByTestId('list-products');
    const elementIconR = screen.getByTestId('icon-arrow-rigth-products');
    const elementIconL = screen.getByTestId('icon-arrow-left-products');
    const elementCard = screen.getByTestId(
      `content-cards-products-${FAKE_PRODUCTS.results[0].title}`
    );

    expect(elementName).toBeInTheDocument();
    expect(elementIconR).toBeInTheDocument();
    expect(elementIconL).toBeInTheDocument();
    expect(elementCard).toBeInTheDocument();
  });
});
