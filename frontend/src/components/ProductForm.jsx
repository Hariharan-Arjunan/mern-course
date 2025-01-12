// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const productSchema = z.object({
  name: z.string().min(3).max(20),
  price: z.number().min(1),
  image: z.string().min(20).max(200),
});

// eslint-disable-next-line react/prop-types
const ProductForm = ({ intialValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: intialValues?.name,
      price: intialValues?.price,
      image: intialValues?.image,
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      if (intialValues?._id) {
        const response = await axios.put(
          `http://localhost:5000/api/products?id=${intialValues?._id}`,
          {
            ...values,
          }
        );
        if (response?.data?.success) {
          navigate("/");
        }
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/products",
          {
            ...values,
          }
        );
        if (response?.data?.success) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <div className="form-wrapper">
        <form className="form-container">
          <input
            className="input-tag"
            {...register("name")}
            placeholder="Product Name"
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
          <input
            className="input-tag"
            {...register("price", {
              valueAsNumber: true,
            })}
            placeholder="Price"
          />
          {errors?.price && <span>{errors?.price?.message}</span>}
          <input
            className="input-tag"
            {...register("image")}
            placeholder="Image URL"
          />
          {errors?.image && <span>{errors?.image?.message}</span>}
          <button onClick={handleSubmit(onSubmit)}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
