'use server';

import {checkoutSchema} from './checkoutSchema';

export async function processCheckout(data:any) {
  const result = checkoutSchema.safeParse(data);

  // test code :)
  if (data.name === "mohammad") {
    return {
      success: false,
      errors: {
        name: "این نام مجاز نیست. لطفا نام دیگری وارد کنید.",
      },
    };
  }

  if(!result.success) {
    return { success: false, errors: result.error.format() };
  }
  console.log(result.data);
  return { success: true }
}