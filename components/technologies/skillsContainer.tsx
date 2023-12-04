import SkillCard from "./skillCard";

interface SkillsProps {}

export interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "python", icon: "/skill-icons/python_icon.svg" },
  { name: "kotlin", icon: "/skill-icons/Kotlin-Full-Color.svg" },
  // { name: "sql", icon: "image" },
  // { name: "java", icon: "image" },
];

const SkillsContainer: React.FC<SkillsProps> = ({}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-around mt-5">
      {skills.map((tecnologia, index) => (
        <SkillCard key={index} skill={tecnologia} />
      ))}
    </div>
  );
};

export default SkillsContainer;
