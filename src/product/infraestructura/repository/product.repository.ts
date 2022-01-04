import { http } from '../../../infraestructura/http/index';
import { ProductDTO } from '../dto/productDTO';

export const getProducts = async (
  path: string,
  token: string
): Promise<ProductDTO[]> => {
  return await http.get<ProductDTO[]>(path, token);
};

export const getProduct = async (
  path: string,
  token: string
): Promise<ProductDTO> => {
  return await http.get<ProductDTO>(path, token);
};
