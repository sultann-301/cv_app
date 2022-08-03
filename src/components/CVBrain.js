import { useState } from "react";
import CvDisplay from "./CvDisplay";

const CVBrain = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [school, setSchool] = useState();
  const [titleOfStudy, setTitle] = useState();
  const [date, setDate] = useState();
  const [company, setCompany] = useState();
  const [job, setJob] = useState();
  const [duration, setDuration] = useState();

  const handleChange = (e) => {
    const givenText = e.target.value;
    const currentInput = e.target.placeholder;
    switch (currentInput) {
      case "name":
        setName(givenText);
        break;
      case "email":
        setEmail(givenText);
        break;
      case "phone":
        setPhone(givenText);
        break;
      case "School Name":
        setSchool(givenText);
        break;
      case "Title Of Study":
        setTitle(givenText);
        break;
      case "Date Of Study":
        setDate(givenText);
        break;

      case "Job Position":
        setJob(givenText);
        break;
      case "Duration":
        setDuration(givenText);
        break;

      case "Company Name":
        setCompany(givenText);
        break;
    }
  };
  return (
    <div data-app>
      <form data-form>
        <h2>General Info</h2>
        {/* adding general information*/}
        <section>
          <span className="material-symbols-rounded">face</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="name"
            onChange={handleChange}
          />
        </section>
        <section>
          <span className="material-symbols-rounded">contact_mail</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="email"
            onChange={handleChange}
          />
        </section>
        <section>
          <span className="material-symbols-rounded">call</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="phone"
            onChange={handleChange}
          />
        </section>
        {/* adding education information */}
        <h2 className="education-header">Education</h2>
        <section>
          <span className="material-symbols-outlined" id="cap">
            school
          </span>

          <input
            type="text"
            name=""
            id="edu"
            placeholder="School Name"
            onChange={handleChange}
          />
        </section>
        <section>
          <input
            type="text"
            name=""
            id="edu"
            placeholder="Title Of Study"
            onChange={handleChange}
          />
        </section>
        <section>
          <input
            type="text"
            name=""
            id="edu"
            placeholder="Date Of Study"
            onChange={handleChange}
          />
        </section>
        <h2>Experience</h2>
        <section>
          <span className="material-symbols-outlined" id="cap">
            work
          </span>

          <input
            type="text"
            name=""
            id="edu"
            placeholder="Company Name"
            onChange={handleChange}
          />
        </section>
        <section>
          <input
            type="text"
            name=""
            id="edu"
            placeholder="Job Position"
            onChange={handleChange}
          />
        </section>
        <section>
          <input
            type="text"
            name=""
            id="edu"
            placeholder="Duration"
            onChange={handleChange}
          />
        </section>
      </form>

      <div data-display>
        <CvDisplay
          GivenName={name}
          GivenEmail={email}
          GivenPhone={phone}
          GivenSchool={school}
          GivenTitle={titleOfStudy}
          GivenDateOfStudy={date}
          GivenJob={job}
          GivenCompany={company}
          GivenDuration={duration}
        ></CvDisplay>
      </div>
    </div>
  );
};

export default CVBrain;
