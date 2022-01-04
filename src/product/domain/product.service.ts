import {
  getProducts,
  getProduct,
} from '../infraestructura/repository/product.repository';
import { ProductDTO } from '../infraestructura/dto/productDTO';

export const getProductsService = async (
  page: number
): Promise<ProductDTO[]> => {
  return await getProducts(`books/?page=${page}`, '');
};

export const getProductService = async (id: number): Promise<ProductDTO> => {
  return await getProduct(`?id=${id}`, '');
};
