"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Map from "@/src/components/ui/Map";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { checkoutSchema } from "./checkoutSchema";
import { processCheckout } from "./checkoutAction";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(error);

    try {
      const result = await processCheckout(data);
      if (result.success) {
        router.push("/");
      } else {
        setError(
          "خطا در اعتبارسنجی داده ها" + JSON.stringify(result.errors).toString()
        );
      }
    } catch {
      setError("خطا در پردازش داده ها");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-10 my-20 rounded-md border-2 border-gray-200 w-fit">
      <h1 className="text-xl font-bold mb-4 flex  justify-center gap-2 items-center text-center">
        <HiOutlineInformationCircle className="text-green-500 text-3xl" />
        اطلاعات را وارد کنید
      </h1>
      {error && <p className="text-red-500 w-80 alert">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">نام:</label>
          <Input
            {...register("name")}
            placeholder="نام خود را وارد کنید"
            className="border p-2 w-96"
          />
          {errors.name && (
            <p className="text-red-500">{String(errors.name?.message)}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">آدرس:</label>
          <Input
            {...register("address")}
            placeholder="آدرس خود را وارد کنید"
            className="border p-2 w-96"
          />
          {errors.address && (
            <p className="text-red-500">{String(errors.address?.message)}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">کد پستی:</label>
          <Input
            {...register("postalCode")}
            placeholder="کد پستی خود را وارد کنید"
            className="border p-2 w-96"
          />
          {errors.postalCode && (
            <p className="text-red-500">{String(errors.postalCode?.message)}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">شهر:</label>
          <Input
            {...register("city")}
            placeholder="شهر خود را وارد کنید"
            className="border p-2 w-96"
          />
          {errors.city && (
            <p className="text-red-500">{String(errors.city?.message)}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">انتخاب موقعیت مکانی:</label>
          <Map />
        </div>
        <Button
          type="submit"
          className="flex justify-center w-full"
          disabled={loading}
        >
          تایید نهایی
        </Button>
      </form>
    </div>
  );
}
