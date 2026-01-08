import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Portfolio from "@/components/Portfolio"
import About from "@/components/About";
import Contact from "@/components/Contact";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Page() {
  return (
    <div>
      <WelcomeScreen />
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}
