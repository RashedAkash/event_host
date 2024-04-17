import Events from "@/components/events/Events";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import HostEvnet from "@/components/hostEvent/HostEvnet";
import Navbar from "@/components/navbar/Navbar";
import QrScanner from "@/components/qrScanner/QrScanner";
import SimplifyTicketing from "@/components/simplyfiTicketing/SimplifyTicketing";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <HostEvnet />
      <QrScanner />
      <SimplifyTicketing />
      <Footer />
    </div>
  );
}
