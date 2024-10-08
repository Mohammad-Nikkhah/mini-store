'use server';

import { checkoutSchema } from './checkoutSchema';
import { ZodError } from 'zod';

export async function processCheckout(currentState: { message: string }, formData: FormData): Promise<{ message: string }> {
  const formValues = {
    name: formData.get("name")?.toString() || '',
    address: formData.get("address")?.toString() || '',
    postalCode: formData.get("postalCode")?.toString() || '',
    city: formData.get("city")?.toString() || '',
  };

  try {
    checkoutSchema.parse(formValues);
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    return {
      message: ' با موفقیت ارسال شد',
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = error.errors.map((err) => err.message).join(", ");
      return {
        message: `خطا: ${errorMessage}`,
      };
    }
    return {
      message: 'خطایی در سرور رخ داده است.',
    };
  }
}
