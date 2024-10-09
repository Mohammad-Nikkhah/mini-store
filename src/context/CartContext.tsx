"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartItem {
  id: number;
  date: string;
  products: Product[];
}

interface CartContextType {
  cart: CartItem[];
  totalCartItems: number;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  deleteCartFromAPI: (id: number) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalCartItems, setTotalCartItems] = useState<number>(0);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/user/1");
      const data: CartItem[] = await response.json();

      if (data.length > 0) {
        setCart(data);
        const totalItems = data.reduce((acc, cart) => {
          return (
            acc +
            cart.products.reduce(
              (acc2: number, product: Product) => acc2 + product.quantity,
              0
            )
          );
        }, 0);
        setTotalCartItems(totalItems);
      } else {
        setCart([]);
        setTotalCartItems(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = async (item: Product) => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString(),
          products: [
            {
              productId: item.id,
              quantity: 1,
            },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("محصول اضافه شد");
        fetchCartItems();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (id: number) => {
    try {
      await fetch(`https://fakestoreapi.com/carts/${id}`, {
        method: "DELETE",
      });
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalCartItems,
        addToCart,
        removeFromCart,
        deleteCartFromAPI: removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
