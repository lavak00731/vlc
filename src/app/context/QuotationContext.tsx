"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type ProductInterface from "../interfaces/ProductInterface";

type QuotationItem = {
  product: ProductInterface;
  quantity: number;
};

type QuotationContextValue = {
  items: QuotationItem[];
  totalQuantity: number;
  addProduct: (product: ProductInterface) => void;
  removeProduct: (productId: string) => void;
  decrementProduct: (productId: string) => void;
};

const QuotationContext = createContext<QuotationContextValue | undefined>(
  undefined,
);

export function QuotationProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuotationItem[]>([]);

  const addProduct = useCallback((product: ProductInterface) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { product, quantity: 1 }];
    });
  }, []);

  const removeProduct = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  }, []);

  const decrementProduct = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.product.id !== productId) return [item];
        if (item.quantity === 1) return [];
        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  }, []);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const value = useMemo(
    () => ({
      items,
      totalQuantity,
      addProduct,
      removeProduct,
      decrementProduct,
    }),
    [items, totalQuantity, addProduct, removeProduct, decrementProduct],
  );

  return (
    <QuotationContext.Provider value={value}>
      {children}
    </QuotationContext.Provider>
  );
}

export function useQuotation() {
  const context = useContext(QuotationContext);

  if (!context) {
    throw new Error("useQuotation debe usarse dentro de QuotationProvider");
  }

  return context;
}
