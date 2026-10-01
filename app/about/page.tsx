import { Button } from "@/components/ui/Button";

const values = [
    "Product thinking before visual polish",
    "Clear narratives for founders and teams",
    "Systems that support sustainable design velocity",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen scroll-mt-24 px-6 pb-24 pt-28 md:px-10">
            <section className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">About</p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                        Design with clarity, not noise.
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
                        I help product teams turn complexity into focused decisions. My work brings together
                        strategy, UX, and execution so the product story feels easy to understand and valuable
                        to use.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button href="/" variant="primary" arrow>
                            Back to home
                        </Button>
                        <Button href="/service" variant="dark" arrow>
                            View services
                        </Button>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/3 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-neon text-lg font-black text-[#121212]">
                            D
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-white/45">Profile</p>
                            <h2 className="mt-1 text-2xl font-semibold text-white">Dira Okta</h2>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        {values.map((value) => (
                            <div key={value} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-neon" />
                                <p className="text-sm leading-7 text-white/70">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
