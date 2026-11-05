import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Teaching from "@/components/Teaching";
import Classroom from "@/components/Classroom";
import Playground from "@/components/Playground";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Providers>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Teaching />
        <Classroom />
        <Skills />
        <Playground />
        <Credentials />
      </main>
      <Contact />
      <Footer />
    </Providers>
  );
}
