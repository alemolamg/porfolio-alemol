import Presentation from "@/components/presentation";
import SkillsContainer from "@/components/technologies/skillsContainer";
import Footer from "@/components/footer/footer";
import styles from "./page.module.scss";
import ContainerDescrip from "@/components/descriptComponent/containerDescript";

export default function Home() {
  return (
    <main id="main" className={styles.main}>
      <Presentation />
      <ContainerDescrip />
      <SkillsContainer />
      <Footer />
    </main>
  );
}