const CvDisplay = ({
  GivenName,
  GivenEmail,
  GivenPhone,
  GivenSchool,
  GivenTitle,
  GivenDate,
  GivenJob,
  GivenCompany,
  GivenDuration,
}) => {
  return (
    <div className="cv-container">
      <div className="general-info">
        <h2 className="name-holder">{GivenName ? GivenName : "Your Name"}</h2>
        <h4>
          <b>/ </b>
          {GivenEmail ? GivenEmail : "Your Email"}
        </h4>
        <h4>
          <b>/ </b>
          {GivenPhone ? GivenPhone : "Your Phone Number"}
        </h4>
      </div>
      <div className="education">
        <h4>/ {GivenSchool ? GivenSchool : " Your School Name"}</h4>
        <h4>/ {GivenTitle ? GivenTitle : "Acquired Title"}</h4>
        <h4>/ {GivenDate ? GivenDate : "Date Of Study"}</h4>
      </div>

      <div className="experience">
        <h4>/ {GivenCompany ? GivenCompany : " Your Company Name"}</h4>
        <h4>/ {GivenJob ? GivenJob : "Position"}</h4>
        <h4>/ {GivenDuration ? GivenDuration : "Duration"}</h4>
      </div>
    </div>
  );
};

export default CvDisplay;
