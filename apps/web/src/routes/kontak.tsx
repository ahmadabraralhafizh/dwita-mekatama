import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site";

export const Route = createFileRoute("/kontak")({
  component: ContactPage,
});
