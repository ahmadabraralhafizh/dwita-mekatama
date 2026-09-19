import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/site";

export const Route = createFileRoute("/produk")({
  component: ProductsPage,
});
