import Link from "next/link";
import { Button } from "@/components/ui/Button";

const workItems = [
  {
    title: "Kopi Sudut",
    short: "Kopi Sudut",
    type: "UI Design · Website pemasaran",
    accent: "bg-[#f3eee5]",
    primaryText: "Kopi baik, hari lebih baik.",
    description: "Dirancang agar setiap diri kopi loyal dan mudah dilihat.",
    cta: "Lihat produk",
    tag: "Project konsep",
    items: [
      { name: "Kopi susu", price: "Rp18.000" },
      { name: "Cold brew", price: "Rp22.000" },
    ],
  },
  {
    title: "Toko Harian",
    short: "Toko Harian",
    type: "UI Design · Sistem kasir web",
    accent: "bg-[#e4efe9]",
    primaryText: "Buat proses kasir lebih cepat dan rapi.",
    description: "Semua produk, menu, dan transaksi disusun agar lebih jelas.",
    cta: "Lihat produk",
    tag: "Project konsep",
    items: [
      { name: "Kopi susu", price: "Rp18.000" },
      { name: "Roti gandum", price: "Rp12.000" },
      { name: "Biskuit", price: "Rp6.000" },
      { name: "Air mineral", price: "Rp5.000" },
    ],
  },
  {
    title: "Ruang Rumah",
    short: "Ruang Rumah",
    type: "UI Design · Katalog produk",
    accent: "bg-[#ece8f4]",
    primaryText: "Benda sederhana. Rumah istimewa.",
    description: "Pilihan produk dan katalog ditata agar terasa lebih rumah.",
    cta: "Lihat produk",
    tag: "Project konsep",
    items: [
      { name: "Cangkir keramik", price: "Rp85.000" },
      { name: "Lampu meja", price: "Rp185.000" },
    ],
  },
];

const serviceItems = [
  {
    title: "UI/UX Design",
    text: "Saya merancang antarmuka yang intuitif dan menyenangkan — dari riset pengguna, wireframe, hingga prototipe interaktif siap developer.",
    tags: ["Figma", "Prototyping", "UX Research"],
  },
  {
    title: "Web Development",
    text: "Saya membangun website yang cepat, responsif, dan mudah dikelola dengan teknologi modern untuk kebutuhan bisnis Anda.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Design System",
    text: "Saya membantu fondasi visual agar konsisten — komponen, token warna, tipografi, hingga dokumentasi yang memudahkan tim berkembang.",
    tags: ["Component Library", "Tokens", "Documentation"],
  },
];

const highlights = [
  "AI strategy & discovery",
  "UX systems for product teams",
  "Conversion-led design sprint",
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center px-6 pb-16 pt-8 md:px-10">
        <div className="w-full max-w-5xl text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-4 w-4 rounded-full bg-brand-neon shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]" />
            <span className="text-sm tracking-tight text-black/70 dark:text-white/70">
              Selamat datang. Bonjour, bienvenue. Hello! Welcome.
            </span>
          </div>

          <h1 className="text-[4rem] font-semibold leading-[0.92] tracking-[-0.06em] text-[#111111] dark:text-white md:text-[7.5rem]">
            Win AI search in every answer.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/65 dark:text-white/65 md:text-xl">
            I design high-converting digital experiences for ambitious teams who want clarity,
            momentum, and better product stories in every interaction.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#services" variant="primary" arrow>
              Explore services
            </Button>
            <Button href="/about" variant="secondary" arrow>
              Meet the studio
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-black/60 dark:text-white/60">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/3 px-3 py-1.5 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-black/10 dark:border-white/10 py-20">
        <div className="mx-auto max-w-6xl rounded-[1.5rem]">
          <div className="mb-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-start justify-start gap-3">
                <span className="h-4 w-4 rounded-full bg-brand-neon shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/70 dark:text-white/70">
                  Selected Work
                </span>
              </div>
              <p className="mt-5 text-4xl font-semibold leading-none tracking-[-0.06em] text-[#111111] dark:text-white">
                Proyek yang pernah saya kerjakan.
              </p>
            </div>

            <p className="max-w-md text-base leading-7 text-black/60 dark:text-white/60 md:text-lg">
              Kumpulan eksplorasi desain dan pengembangan. Semua contoh berikut adalah proyek konsep personal.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {workItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.45rem] border border-black/10 bg-white dark:border-white/10 dark:bg-[#0f141b]"
              >
                <div className={`${item.accent} p-5`}>
                  <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-black/55">
                    <span>•••</span>
                    <span>{item.title}</span>
                  </div>

                  <div className="rounded-[1.25rem] border border-black/10 bg-white/35 p-4 text-left">
                    <div className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-black/55">
                      <span>{item.type}</span>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/15 bg-white/60 text-sm">
                        ↗
                      </span>
                    </div>

                    <h3 className="text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#111111]">
                      {item.primaryText}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-black/60">{item.description}</p>

                    <button className="mt-5 inline-flex items-center rounded-md bg-[#121212] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                      {item.cta}
                    </button>
                  </div>

                  <div className="mt-4 space-y-2">
                    {item.items.slice(0, 2).map((product) => (
                      <div key={product.name} className="flex items-center justify-between rounded-xl border border-black/10 bg-white/15 px-3 py-2 text-[11px] text-black/70">
                        <span>{product.name}</span>
                        <span>{product.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-black/50 dark:text-white/45">{item.short}</p>
                      <h4 className="mt-2 text-[1.1rem] font-semibold text-[#111111] dark:text-white">{item.title}</h4>
                    </div>
                    <span className="text-xl text-black/60 dark:text-white/60">↗</span>
                  </div>
                  <div className="mt-4 inline-flex rounded-full border border-black/10 bg-black/5 text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/65 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]">
                    {item.tag}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-black/10 dark:border-white/10 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60 dark:text-white/60">Services</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#111111] dark:text-white md:text-6xl">
                Apa yang bisa saya bantu untuk Anda.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-black/65 dark:text-white/65">
              Setiap proyek saya mulai dengan mendengarkan, lalu merancang solusi yang tepat sesuai kebutuhan bisnis dan pengguna.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {serviceItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.7rem] border border-black/10 bg-white/60 hover:border-black/20 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-xl text-[#88a800] dark:border-white/10 dark:bg-white/5 dark:text-brand-neon">
                  ✦
                </div>

                <h3 className="text-[2rem] font-semibold tracking-[-0.04em] text-[#111111] dark:text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-black/65 dark:text-white/65">{item.text}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-black/5 text-black/65 dark:border-white/10 dark:bg-black/10 dark:text-white/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
