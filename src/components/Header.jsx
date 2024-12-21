import { steps } from "./form/steps";

export default function Header({ currentStep }) {
  return (
    <header>
      <section className="backdrop"></section>
      {steps.map((step, index) => (
        <div
          key={step.stepId}
          className={
            currentStep === index ? "header-current-step header-step" : "header-step"
          }
        >
          {step.stepName}
        </div>
      ))}
      <section className="backdrop-edge"></section>
    </header>
  );
}
