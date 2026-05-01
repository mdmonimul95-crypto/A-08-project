"use client";

import { HeroUIProvider } from "@heroui/system";
import { Toaster } from "react-hot-toast";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      {children}
      <Toaster />
    </HeroUIProvider>
  );
}