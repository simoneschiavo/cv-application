import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { steps } from "./components/form/steps";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    linkedinProfile: "",
    address: "",
    phoneNumber: "",
    bio: "",
    workExperience: [
      {
        id: uuidv4(),
        jobTitle: "",
        companyName: "",
        workLocation: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    projects: [
      {
        id: uuidv4(),
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        id: uuidv4(),
        institutionName: "",
        startDate: "",
        endDate: "",
        name: "",
      },
    ],
  });

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = () => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let hasBack = currentStep > 0;
  let hasNext = currentStep < steps.length - 1;

  return (
    <>
      <Header currentStep={currentStep} />
      Form Steps
      <main>
        <section className="steps-data">
          <CurrentStepComponent formData={formData} handleChange={handleChange} />
          <div className="buttons-wrapper">
            <button onClick={handleBack} disabled={!hasBack}>
              Back
            </button>
            <button onClick={handleNext} disabled={!hasNext}>
              Next
            </button>
          </div>
        </section>
        <section>{/* <Resume formData={formData} /> */}</section>
      </main>
    </>
  );
}

export default App;
