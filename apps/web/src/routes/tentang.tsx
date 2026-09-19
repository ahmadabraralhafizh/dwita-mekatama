import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site";

export const Route = createFileRoute("/tentang")({
  component: AboutPage,
});
