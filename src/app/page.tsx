import About from "@/components/sections/About";
import Expert from "@/components/sections/Expert";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Team from "@/components/sections/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Expert />
      <Partners />
    </main>
  );
}
