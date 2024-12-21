import { v4 as uuidv4 } from "uuid";
import { CircleX } from "lucide-react";

export default function EducationStep({
  formData,
  handleArrayChange,
  removeArrayItem,
  addArrayItem,
}) {
  const handleMouseEnter = (index) => {
    document.querySelectorAll(".form-wrapper")[index].classList.add("hovered");
  };

  const handleMouseLeave = (index) => {
    document.querySelectorAll(".form-wrapper")[index].classList.remove("hovered");
  };

  return (
    <>
      <div className="title">
        <h1>Education</h1>
        <p className="subtitle">
          List your academic accomplishments, courses, and certifications
        </p>
      </div>
      {formData.educations.map((education, index) => (
        <div className="form-wrapper" key={education.id}>
          <form className="education-step">
            <div className="field ed institution-name">
              <label htmlFor="institutionName">Institution name</label>
              <input
                type="text"
                name="institutionName"
                id="institutionName"
                value={education.institutionName}
                onChange={(e) =>
                  handleArrayChange(
                    "educations",
                    index,
                    "institutionName",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="row">
              <div className="field ed startDate">
                <label htmlFor="startDate">From</label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={education.startDate}
                  onChange={(e) =>
                    handleArrayChange(
                      "educations",
                      index,
                      "startDate",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="field ed endDate">
                <label htmlFor="endDate">To</label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={education.endDate}
                  onChange={(e) =>
                    handleArrayChange(
                      "educations",
                      index,
                      "endDate",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
            <div className="field ed name">
              <label htmlFor="name">Course name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={education.name}
                onChange={(e) =>
                  handleArrayChange("educations", index, "name", e.target.value)
                }
              />
            </div>
          </form>
          <CircleX
            size={24}
            className="delete-button"
            onClick={() => removeArrayItem("educations", index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        </div>
      ))}
      <button
        className="add-button"
        onClick={() =>
          addArrayItem("educations", {
            id: uuidv4(),
            institutionName: "",
            startDate: "",
            endDate: "",
            name: "",
          })
        }
      >
        Add education
      </button>
    </>
  );
}
