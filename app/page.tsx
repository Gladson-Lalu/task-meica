import Header from "./components/Header";
import Intro from "./components/Intro";
import Banner from "./components/Banner";
import Invitation from "./components/Invitation";
import ParticipatingOrganizations from "./components/ParticipatingOrganizations";
import Participation from "./components/Participation";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen min-w-[1200px] bg-white max-w-screen-2xl px-11 lg:px-0 transition-all duration-200 py-4">
      <Header />
      <main className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <ScrollAnimation type="fade-up">
          <Intro />
        </ScrollAnimation>
        
        <ScrollAnimation type="scale-in" delay={200}>
          <Banner />
        </ScrollAnimation>
        
        <ScrollAnimation type="fade-up" delay={100}>
          <Invitation />
        </ScrollAnimation>
        
        <ScrollAnimation type="fade-in" delay={200}>
          <ParticipatingOrganizations />
        </ScrollAnimation>
        
        <ScrollAnimation type="fade-up" delay={300}>
          <Participation />
        </ScrollAnimation>
      </main>
    </div>
  );
}
