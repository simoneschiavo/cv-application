import { useState } from "react";

export default function Resume({ formData }) {
  return (
    <>
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
              {formData.workExperiences.map((workExperience) => (
                  <div key={workExperience.id}>
                      <p className="company-name">{workExperience.companyName}</p>
                  </div>
              ))}
          </section>
    </>
  );
}
