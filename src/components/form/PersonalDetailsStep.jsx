export default function PersonalDetailsStep({ formData, handleChange }) {
  return (
    <>
      <div className="title">
          <h1>Let's start from the top</h1>
          <p className="subtitle">How do you want employers to contact you?</p>
      </div>
      <form className="personal-details-step">
        <div className="row">
          <div className="field first-name">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="field last-name">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field job-title">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <div className="field email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field phone-number">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="field address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="field linkedin-profile">
            <label htmlFor="linkedinProfile">Linkedin Profile URL</label>
            <input
              type="url"
              name="linkedinProfile"
              id="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}
