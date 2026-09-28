import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Download,
  Factory,
  FileText,
  ListFilter,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Package,
  Pill,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { useLanguage, usePageMeta } from "@/i18n/language-provider";
import { clientLogos, contact, featuredProducts, locations, mapsEmbedFor, navItems, productCatalogPdf, productShowcase, whatsappHrefFor } from "@/data/site";
import type { ShowcaseProduct } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label={t.header.backHomeAria}>
          <img src="/Logodwitamekatama.png" alt={t.header.logoAlt} className="brand-logo" />
        </Link>

        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">{open ? t.header.closeMenu : t.header.openMenu}</span>
        </button>

        <nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label={t.header.mainNavAria}>
          <div className="site-nav-links">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} activeProps={{ className: "is-active" }} onClick={() => setOpen(false)}>
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
          <div className="header-actions">
            <LanguageToggle />
            <ModeToggle />
          </div>
          <Link className="header-cta" to="/contact" onClick={() => setOpen(false)}>
            {t.header.cta} <ArrowUpRight size={16} />
          </Link>
        </nav>
        <span className="header-current" aria-hidden="true">{pathname === "/" ? "01" : ""}</span>
      </div>
    </header>
  );
}

export function PageIntro({ eyebrow, title, description, wideTitle = false }: { eyebrow: string; title: string; description: string; wideTitle?: boolean }) {
  return (
    <section className="page-intro">
      <div className="shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={wideTitle ? "page-intro-title-wide" : undefined}>{title}</h1>
        <p className="page-intro-copy">{description}</p>
      </div>
    </section>
  );
}

export function InquiryLink({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a className={`button button-primary ${className}`} href={whatsappHrefFor(t.whatsappMessage)} target="_blank" rel="noreferrer">
      <MessageCircle size={18} />
      {t.common.consultCta}
      <ArrowUpRight size={17} />
    </a>
  );
}

export function EmailLink({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a className={`button button-secondary ${className}`} href={`mailto:${contact.email}`}>
      {t.common.sendEmail} <ArrowUpRight size={17} />
    </a>
  );
}

