import About from "@/components/about";
import BackTop from "@/components/backTop";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-9">
        <Header />
        <Body />
      </div>
      <About />
      <Services />
      <BackTop />
      <Footer />
    </div>
  );
}
