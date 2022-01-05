import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FAKE_PRODUCTS } from '../../../utils/const';
import ProductsView from '../view/products';
import Products from '../container/products';
import axios from 'axios';

describe('products', () => {
  it('render fake products - productView ', () => {
    render(
      <ProductsView
        products={FAKE_PRODUCTS.results}
        next={true}
        previous={true}
      />
    );

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

  it('render fake products with mock - Products ', async () => {
    jest.mock('axios');
    const mockPost = jest.spyOn(axios, 'get');
    mockPost.mockImplementation(() => Promise.resolve({ data: FAKE_PRODUCTS }));
    await act(async () => {
      render(<Products />);
    });

    const elementName = await screen.getByTestId('list-products');
    expect(elementName).toBeInTheDocument();

    const elementIconR = screen.getByTestId('icon-arrow-rigth-products');
    expect(elementIconR).toBeInTheDocument();

    const elementCard = screen.getByTestId(
      `content-cards-products-${FAKE_PRODUCTS.results[0].title}`
    );
    expect(elementCard).toBeInTheDocument();

    const elementButtonR = screen.getByTestId('icon-arrow-rigth-products');

    await act(async () => {
      fireEvent.click(elementButtonR);
    });

    const elementIconL = await screen.getByTestId('icon-arrow-left-products');
    expect(elementIconL).toBeInTheDocument();
  });
});
