import { useState } from "react";
import DateRangeFormatted from "./DateRangeFormatted";

export default function Resume({ formData }) {
  return (
    <div className="paper">
      <section className="about">
        <p className="full-name">
          {formData.firstName} {formData.lastName}
        </p>
        <p className="job-title">{formData.jobTitle}</p>
        <div className="resume-row">
          <p className="email">{formData.email}</p>
          <p className="linkedin-profile">
            {formData.linkedinProfile === ""
              ? formData.linkedinProfile
              : "| " + formData.linkedinProfile}
          </p>
        </div>
        <div className="resume-row">
          <p className="address">{formData.address}</p>
          <p className="phone-number">
            {formData.phoneNumber === ""
              ? formData.phoneNumber
              : "| " + formData.phoneNumber}
          </p>
        </div>
        <p className="bio">{formData.bio}</p>
      </section>
      <section className="work-experience">
        <p className="section-title">Work Experience</p>
        {formData.workExperiences.map((workExperience) => (
          <div key={workExperience.id}>
            <div className="section-row">
              <p className="job-title bold">{workExperience.jobTitle}</p>
              <DateRangeFormatted
                startDate={workExperience.startDate}
                endDate={workExperience.endDate}
              />
            </div>
            <div className="company-and-location">
              <p className="company-name">{workExperience.companyName}</p>
              <p className="work-location">
                {workExperience.workLocation === ""
                  ? workExperience.workLocation
                  : "| " + workExperience.workLocation}
              </p>
            </div>
            <p className="description">{workExperience.description}</p>
          </div>
        ))}
      </section>
      <section className="projects">
        <p className="section-title">Projects</p>
        {formData.projects.map((project) => (
          <div key={project.id}>
            <div className="section-row">
              <p className="project-title bold">{project.title}</p>
              <DateRangeFormatted
                startDate={project.startDate}
                endDate={project.endDate}
              />
            </div>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </section>
      <section className="educations">
        <p className="section-title">Education</p>
        {formData.educations.map((education) => (
          <div key={education.id}>
            <div className="section-row">
              <p className="institution-name bold">
                {education.institutionName}
              </p>
              <DateRangeFormatted
                startDate={education.startDate}
                endDate={education.endDate}
              />
            </div>
            <p className="name">{education.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
