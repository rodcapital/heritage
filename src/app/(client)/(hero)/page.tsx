import About from "@/components/about";
import BackTop from "@/components/backTop";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Header from "@/components/header";
import ImageSlide from "@/components/imageSlide";
import Services from "@/components/services";
import Text from "@/components/text";
import { ModeToggle } from "@/components/ui/modeToggle";
import { TextGenerateEffect } from "@/components/ui/textGenerateEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-9">
        <div className="flex items-center">
          <Header />
          <ModeToggle />
        </div>
        <Body />
      </div>
      <About />
      <Services />
      <BackTop />
      <Footer />
    </div>
  );
}
