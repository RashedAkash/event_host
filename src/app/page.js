import Hero from "@/components/hero/Hero";
import HostEvnet from "@/components/hostEvent/HostEvnet";
import QrScanner from "@/components/qrScanner/QrScanner";
import SimplifyTicketing from "@/components/simplyfiTicketing/SimplifyTicketing";


export default function Home() {
  return (
    <div>
      <Hero />
      <HostEvnet />
      <QrScanner />
      <SimplifyTicketing />
    </div>
  );
}
