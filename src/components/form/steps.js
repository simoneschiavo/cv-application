// Will need to import the step components here
import PersonalDetailsStep from "./PersonalDetailsStep";
import BioStep from "./BioStep";
import WorkExperienceStep from "./WorkExperienceStep";
import ProjectsStep from "./ProjectsStep";
import EducationStep from "./EducationStep";

export const steps = [
  {
    stepId: 0,
    stepName: "Personal details",
    component: PersonalDetailsStep,
  },
  {
    stepId: 1,
    stepName: "Bio",
    component: BioStep,
  },
  {
    stepId: 2,
    stepName: "WorkExperience",
    component: WorkExperienceStep,
  },
  {
    stepId: 3,
    stepName: "Projects",
    component: ProjectsStep,
  },
  {
    stepId: 4,
    stepName: "Education",
    component: EducationStep,
  },
];
