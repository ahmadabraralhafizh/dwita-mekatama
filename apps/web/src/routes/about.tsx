import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
