export default function BioStep({ formData, handleChange }) {
    return (
      <>
        <div className="title">
          <h1>Professional summary</h1>
          <p className="subtitle">Introduce yourself to your next employers</p>
            </div>
            <form className="bio-step">
                <div className="field bio">
                    <label htmlFor="bio">How would you like to be known to employers?</label>
                    <textarea name="bio" id="bio" value={formData.bio} onChange={handleChange} rows="5"></textarea>
                </div>
        </form >
      </>
    );
}