export function HomePage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.home.title, t.meta.home.description);

  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="hero-copy">
            <p className="eyebrow">{t.home.eyebrow}</p>
            <h1>{t.home.title}</h1>
            <p className="hero-lede">{t.home.lede}</p>
            <div className="hero-actions">
              <InquiryLink />
              <Link className="text-link" to="/products">{t.home.seeCapabilities} <MoveRight size={17} /></Link>
            </div>
          <div className="hero-note"><span className="status-dot" /> {t.home.serviceArea}</div>
          </div>
        </div>
      </section>

      <section className="metrics shell section-rule">
        <div className="metrics-list">
          {t.home.metrics.items.map((metric, index) => {
            const Icon = metricIcons[index] ?? CalendarDays;
            return (
              <div className="metric" key={metric.label}>
                <div className="metric-head">
                  <span className="metric-icon"><Icon size={17} /></span>
                  <MetricValue value={metric.value} />
                </div>
                <p className="metric-label">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="intro-band shell section-rule">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">{t.home.whatWeDo.eyebrow}</p>
          <h2>{t.home.whatWeDo.title}</h2>
        </div>
        <div className="intro-statement">
          <p>{renderHighlighted(t.home.whatWeDo.statement)}</p>
          <Link className="button button-secondary" to="/about">{t.home.whatWeDo.link} <ChevronRight size={17} /></Link>
        </div>
      </section>

      <section className="capabilities shell section-rule">
        <div className="capability-feature">
          <div className="capability-feature-head">
            <span className="capability-icon"><Factory size={22} /></span>
            <h3>{renderHighlighted(t.home.capabilities.title)}</h3>
          </div>
          <p>{renderHighlighted(t.home.capabilities.text)}</p>
          <Link className="button button-secondary" to="/products">{t.home.capabilities.link} <MoveRight size={17} /></Link>
        </div>
        <div className="capability-list">
          {t.home.capabilities.items.map((item, index) => (
            <div key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></div>
          ))}
        </div>
      </section>

      <section className="products-preview shell section-rule">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">{t.home.workSamples.eyebrow}</p><h2>{t.home.workSamples.title}</h2></div>
          <Link className="text-link desktop-link" to="/products">{t.home.workSamples.link} <MoveRight size={17} /></Link>
        </div>
        <ProductGallery items={featuredProducts} />
        <Link className="text-link mobile-link" to="/products">{t.home.workSamples.link} <MoveRight size={17} /></Link>
      </section>

      <section className="industries shell section-rule">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.home.industries.eyebrow}</p>
            <h2>{t.home.industries.title}</h2>
          </div>
          <p className="industry-sub">{renderHighlighted(t.home.industries.subtitle)}</p>
        </div>
        <div className="industry-grid">
          {t.home.industries.items.map((industry, index) => {
            const Icon = industryIcons[index] ?? Factory;
            return (
              <article className="industry-card" key={industry.title}>
                <span className="capability-icon" aria-hidden="true"><Icon size={21} /></span>
                <h3>{industry.title}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="proof-band shell section-rule">
        <div><p className="eyebrow">{t.home.proof.eyebrow}</p><h2>{t.home.proof.title}</h2></div>
        <div className="proof-copy"><p>{renderHighlighted(t.home.proof.text)}</p><Link className="button button-secondary" to="/clients">{t.home.proof.link} <MoveRight size={17} /></Link></div>
      </section>

      <InquiryBanner />
    </main>
  );
}

export function AboutPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.about.title, t.meta.about.description);
  const valueIcons = [Sparkles, ShieldCheck, Wrench];

  return <main><PageIntro eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} wideTitle />
    <section className="about-story shell section-rule"><div className="story-year"><img className="story-logo" src="/logo.png" alt={t.header.logoAlt} /><p className="story-label">{t.about.identityLabel}</p>2010<span>{t.about.yearCaption}</span></div><div className="story-copy"><p>{t.about.story1}</p><p>{t.about.story2}</p><p>{t.about.story3}</p></div><img className="about-image" src="/workshop.png" alt={t.about.imageLabel} loading="lazy" /></section>
    <section className="about-principles shell section-rule"><div className="section-heading"><p className="eyebrow">{t.about.principles.eyebrow}</p><h2>{t.about.principles.title}</h2></div><div className="principles-grid">
      <article className="principles-block principles-vision"><h3>{t.about.principles.visionTitle}</h3><p>{t.about.principles.visionText}</p></article>
      <article className="principles-block principles-mission"><h3>{t.about.principles.missionTitle}</h3><ul className="principles-list">{t.about.principles.missionItems.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article className="principles-block principles-core"><h3>{t.about.principles.coreTitle}</h3><ul className="principles-list">{t.about.principles.coreItems.map((item) => <li key={item}>{item}</li>)}</ul></article>
    </div></section>
    <section className="values shell section-rule"><div className="section-heading"><p className="eyebrow">{t.about.values.eyebrow}</p><h2>{t.about.values.title}</h2></div><div className="value-grid">{t.about.values.items.map((value, index) => {
      const Icon = valueIcons[index] ?? Sparkles;
      return <Value key={value.title} title={value.title} text={value.text} icon={<Icon size={21} />} />;
    })}</div></section>
    <InquiryBanner />
  </main>;
}

function Value({ title, text, icon }: { title: string; text: string; icon: ReactNode }) { return <article className="value-card"><span className="capability-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>; }

export function ProductsPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.products.title, t.meta.products.description);

  return <main><PageIntro eyebrow={t.products.eyebrow} title={t.products.title} description={t.products.description} wideTitle />
    <section className="examples shell section-rule"><div className="centered-head"><p className="centered-badge">{t.products.examples.eyebrow}</p><h2>{t.products.examples.title}</h2><p className="centered-sub">{t.products.examples.subtitle}</p></div><ProductGallery items={productShowcase} filterable /></section>
    <section className="catalog-download shell section-rule" aria-labelledby="catalog-title">
      <div className="catalog-card">
        <div className="catalog-copy">
          <span className="catalog-icon" aria-hidden="true"><FileText size={22} /></span>
          <div>
            <p className="eyebrow">{t.products.catalog.eyebrow}</p>
            <h3 id="catalog-title">{t.products.catalog.title}</h3>
            <p className="catalog-text">{t.products.catalog.text}</p>
            <span className="catalog-note">{t.products.catalog.note}</span>
          </div>
        </div>
        <a className="button button-primary" href={productCatalogPdf} download>
          <Download size={17} /> {t.products.catalog.button}
        </a>
      </div>
    </section>
    <InquiryBanner />
  </main>;
}

export function CustomersPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.clients.title, t.meta.clients.description);

  return <main><PageIntro eyebrow={t.clients.eyebrow} title={t.clients.title} description={t.clients.description} />
    <section className="customer-wall shell section-rule"><div className="centered-head"><p className="centered-badge">{t.clients.introEyebrow}</p><h2>{t.clients.introTitleLine1}<br />{t.clients.introTitleLine2}</h2><p className="centered-sub">{t.clients.introTextLine1}<br />{t.clients.introTextLine2}</p></div><div className="logo-grid">{clientLogos.map((logo) => <div className="logo-tile" key={logo.file}><img src={`/clients/${logo.file}`} alt={logo.name} loading="lazy" /><span className="logo-tile-name">{logo.name}</span></div>)}</div></section>
    <section className="customer-note shell section-rule"><ShieldCheck size={24} /><p>{t.clients.note}</p></section>
    <InquiryBanner />
  </main>;
}

