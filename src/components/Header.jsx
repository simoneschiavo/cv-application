import { steps } from "./form/steps";

export default function Header({ currentStep }) {
  return (
    <header>
      {steps.map((step, index) => (
        <div
          key={step.stepId}
          className={
            currentStep === index ? "header-current-step" : "header-step"
          }
        >
          {step.stepName}
        </div>
      ))}
    </header>
  );
}
