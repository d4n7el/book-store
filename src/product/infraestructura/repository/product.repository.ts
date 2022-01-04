import { http } from '../../../infraestructura/http/index';
import { ProductDTO, responseProducstDTO } from '../dto/productDTO';

export const getProducts = async (
  path: string,
  token: string
): Promise<responseProducstDTO> => {
  return await http.get<responseProducstDTO>(path, token);
};

export const getProduct = async (
  path: string,
  token: string
): Promise<ProductDTO> => {
  return await http.get<ProductDTO>(path, token);
};