export function ContactPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.contact.title, t.meta.contact.description);

  return <main><PageIntro eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />
    <section className="contact-grid shell section-rule"><div className="contact-primary"><p className="eyebrow">{t.contact.primaryEyebrow}</p><h2>{t.contact.primaryTitle}</h2><InquiryLink /></div><div className="contact-details"><a href={whatsappHrefFor(t.whatsappMessage)} target="_blank" rel="noreferrer" className="contact-detail"><span className="contact-icon"><MessageCircle size={20} /></span><span><small>WhatsApp</small><strong>{contact.whatsappDisplay}</strong><em>{t.contact.openChat} <ArrowUpRight size={15} /></em></span></a><a href={`mailto:${contact.email}`} className="contact-detail"><span className="contact-icon"><Mail size={20} /></span><span><small>Email</small><strong>{contact.email}</strong><em>{t.contact.writeEmail} <ArrowUpRight size={15} /></em></span></a><div className="contact-detail"><span className="contact-icon"><MapPin size={20} /></span><span><small>{t.contact.serviceBase}</small><strong>Bekasi</strong><em>{t.contact.serviceArea}</em></span></div></div></section>
    <section className="contact-locations shell section-rule"><div className="section-heading"><p className="eyebrow">{t.contact.locations.eyebrow}</p><h2>{t.contact.locations.title}</h2></div><div className="location-grid">
      <article className="location-card"><div className="location-head"><span className="location-icon"><MapPin size={20} /></span><h3>{t.contact.locations.officeLabel}</h3></div><p>{locations.office.address}</p><iframe className="location-map" src={mapsEmbedFor(locations.office.lat, locations.office.lng)} title={t.contact.locations.officeLabel} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="button button-secondary" href={locations.office.map} target="_blank" rel="noreferrer">{t.contact.locations.openMap} <ArrowUpRight size={16} /></a></article>
      <article className="location-card"><div className="location-head"><span className="location-icon"><MapPin size={20} /></span><h3>{t.contact.locations.workshopLabel}</h3></div><p>{locations.workshop.address}</p><iframe className="location-map" src={mapsEmbedFor(locations.workshop.lat, locations.workshop.lng)} title={t.contact.locations.workshopLabel} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="button button-secondary" href={locations.workshop.map} target="_blank" rel="noreferrer">{t.contact.locations.openMap} <ArrowUpRight size={16} /></a></article>
    </div></section>
    <section className="inquiry-guide shell section-rule"><div className="section-heading"><p className="eyebrow">{t.contact.guide.eyebrow}</p><h2>{t.contact.guide.title}</h2></div><div className="guide-list">{t.contact.guide.items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div></section>
    <section className="contact-footer shell section-rule"><Factory size={20} /><p>{t.contact.footer}</p><EmailLink /></section>
  </main>;
}

export function InquiryBanner() {
  const { t } = useLanguage();
  return <section className="inquiry-banner shell section-rule"><div><p className="eyebrow">{t.common.bannerEyebrow}</p><h2>{t.common.bannerTitle}</h2></div><InquiryLink /></section>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <p>© 2026 Dwita Mekatama. All Rights Reserved. Indonesia</p>
      </div>
    </footer>
  );
}

