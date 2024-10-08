"use client";
import { useFormState } from "react-dom";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { processCheckout } from "./checkoutAction";

export default function CheckoutPage() {
  const initialState = {
    message: "",
  };
  const [formState, formAction] = useFormState(processCheckout, initialState);

  return (
    <div className="container mx-auto p-10 my-20 rounded-md border-2 border-gray-200 w-fit">
      <h1 className="text-xl font-bold mb-4 flex justify-center gap-2 items-center text-center">
        <HiOutlineInformationCircle className="text-green-500 text-3xl" />
        اطلاعات را وارد کنید
      </h1>

      <form action={formAction} className="space-y-4">
        <div>
          <label className="block mb-1">نام:</label>
          <Input
            name="name"
            placeholder="نام خود را وارد کنید"
            className="border p-2 w-96"
          />
        </div>

        <div>
          <label className="block mb-1">آدرس:</label>
          <Input
            name="address"
            placeholder="آدرس خود را وارد کنید"
            className="border p-2 w-96"
          />
        </div>

        <div>
          <label className="block mb-1">کد پستی:</label>
          <Input
            name="postalCode"
            placeholder="کد پستی خود را وارد کنید"
            className="border p-2 w-96"
          />
        </div>

        <div>
          <label className="block mb-1">شهر:</label>
          <Input
            name="city"
            placeholder="شهر خود را وارد کنید"
            className="border p-2 w-96"
          />
        </div>

        <Button type="submit" className="flex justify-center w-full">
          تایید نهایی
        </Button>

        {formState?.message && (
          <Alert className="mt-4">
            <AlertTitle>پیغام</AlertTitle>
            <AlertDescription>{formState.message}</AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  );
}
