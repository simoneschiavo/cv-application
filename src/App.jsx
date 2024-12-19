import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
  })

  return (
    <>
      <Header currentStep={currentStep} />
      {/* Form Steps
      Buttons (back, next, submit)
      <Resume formData = { formData } /> */}
    </>
  )
}

export default App
