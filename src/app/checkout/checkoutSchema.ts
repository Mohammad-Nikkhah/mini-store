
import { z } from 'zod';

export const checkoutSchema = z.object({
  name: z.string().min(1, 'نام الزامی است'),
  address: z.string().min(1, 'آدرس الزامی است'),
  postalCode: z.string().length(10, 'کد پستی باید ۱۰ رقم باشد'),
  city: z.string().min(1, 'شهر الزامی است'),
});
