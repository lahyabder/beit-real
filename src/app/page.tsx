import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { News } from "@/components/sections/news";
import { Events } from "@/components/sections/events";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />
      <Hero />
      <Stats />
      <News />
      <Events />
      <Footer />
    </main>
  );
}
