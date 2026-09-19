import { createFileRoute } from "@tanstack/react-router";
import { CustomersPage } from "@/components/site";

export const Route = createFileRoute("/pelanggan")({
  component: CustomersPage,
});
