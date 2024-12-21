import { v4 as uuidv4 } from "uuid";

export default function WorkExperienceStep({
  formData,
  handleArrayChange,
  removeArrayItem,
  addArrayItem,
}) {
  return (
    <>
      <div className="title">
        <h1>Experience</h1>
        <p className="subtitle">Write down your work experience history</p>
      </div>
      {formData.workExperiences.map((workExperience, index) => (
        <div key={workExperience.id}>
          <form className="work-experience-step">
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
              <div className="field we work-location">
                <label htmlFor="workLocation">Location</label>
                <input
                  type="text"
                  name="workLocation"
                  id="workLocation"
                  value={workExperience.workLocation}
                  onChange={(e) =>
                    handleArrayChange(
                      "workExperiences",
                      index,
                      "workLocation",
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
          <button
            className="delete-button"
            onClick={() => removeArrayItem("workExperiences", index)}
          >
            Delete
          </button>
        </div>
      ))}
      <button
        className="add-button"
        onClick={() =>
          addArrayItem("workExperiences", {
            id: uuidv4(),
            jobTitle: "",
            companyName: "",
            workLocation: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
      >
        Add work experience
      </button>
    </>
  );
}
