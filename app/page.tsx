import Presentation from "../components/presentation";
import SkillsContainer from "@/components/technologies/skillsContainer";
import Footer from "@/components/footer/footer";
import ContainerDescrip from "@/components/descriptComponent/containerDescript";

export default function Home() {
  return (
    <main className="flex p-0 flex-col items-center justify-between">
      <Presentation />
      <ContainerDescrip />
      <SkillsContainer /> {/* Contiene todas las skills aprendidas */}
      <Footer />
    </main>
  );
}
