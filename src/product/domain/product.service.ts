import {
  getProducts,
  getProduct,
} from '../infraestructura/repository/product.repository';
import {
  ProductDTO,
  responseProducstDTO,
} from '../infraestructura/dto/productDTO';

export const getProductsService = async (
  page: number,
  search: string
): Promise<responseProducstDTO> => {
  return await getProducts(`books/?page=${page}&search=${search}`, '');
};

export const getProductService = async (id: number): Promise<ProductDTO> => {
  return await getProduct(`?id=${id}`, '');
};
