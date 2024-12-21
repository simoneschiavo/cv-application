import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { steps } from "./components/form/steps";
import Resume from "./components/Resume";
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
    workExperiences: [
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
    educations: [
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    setFormData((prevFormData) => {
      const updatedArray = prevFormData[arrayName].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );

      return { ...prevFormData, [arrayName]: updatedArray };
    });
  };

  const removeArrayItem = (arrayName, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [arrayName]: prevFormData[arrayName].filter((_, i) => i !== index),
    }));
  };

  const addArrayItem = (arrayName, newItem) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [arrayName]: [...prevFormData[arrayName], newItem],
    }));
  };

  let hasBack = currentStep > 0;
  let hasNext = currentStep < steps.length - 1;

  return (
    <>
      <Header currentStep={currentStep} />
      <main>
        <section className="steps-data">
          <CurrentStepComponent
            formData={formData}
            handleChange={handleChange}
            handleArrayChange={handleArrayChange}
            removeArrayItem={removeArrayItem}
            addArrayItem={addArrayItem}
          />
          <div className="buttons-wrapper">
            <button
              className="back-button"
              onClick={handleBack}
              disabled={!hasBack}
            >
              Back
            </button>
            <button
              className="next-button"
              onClick={handleNext}
              disabled={!hasNext}
            >
              Next
            </button>
          </div>
        </section>
        <section className="resume">
          <Resume formData={formData} />
        </section>
      </main>
    </>
  );
}

export default App;
