import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
    </main>
  );
}
