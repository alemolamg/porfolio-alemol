// imports
import styles from "./containerDescript.module.scss";

interface Description {
  title: string;
  text: string;
}

const descriptions: Description[] = [
  {
    title: "Polivalente",
    text: "He trabajado en muchos sectores y de diferentes maneras, por lo que estoy preparado para ",
  },
  {
    title: "Pasión por la e informática",
    text: "Me gusta estar al día de las últimas tendencias y novedades en el mundo de la informática y la tecnología, y aprender nuevos conocimientos y habilidades que me permitan mejorar como profesional.",
  },
  {
    title: "Trabajo en equipo",
    text: "Empatia y disposición para colaborar con los compañeros a la hora de trabajar",
  },
];

const ContainerDescrip: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      {descriptions.map((descript, index) => (
        <div key={index} className={styles.data}>
          <h3 className={styles.title}>{descript.title}</h3>
          <p className={styles.text}>{descript.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ContainerDescrip;
