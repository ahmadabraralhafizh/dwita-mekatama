import { Toaster } from "@dwikamekatama/ui/components/sonner";
import { HeadContent, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "@/components/header";
import { SiteFooter } from "@/components/site";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/i18n/language-provider";

import "../index.css";

export interface RouterAppContext { }

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "PT. Dwita Mekatama — Fabrikasi Stainless Steel",
      },
      {
        name: "description",
        content: "PT. Dwita Mekatama adalah perusahaan fabrikasi berbasis Bekasi: produk stainless steel, industrial equipment, spare parts, dan layanan perawatan.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/logo.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/logo.png",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        storageKey="vite-ui-theme"
      >
        <LanguageProvider>
          <Header />
          <div className="site-app">
            <Outlet />
            <SiteFooter />
          </div>
          <Toaster richColors />
        </LanguageProvider>
      </ThemeProvider>
      {/* <TanStackRouterDevtools position="bottom-left" /> */}
    </>
  );
}
