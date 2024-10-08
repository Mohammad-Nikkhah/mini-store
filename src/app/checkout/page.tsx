"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Alert, AlertTitle, AlertDescription } from "@/src/components/ui/alert";
import { checkoutSchema } from "./checkoutSchema";
import { processCheckout } from "./checkoutAction";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  type CheckoutFormData = {
    name: string;
    address: string;
    postalCode: string;
    city: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await processCheckout(data);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(JSON.stringify(result.errors));
      }
    } catch {
      setError("خطا در پردازش داده‌ها");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-10 my-20 rounded-md border-2 border-gray-200 w-fit">
      <h1 className="text-xl font-bold mb-4 flex justify-center gap-2 items-center text-center">
        <HiOutlineInformationCircle className="text-green-500 text-3xl" />
        اطلاعات را وارد کنید
      </h1>

      {error && (
        <Alert className="mt-4 bg-white border-red-700 w-60 absolute left-0">
          <AlertTitle className="bold text-red-700">خطا</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mt-4 bg-white border-green-700 w-60 absolute left-0">
          <AlertTitle className="bold text-green-700">موفقیت</AlertTitle>
          <AlertDescription>پردازش با موفقیت انجام شد</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">نام:</label>
          <Input
            {...register("name")}
            placeholder="نام خود را وارد کنید"
            className="border p-2 w-96"
          />
          {errors.name && (
            <p className="text-red-500">{String(errors.name.message)}</p>
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
            <p className="text-red-500">{String(errors.address.message)}</p>
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
            <p className="text-red-500">{String(errors.postalCode.message)}</p>
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
            <p className="text-red-500">{String(errors.city.message)}</p>
          )}
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
