import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
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

  return (
    <>
      <Header currentStep={currentStep} />
      {/* Form Steps
      Buttons (back, next, submit)
      <Resume formData = { formData } /> */}
    </>
  );
}

export default App;
