"use server";

import { checkoutSchema } from "./checkoutSchema";

export async function processCheckout(data: {
  name: string;
  address: string;
  postalCode: string;
  city: string;
}) {

  const parsedData = checkoutSchema.safeParse(data);
  if (!parsedData.success) {
    return {
      success: false,
      errors: parsedData.error.format(),
    };
  }

  // test code
  if (data.name === "mohammad") {
    return {
      success: false,
      errors: { message: "نام 'mohammad' معتبر نیست. لطفاً نام دیگری وارد کنید." },
    };
  }
  const result = true; 
  return result
    ? { success: true }
    : { success: false, errors: { message: "خطا در ذخیره‌سازی" } };
}
