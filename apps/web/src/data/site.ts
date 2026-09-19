export const contact = {
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812 3456 7890",
  email: "halo@dwitamekatama.example",
};

export function whatsappHrefFor(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapsEmbedFor(latitude: number, longitude: number) {
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;
}

export const navItems = [
  { key: "home", to: "/" },
  { key: "about", to: "/tentang" },
  { key: "products", to: "/produk" },
  { key: "clients", to: "/pelanggan" },
  { key: "contact", to: "/kontak" },
] as const;

export type ShowcaseProduct = {
  id: string;
  name: string;
  group: 0 | 1 | 2;
  file?: string;
  tone?: "mesh" | "steel" | "blueprint" | "amber";
};

export const productShowcase: readonly ShowcaseProduct[] = [
  { id: "chain-conveyor", name: "Chain Conveyor", group: 1, file: "/prod1.jpg" },
  { id: "modification-tank", name: "Modification Tank", group: 1, file: "/prod2.jpg" },
  { id: "roller-conveyor", name: "Roller Conveyor", group: 1, tone: "blueprint" },
  { id: "shoe-barrier-step-bench", name: "Shoe Barrier Step Bench", group: 2, tone: "amber" },
  { id: "box", name: "Box", group: 0, file: "/products/box.png" },
  { id: "cabinet", name: "Cabinet", group: 0, file: "/products/cabinet.png" },
  { id: "condensor", name: "Condensor", group: 0, file: "/products/condensor.png" },
  { id: "container", name: "Container", group: 0, file: "/products/container-wadah.png" },
  { id: "cupboard", name: "Cupboard", group: 0, file: "/products/cupboard.png" },
  { id: "dipper", name: "Dipper", group: 0, file: "/products/dipper.png" },
  { id: "double-jacketed-tank", name: "Double Jacketed Tank", group: 0, file: "/products/double-jacketed-tank.png" },
  { id: "drawer", name: "Drawer", group: 0, file: "/products/drawer.png" },
  { id: "funnel", name: "Funnel", group: 0, file: "/products/funnel.png" },
  { id: "mug", name: "Mug", group: 0, file: "/products/mug.png" },
  { id: "storage-cabinet", name: "Storage Cabinet", group: 0, file: "/products/storage-cabinet.png" },
  { id: "storage-locker", name: "Storage Locker", group: 0, file: "/products/storage-locker.png" },
  { id: "wall-cabinet", name: "Wall Cabinet", group: 0, file: "/products/wall-cabinet.png" },
  { id: "alufoil-lifter", name: "Alufoil Lifter", group: 1, file: "/products/alufoil-lifter.png" },
  { id: "chemical-injection-skid", name: "Chemical Injection Skid", group: 1, file: "/products/chemical-injection-skid.png" },
  { id: "conveyor", name: "Conveyor", group: 1, file: "/products/conveyor.png" },
  { id: "hopper", name: "Hopper", group: 1, file: "/products/hopper.png" },
  { id: "laminar-air-flow", name: "Laminar Air Flow", group: 1, file: "/products/laminar-air-flow.png" },
  { id: "pallet", name: "Pallet", group: 1, file: "/products/pallet.png" },
  { id: "pass-box", name: "Pass Box", group: 1, file: "/products/pass-box.png" },
  { id: "strainer", name: "Strainer", group: 1, file: "/products/strainer.png" },
  { id: "table-top-chain-conveyor", name: "Table Top Chain Conveyor", group: 1, file: "/products/table-top-chain-conveyor.png" },
  { id: "carabiner", name: "Carabiner", group: 2, file: "/products/carabiner.png" },
  { id: "chain-lock", name: "Chain Lock", group: 2, file: "/products/chain-lock.png" },
  { id: "hose-hook", name: "Hose Hook", group: 2, file: "/products/hose-hook.png" },
  { id: "locking-clamp", name: "Locking Clamp", group: 2, file: "/products/locking-clamp.png" },
  { id: "pipe-connector", name: "Pipe Connector", group: 2, file: "/products/pipe-connector.png" },
  { id: "sanitary-clamp-socket", name: "Sanitary Clamp Socket", group: 2, file: "/products/sanitary-clamp-socket.png" },
  { id: "tweezers", name: "Tweezers (Pinset)", group: 2, file: "/products/tweezers-pinset.png" },
];

export const featuredProducts = productShowcase.slice(0, 4);

export const clientLogos = [
  { file: "abbot.jpg", name: "Abbott Indonesia" },
  { file: "actavis.png", name: "Actavis Indonesia" },
  { file: "amarox.jpeg", name: "Amarox Pharma Global" },
  { file: "amartha.png", name: "Anugrah Amartha Global" },
  { file: "aqpa.jpg", name: "AQPA Indonesia" },
  { file: "avesta-continental-pack.png", name: "Avesta Continental Pack" },
  { file: "bayer.png", name: "Bayer Indonesia" },
  { file: "beacons.jpg", name: "Beacons Pharmaceutical" },
  { file: "beta.jpg", name: "Beta Pharmacon" },
  { file: "boehringer-ingelheim.png", name: "Boehringer Ingelheim Indonesia" },
  { file: "cakra-inno.png", name: "Cakra Inno Engineering" },
  { file: "ciracasindo.png", name: "Ciracasindo Perdana" },
  { file: "ckd-otto.png", name: "CKD OTTO Pharmaceutical" },
  { file: "combiphar.jpg", name: "Combiphar" },
  { file: "corsa.jpg", name: "Corsa Industries" },
  { file: "dankos.png", name: "Dankos Farma" },
  { file: "decametric.jpg", name: "Deca Metric Medica" },
  { file: "dexa.jfif", name: "Dexa Medica" },
  { file: "dlbs.png", name: "DLBS" },
  { file: "ethica.png", name: "Ethica Industri Farmasi" },
  { file: "fabs.jpg", name: "FABS Indonesia" },
  { file: "fahrenheit.jpg", name: "Pratapa Nirmala Fahrenheit" },
  { file: "ferron.png", name: "Ferron Par Pharmaceuticals" },
  { file: "fonko.jpg", name: "Fonko International Pharmaceuticals" },
  { file: "glaxo-wellcome-indonesia.jpg", name: "Glaxo Wellcome Indonesia" },
  { file: "glaxosmithkline.jpg", name: "GlaxoSmithKline Indonesia" },
  { file: "gmp.jpg", name: "Global Multi Pharmalab" },
  { file: "gondowangi.jpg", name: "Gondowangi Tradisional Kosmetika" },
  { file: "gracia.jpg", name: "Gracia Pharmindo" },
  { file: "gunanusaeramandiri.jpg", name: "Gunanusa Eramandiri" },
  { file: "haldin.jpg", name: "Haldin Pacific Semesta" },
  { file: "haleonsterling.png", name: "Sterling Products Indonesia" },
  { file: "ikapharmindo.jpg", name: "Ikapharmindo Putramas" },
  { file: "imedco.jpg", name: "Imedco Djaja" },
  { file: "kalbe.png", name: "Kalbe Farma" },
  { file: "kalbio.png", name: "Kalbio Global Medika" },
  { file: "karmanta.jpg", name: "Karmanta Wijaya Sakti" },
  { file: "kfsp.png", name: "Kimia Farma Sungwun Pharmacopia" },
  { file: "kimia-farma.png", name: "Kimia Farma" },
  { file: "kobe.png", name: "Kobe Boga Utama" },
  { file: "lapilab.png", name: "Lapi Laboratories" },
  { file: "Lessential.png", name: "L'essential" },
  { file: "lestari-sentosa.jpg", name: "Lestari Sentosa" },
  { file: "madurasa.jpg", name: "Madurasa Unggulan Nusantara" },
  { file: "mandom.jpg", name: "Mandom Indonesia" },
  { file: "mbf.jpg", name: "Mahakam Beta Farma" },
  { file: "medikon.png", name: "Medikon Prima Laboratories" },
  { file: "n.p.foods.jpg", name: "NP Foods" },
  { file: "nellco.png", name: "Nellco Indopharma" },
  { file: "nutrifood.png", name: "Nutrifood Indonesia" },
  { file: "otsuka.jpg", name: "Amerta Indah Otsuka" },
  { file: "perfetti.jpg", name: "Perfetti Van Melle" },
  { file: "promed.jpg", name: "Promedrahardjo Farmasi Industri" },
  { file: "pyridam.png", name: "Pyridam Farma" },
  { file: "robertet.png", name: "Robertet Indonesia" },
  { file: "saka.jpg", name: "Saka Farma" },
  { file: "samco.png", name: "Samco Farma" },
  { file: "sampharindo.jpg", name: "Sampharindo" },
  { file: "sandoz.jpg", name: "Sandoz Indonesia" },
  { file: "simex.jpg", name: "Simex Pharmaceutical Indonesia" },
  { file: "soho.png", name: "Soho Industri Pharmasi" },
  { file: "taisho.png", name: "Taisho Pharmaceutical Indonesia" },
  { file: "takasago.png", name: "Takasago International Indonesia" },
  { file: "temposcan.jpg", name: "Tempo Scan Pacific" },
  { file: "vaksindo.jpg", name: "Vaksindo Satwa Nusantara" },
] as const;

export const locations = {
  office: {
    address: "Jl. Al-Hidayah No.6, RT.01/RW.07, Cimuning, Mustika Jaya, Kota Bekasi, Jawa Barat, 17155",
    map: "https://maps.app.goo.gl/JThzkgUzYzD5H59S7",
    lat: -6.311247,
    lng: 107.027968,
  },
  workshop: {
    address: "Jl. Raya Kedaung, RT.03/RW.06, Cimuning, Mustika Jaya, Kota Bekasi, Jawa Barat 17155",
    map: "https://maps.app.goo.gl/QskX9QyxtSL25CUj6",
    lat: -6.311534,
    lng: 107.030689,
  },
} as const;
