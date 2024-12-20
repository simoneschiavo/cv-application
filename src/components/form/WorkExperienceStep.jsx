export default function WorkExperienceStep({ formData, handleChange }) {
  return (
    <>
      <div className="title">
        <h1>Experience</h1>
        <p className="subtitle">Write down your work experience history</p>
      </div>
          {formData.workExperiences.map((workExperience) => (
              <form className="work-experience-step" key={workExperience.id}>
                  <div className="row">
                      <div className="field company-name">
                          <label htmlFor="companyName">Company</label>
                          <input type="text" name="companyName" id="companyName" value={workExperience.companyName} onChange={handleChange} />
                      </div>
                  </div>
          </form>
      ))}
    </>
  );
}
