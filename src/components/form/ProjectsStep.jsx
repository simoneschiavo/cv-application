import { v4 as uuidv4 } from "uuid";
import { CircleX } from "lucide-react";

export default function ProjectsStep({
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
        <h1>Projects</h1>
        <p className="subtitle">Think about particular projects to highlight</p>
      </div>
      {formData.projects.map((project, index) => (
        <div className="form-wrapper" key={project.id}>
          <form className="project-step">
            <div className="field pj title">
              <label htmlFor="title">Project Name</label>
              <input
                type="text"
                name="title"
                id="title"
                value={project.title}
                onChange={(e) =>
                  handleArrayChange("projects", index, "title", e.target.value)
                }
              />
            </div>
            <div className="row">
              <div className="field pj startDate">
                <label htmlFor="startDate">From</label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={project.startDate}
                  onChange={(e) =>
                    handleArrayChange(
                      "projects",
                      index,
                      "startDate",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="field pj endDate">
                <label htmlFor="endDate">To</label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={project.endDate}
                  onChange={(e) =>
                    handleArrayChange(
                      "projects",
                      index,
                      "endDate",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
            <div className="field pj description">
              <label htmlFor="description">Achievements</label>
              <textarea
                name="description"
                id="description"
                value={project.description}
                onChange={(e) =>
                  handleArrayChange(
                    "projects",
                    index,
                    "description",
                    e.target.value
                  )
                }
                rows={5}
              ></textarea>
            </div>
          </form>
          <CircleX
            size={24}
            className="delete-button"
            onClick={() => removeArrayItem("workExperiences", index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        </div>
      ))}
      <button
        className="add-button"
        onClick={() =>
          addArrayItem("projects", {
            id: uuidv4(),
            title: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
      >
        Add project
      </button>
    </>
  );
}