const metricIcons = [CalendarDays, Package, ClipboardCheck, Users];
const industryIcons = [Pill, UtensilsCrossed, Sparkles, Factory];

function renderHighlighted(text: string) {
  return text.split("**").map((part, index) => (index % 2 === 1 ? <span className="text-accent" key={`${index}-${part}`}>{part}</span> : part));
}

function formatMetricValue(current: number, suffix: string, usesKilo: boolean) {
  const rounded = Math.round(current);
  if (usesKilo && rounded >= 1000) {
    return `${Math.round(rounded / 1000)}k${suffix.replace(/k/i, "")}`;
  }
  return `${rounded}${usesKilo ? suffix.replace(/k/i, "") : suffix}`;
}

function MetricValue({ value }: { value: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = /^(\d+)(k?\+?)$/i.exec(value);
    const digits = match?.[1];
    if (!digits) {
      setDisplay(value);
      return;
    }

    const suffix = match?.[2] ?? "";
    const usesKilo = /k/i.test(suffix);
    const target = Number(digits) * (usesKilo ? 1000 : 1);
    const element = ref.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let startTime = 0;

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / 2600, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(formatMetricValue(target * eased, suffix, usesKilo));
      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        frame = window.requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return <strong ref={ref} className="metric-value">{display}</strong>;
}

function ProductGallery({ items, filterable = false }: { items: readonly ShowcaseProduct[]; filterable?: boolean }) {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeGroup, setActiveGroup] = useState<"all" | 0 | 1 | 2>("all");
  const [query, setQuery] = useState("");

  const displayGroups = [1, 0, 2] as const;
  const sortedItems = [...items].sort((a, b) => {
    const rankDiff = displayGroups.indexOf(a.group) - displayGroups.indexOf(b.group);
    return rankDiff !== 0 ? rankDiff : a.name.localeCompare(b.name);
  });

  const normalizedQuery = query.trim().toLowerCase();
  const visibleItems = sortedItems.filter((product) => {
    const matchesGroup = activeGroup === "all" || product.group === activeGroup;
    const matchesQuery = normalizedQuery === "" || product.name.toLowerCase().includes(normalizedQuery);
    return matchesGroup && matchesQuery;
  });

  const groupOptions: { key: "all" | 0 | 1 | 2; label: string }[] = [
    { key: "all", label: t.products.filterAll },
    ...displayGroups.map((group) => ({ key: group, label: t.products.groups[group]?.title ?? "" })),
  ];

  return (
    <>
      {filterable ? (
        <div className="product-filter" role="group" aria-label={t.products.filterAll}>
          <div className="product-filter-group">
            <span className="product-filter-icon" aria-hidden="true"><ListFilter size={17} /></span>
            {groupOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                className={`product-filter-button${activeGroup === option.key ? " is-active" : ""}`}
                aria-pressed={activeGroup === option.key}
                onClick={() => {
                  setActiveGroup(option.key);
                  setSelectedIndex(null);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
          <label className="product-search">
            <Search size={15} />
            <input
              type="search"
              value={query}
              placeholder={t.products.searchPlaceholder}
              aria-label={t.products.searchPlaceholder}
              onChange={(event) => {
                setQuery(event.target.value);
                setSelectedIndex(null);
              }}
            />
          </label>
        </div>
      ) : null}
      {visibleItems.length === 0 ? (
        <p className="product-empty">{t.products.searchEmpty}</p>
      ) : (
        <div className="product-grid">
          {visibleItems.map((product, index) => {
            const [firstImage] = product.images ?? [];
            return (
              <button type="button" className={product.tone ? `product-card tone-${product.tone}` : "product-card"} key={product.id} aria-haspopup="dialog" onClick={() => setSelectedIndex(index)}>
                <div className={`product-card-visual${firstImage ? " product-card-visual-photo" : ""}`}>
                  {firstImage ? <img src={firstImage} alt={product.name} loading="lazy" /> : null}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight size={18} />
                </div>
                <div className="product-card-copy"><p>{t.products.groups[product.group]?.title}</p><h3>{product.name}</h3></div>
              </button>
            );
          })}
        </div>
      )}
      {selectedIndex !== null ? <ProductCarousel items={visibleItems} startIndex={selectedIndex} onClose={() => setSelectedIndex(null)} /> : null}
    </>
  );
}

function ProductCarousel({ items, startIndex, onClose }: { items: readonly ShowcaseProduct[]; startIndex: number; onClose: () => void }) {
  const { t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [slide, setSlide] = useState(startIndex);
  const slideCount = items.length;
  const activeProduct = items[slide];

  const prevSlide = () => setSlide((value) => (value - 1 + slideCount) % slideCount);
  const nextSlide = () => setSlide((value) => (value + 1) % slideCount);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        setSlide((value) => (value - 1 + slideCount) % slideCount);
      }
      if (event.key === "ArrowRight") {
        setSlide((value) => (value + 1) % slideCount);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose, slideCount]);

  return (
    <div className="product-dialog-overlay" onClick={onClose}>
      <div className="product-dialog" role="dialog" aria-modal="true" aria-labelledby={activeProduct ? `product-dialog-title-${activeProduct.id}` : undefined} onClick={(event) => event.stopPropagation()}>
        <div className="product-dialog-body">
          <button type="button" className="product-carousel-nav" onClick={prevSlide}>
            <ChevronLeft size={18} />
            <span className="sr-only">{t.products.detail.prevAria}</span>
          </button>
          <div className="product-carousel-viewport">
            <button ref={closeRef} className="product-dialog-close" type="button" onClick={onClose}>
              <X size={18} />
              <span className="sr-only">{t.products.detail.closeAria}</span>
            </button>
            <div className="product-carousel-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {items.map((product, index) => (
                <ProductSlide key={product.id} product={product} index={index} isActive={index === slide} />
              ))}
            </div>
          </div>
          <button type="button" className="product-carousel-nav" onClick={nextSlide}>
            <ChevronRight size={18} />
            <span className="sr-only">{t.products.detail.nextAria}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductSlide({ product, index, isActive }: { product: ShowcaseProduct; index: number; isActive: boolean }) {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images ?? [];
  const imageCount = images.length;
  const specific = t.products.detail.items[product.id as keyof typeof t.products.detail.items];
  const groupInfo = t.products.groups[product.group];
  const description = specific?.description ?? groupInfo?.description ?? "";
  const category = groupInfo?.title ?? "";

  return (
    <article className={product.tone ? `product-slide tone-${product.tone}` : "product-slide"} inert={isActive ? undefined : true}>
      {imageCount > 0 ? (
        <div className="product-slide-media">
          <div className="product-slide-track" style={{ transform: `translateX(-${activeImage * 100}%)` }}>
            {images.map((src, imageIndex) => (
              <div className="product-slide-frame" key={src}>
                <img src={src} alt={`${product.name} — ${imageIndex + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          {imageCount > 1 ? (
            <>
              <button type="button" className="product-slide-nav product-slide-nav-prev" onClick={() => setActiveImage((value) => (value - 1 + imageCount) % imageCount)}>
                <ChevronLeft size={16} />
                <span className="sr-only">{t.products.detail.prevImageAria}</span>
              </button>
              <button type="button" className="product-slide-nav product-slide-nav-next" onClick={() => setActiveImage((value) => (value + 1) % imageCount)}>
                <ChevronRight size={16} />
                <span className="sr-only">{t.products.detail.nextImageAria}</span>
              </button>
              <div className="product-slide-dots">
                {images.map((src, imageIndex) => (
                  <button key={src} type="button" className={imageIndex === activeImage ? "is-active" : ""} onClick={() => setActiveImage(imageIndex)} aria-label={t.products.detail.imageAria(imageIndex + 1)} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <div className="product-card-visual product-slide-visual"><span>{String(index + 1).padStart(2, "0")}</span></div>
      )}
      <div className="product-dialog-copy">
        <p className="eyebrow">{category}</p>
        <h3 className="product-dialog-title" id={`product-dialog-title-${product.id}`}>{product.name}</h3>
        <p className="product-dialog-desc">{description}</p>
        {specific ? (
          <>
            <p className="product-dialog-specs-title">{t.products.detail.specsTitle}</p>
            <ul className="product-dialog-specs">{specific.specs.map((spec) => <li key={spec}><Check size={16} />{spec}</li>)}</ul>
          </>
        ) : null}
        <a className="button button-primary" href={whatsappHrefFor(t.whatsappProductMessage(product.name))} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          {t.products.detail.cta}
        </a>
      </div>
    </article>
  );
}
