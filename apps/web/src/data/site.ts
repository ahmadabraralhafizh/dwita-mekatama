export const contact = {
  whatsappNumber: "6281320209009",
  whatsappDisplay: "+62 813 2020 9009",
  email: "dwita_mekatama@yahoo.co.id",
};

export function whatsappHrefFor(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapsEmbedFor(latitude: number, longitude: number) {
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;
}

export const productCatalogPdf = "/company-profile-Dwita-Mekatama.pdf";

export const navItems = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "products", to: "/products" },
  { key: "clients", to: "/clients" },
  { key: "contact", to: "/contact" },
] as const;

export type ShowcaseProduct = {
  id: string;
  name: string;
  group: 0 | 1 | 2;
  images?: readonly string[];
  tone?: "mesh" | "steel" | "blueprint" | "amber";
};

export const productShowcase: readonly ShowcaseProduct[] = [
  { id: "chain-conveyor", name: "Chain Conveyor", group: 1, images: ["/products/chain-conveyor1.png", "/products/chain-conveyor2.png"] },
  { id: "roller-conveyor", name: "Roller Conveyor", group: 1, images: ["/products/roller-conveyor.png"] },
  { id: "shoe-barrier-step-bench", name: "Shoe Barrier Step Bench", group: 0, images: ["/products/shoes-barrier-step-bench.png"] },
  { id: "box", name: "Box", group: 0, images: ["/products/box.png"] },
  { id: "cabinet", name: "Cabinet", group: 0, images: ["/products/cabinet.png"] },
  { id: "condensor", name: "Condensor", group: 1, images: ["/products/condensor.png"] },
  { id: "container", name: "Container", group: 0, images: ["/products/container1.png", "/products/container2.png"] },
  { id: "cupboard", name: "Cupboard", group: 0, images: ["/products/cupboard.png"] },
  { id: "dipper", name: "Dipper", group: 0, images: ["/products/dipper.png"] },
  { id: "double-jacketed-tank", name: "Double Jacketed Tank", group: 1, images: ["/products/double-jacketed-tank.png"] },
  { id: "drawer", name: "Drawer", group: 0, images: ["/products/drawer.png"] },
  { id: "funnel", name: "Funnel", group: 1, images: ["/products/funnel1.png", "/products/funnel2.png", "/products/funnel3.png"] },
  { id: "mug", name: "Mug", group: 0, images: ["/products/mug.png"] },
  { id: "storage-cabinet", name: "Storage Cabinet", group: 0, images: ["/products/storage-cabinet.png"] },
  { id: "storage-locker", name: "Storage Locker", group: 0, images: ["/products/storage-locker.png"] },
  { id: "wall-cabinet", name: "Wall Cabinet", group: 0, images: ["/products/wall-cabinet.png"] },
  { id: "hanging-cabinet", name: "Hanging Cabinet", group: 0, images: ["/products/hanging-cabinet.png"] },
  { id: "locker", name: "Locker", group: 0, images: ["/products/locker.png"] },
  { id: "wardrobe", name: "Wardrobe", group: 0, images: ["/products/wardrobe.png"] },
  { id: "racking", name: "Racking", group: 0, images: ["/products/racking.png"] },
  { id: "table", name: "Table", group: 0, images: ["/products/table1.png"] },
  { id: "chair", name: "Chair", group: 0, images: ["/products/chair1.png", "/products/chair2.png", "/products/chair3.png", "/products/chair4.png"] },
  { id: "cip-nozzle-tank", name: "CIP Nozzle Tank", group: 1, images: ["/products/cip-nozzle-tank1.png", "/products/cip-nozzle-tank2.png"] },
  { id: "diesel-tank", name: "Diesel Tank", group: 1, images: ["/products/diesel-tank.png"] },
  { id: "mixing-tank", name: "Mixing Tank", group: 1, images: ["/products/mixing-tank.png", "/products/mixing-tank2.png"] },
  { id: "storage-tank", name: "Storage Tank", group: 1, images: ["/products/storage-tank1.png", "/products/storage-tank2.png", "/products/storage-tank3.png"] },
  { id: "basin", name: "Basin", group: 0, images: ["/products/baskom-wadah.png"] },
  { id: "petri-dish", name: "Petri Dish", group: 0, images: ["/products/cawan-petri.png"] },
  { id: "hand-sanitizer-box", name: "Hand Sanitizer Box", group: 0, images: ["/products/hand-sanitizer-box.png"] },
  { id: "punch-dies-cupboard", name: "Punch & Dies Cupboard", group: 0, images: ["/products/punch&dies-cupboard.png"] },
  { id: "wash-basin", name: "Wash Basin", group: 0, images: ["/products/wastafel.png"] },
  { id: "waste-storage", name: "Waste Storage", group: 0, images: ["/products/waste-storage.png"] },
  { id: "spare-parts-box", name: "Spare Parts Box", group: 0, images: ["/products/spare-parts-box.png"] },
  { id: "belt-conveyor", name: "Belt Conveyor", group: 1, images: ["/products/belt-conveyor1.png", "/products/belt-conveyor2.png", "/products/belt-conveyor3.png", "/products/belt-conveyor4.png"] },
  { id: "feeder-conveyor", name: "Feeder Conveyor", group: 1, images: ["/products/feeder-conveyor.png"] },
  { id: "outfeed-conveyor", name: "Outfeed Conveyor", group: 1, images: ["/products/outfeed-conveyor.png"] },
  { id: "alufoil-lifter", name: "Alufoil Lifter", group: 1, images: ["/products/alufoil-lifter1.png", "/products/alufoil-lifter2.png", "/products/alufoil-lifter3.png"] },
  { id: "chemical-injection-skid", name: "Chemical Injection Skid", group: 1, images: ["/products/chemical-injection-skid1.png", "/products/chemical-injection-skid2.png", "/products/chemical-injection-skid3.png", "/products/chemical-injection-skid4.png"] },
  { id: "hopper", name: "Hopper", group: 1, images: ["/products/hopper.png"] },
  { id: "laminar-air-flow", name: "Laminar Air Flow", group: 1, images: ["/products/laminar-air-flow.png"] },
  { id: "pallet", name: "Pallet", group: 1, images: ["/products/pallet.png"] },
  { id: "pass-box", name: "Pass Box", group: 1, images: ["/products/pass-box.png"] },
  { id: "strainer", name: "Strainer", group: 0, images: ["/products/strainer.png"] },
  { id: "chamber-fbd", name: "Chamber FBD", group: 1, images: ["/products/chamber-fbd1.png", "/products/chamber-fbd2.png", "/products/chamber-fbd3.png", "/products/chamber-fbd4.png"] },
  { id: "crusher-machine", name: "Crusher Machine", group: 1, images: ["/products/crusher-machine.png"] },
  { id: "head-capper", name: "Head Capper", group: 2, images: ["/products/head-capper.png"] },
  { id: "heat-seal", name: "Heat Seal", group: 2, images: ["/products/heat-seal.png"] },
  { id: "oscillating-machine", name: "Oscillating Machine", group: 1, images: ["/products/oscillating-machine.png"] },
  { id: "rotary-table", name: "Rotary Table", group: 1, images: ["/products/rotary-table.png"] },
  { id: "turn-table", name: "Turn Table", group: 1, images: ["/products/turn-table.png"] },
  { id: "washer-machine", name: "Washer Machine", group: 1, images: ["/products/washer-machine.png"] },
  { id: "trolley", name: "Trolley", group: 1, images: ["/products/trolley1.png", "/products/trolley2.png"] },
  { id: "box-trolley", name: "Box Trolley", group: 1, images: ["/products/box-trolley1.png", "/products/box-trolley2.png"] },
  { id: "cage-trolley", name: "Cage Trolley", group: 1, images: ["/products/cage-trolley1.png", "/products/cage-trolley2.png", "/products/cage-trolley3.png"] },
  { id: "trolley-2-shelves", name: "Trolley 2 Shelves", group: 1, images: ["/products/trolley-2-shelves.png"] },
  { id: "trolley-3-shelves", name: "Trolley 3 Shelves", group: 1, images: ["/products/trolley-3-shelves.png"] },
  { id: "ladder", name: "Ladder", group: 1, images: ["/products/ladder1.png", "/products/ladder2.png"] },
  { id: "carabiner", name: "Carabiner", group: 2, images: ["/products/carabiner.png"] },
  { id: "chain-lock", name: "Chain Lock", group: 2, images: ["/products/chain-lock.png"] },
  { id: "hose-hook", name: "Hose Hook", group: 0, images: ["/products/hose-hook.png"] },
  { id: "locking-clamp", name: "Locking Clamp", group: 2, images: ["/products/locking-clamp.png"] },
  { id: "pipe-connector", name: "Pipe Connector", group: 2, images: ["/products/pipe-connector.png"] },
  { id: "sanitary-clamp-socket", name: "Sanitary Clamp Socket", group: 2, images: ["/products/sanitary-clamp-socket.png"] },
  { id: "tweezers", name: "Tweezers (Pinset)", group: 2, images: ["/products/pinset.png"] },
  { id: "roller-gear", name: "Roller & Gear", group: 2, images: ["/products/roller&gear.png"] },
  { id: "container-with-clamp", name: "Container with Clamp", group: 0, images: ["/products/container-with-clamp.png"] },
  { id: "container-with-clamp-seal", name: "Container with Clamp & Seal", group: 0, images: ["/products/container-with-clamp-seal.png"] },
  { id: "mesh", name: "Mesh", group: 2, images: ["/products/mesh.png"] },
  { id: "scraper", name: "Scraper", group: 0, images: ["/products/scrapper.png"] },
  { id: "scoop", name: "Scoop", group: 0, images: ["/products/scoop.png"] },
  { id: "stick-sampler", name: "Stick Sampler", group: 2, images: ["/products/stick-sampler.png"] },
];

const featuredProductIds = ["chain-conveyor", "chemical-injection-skid", "mixing-tank", "storage-tank"];

export const featuredProducts = productShowcase.filter((product) => featuredProductIds.includes(product.id));

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
    address: "Jl. Al-Hidayah No.6, RT.01/RW.07, Cimuning, Mustika Jaya,\nKota Bekasi, Jawa Barat, 17155",
    map: "https://maps.app.goo.gl/JThzkgUzYzD5H59S7",
    lat: -6.311247,
    lng: 107.027968,
  },
  workshop: {
    address: "Jl. Raya Kedaung, RT.03/RW.06, Cimuning, Mustika Jaya,\nKota Bekasi, Jawa Barat, 17155",
    map: "https://maps.app.goo.gl/QskX9QyxtSL25CUj6",
    lat: -6.311534,
    lng: 107.030689,
  },
} as const;
