"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const checkoutSchema = z.object({
  name: z.string().min(1, "نام الزامی است"),
  address: z.string().min(1, "آدرس الزامی است"),
  postalCode: z.string().length(5, "کد پستی باید ۵ رقم باشد"),
  city: z.string().min(1, "شهر الزامی است"),
});

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: any) => {
    console.log("فرم ارسال شد:", data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        مشخصات خود را وارد کنید
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-1">نام:</label>
          <input
            {...register("name")}
            className="border p-2 w-full"
            placeholder="اسم خود را وارد کنید"
          />
          {errors.name && (
            <p className="text-red-500">{String(errors.name?.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">آدرس:</label>
          <input
            {...register("address")}
            className="border p-2 w-full"
            placeholder="آدرس خود را وارد کنید"
          />
          {errors.address && (
            <p className="text-red-500">{String(errors.address?.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">کد پستی:</label>
          <input
            {...register("postalCode")}
            className="border p-2 w-full"
            placeholder="کد پستی خود را وارد کنید"
          />
          {errors.postalCode && (
            <p className="text-red-500">{String(errors.postalCode?.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">شهر:</label>
          <input
            {...register("city")}
            className="border p-2 w-full"
            placeholder="شهر شما"
          />
          {errors.city && (
            <p className="text-red-500">{String(errors.city?.message)}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          تایید نهایی
        </button>
      </form>
    </div>
  );
}
