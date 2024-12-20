export default function WorkExperienceStep({
  formData,
  handleChange,
  handleArrayChange,
}) {
  return (
    <>
      <div className="title">
        <h1>Experience</h1>
        <p className="subtitle">Write down your work experience history</p>
      </div>
      {formData.workExperiences.map((workExperience, index) => (
        <form className="work-experience-step" key={workExperience.id}>
          <div className="row">
            <div className="field we company-name">
              <label htmlFor="companyName">Company</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={workExperience.companyName}
                onChange={(e) =>
                  handleArrayChange(
                    "workExperiences",
                    index,
                    "companyName",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="field we job-title">
              <label htmlFor="jobTitle">Role</label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                value={workExperience.jobTitle}
                onChange={(e) =>
                  handleArrayChange(
                    "workExperiences",
                    index,
                    "jobTitle",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="field we start-date">
              <label htmlFor="startDate">From</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={workExperience.startDate}
                onChange={(e) =>
                  handleArrayChange(
                    "workExperiences",
                    index,
                    "startDate",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="field we end-date">
              <label htmlFor="endDate">To</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={workExperience.endDate}
                onChange={(e) =>
                  handleArrayChange(
                    "workExperiences",
                    index,
                    "endDate",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <div className="field we description">
            <label htmlFor="description">Achievements</label>
            <textarea
              name="description"
              id="description"
              value={workExperience.description}
              onChange={(e) =>
                handleArrayChange(
                  "workExperiences",
                  index,
                  "description",
                  e.target.value
                )
              }
              rows="5"
            ></textarea>
          </div>
          </form>
        //   button to remove the work experience
      ))}
    </>
  );
}
