import axios from "axios";
import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  getProducts: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      set({ products: response?.data?.data });
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products`, {
        params: { id: id },
      });
      set((state) => ({
        products : state?.products?.filter((x) => x._id !== id)
      }))
    } catch (error) {
      console.log(error);
    }
  },
}));
