import React, { useState } from "react";
import "./Careers.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
/* Import local logos */
import company1 from "../../assets/images/sart.jpg";
import company2 from "../../assets/images/tt.png";
import company3 from "../../assets/images/truck.png";

const jobs = [
  // First 6 jobs (your previous ones)
  {
    logo: company1,
    title: "UI / UX Designer",
    desc: "Create compelling digital experiences aligned with business goals.",
    type: "Full Time",
    exp: "Min. 1 Year",
    level: "Senior Level",
  },
  {
    logo: company2,
    title: "Product Designer",
    desc: "Design scalable and innovative products.",
    type: "Full Time",
    exp: "Min. 2 Years",
    level: "Mid Level",
  },
  {
    logo: company3,
    title: "UI Developer",
    desc: "Develop responsive frontend applications.",
    type: "Full Time",
    exp: "Min. 1 Year",
    level: "Junior Level",
  },
  {
    logo: company1,
    title: "Digital Marketing Executive",
    desc: "Plan and execute SEO and social campaigns.",
    type: "Full Time",
    exp: "Min. 1 Year",
    level: "Mid Level",
  },
  {
    logo: company2,
    title: "DevOps Engineer",
    desc: "Manage CI/CD pipelines and cloud infrastructure.",
    type: "Full Time",
    exp: "Min. 2 Years",
    level: "Senior Level",
  },
  {
    logo: company3,
    title: "Software Tester",
    desc: "Perform manual and automation testing.",
    type: "Full Time",
    exp: "Min. 1 Year",
    level: "Junior Level",
  },

  // NEW PAGE JOBS
  {
    logo: company1,
    title: "Data Entry Operator",
    desc: "Handle data management and documentation accurately.",
    type: "Full Time",
    exp: "Fresher",
    level: "Entry Level",
  },
  {
    logo: company2,
    title: "Flutter Developer",
    desc: "Build cross-platform mobile apps using Flutter.",
    type: "Full Time",
    exp: "1 Year Experience",
    level: "Junior Level",
  },
  {
    logo: company3,
    title: "Business Development Executive",
    desc: "Identify new business opportunities and manage clients.",
    type: "Full Time",
    exp: "Min. 1 Year",
    level: "Mid Level",
  },
  {
    logo: company1,
    title: "Poster Designer",
    desc: "Design posters and creatives for marketing campaigns.",
    type: "Full Time",
    exp: "Fresher / 1 Year",
    level: "Junior Level",
  }
];

function Careers() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <section className="career-section py-5">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Showing {jobs.length} Jobs</h4>
        </div>

        <div className="row g-4">
          {currentJobs.map((job, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="job-card">

                <div className="job-header">
                  <img src={job.logo} alt="logo" />
                </div>

                <h5>{job.title}</h5>
                <p>{job.desc}</p>

                <div className="tags">
                  <span>{job.type}</span>
                  <span>{job.exp}</span>
                  <span>{job.level}</span>
                </div>

                <div className="job-buttons">
                  <button className="apply-btn">Apply Now</button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination Arrows */}
        <div className="pagination-controls mt-5">

  <button
    className="arrow-btn"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    <FaChevronLeft />
  </button>

  <span className="page-text">
    Page {currentPage} of {totalPages}
  </span>

  <button
    className="arrow-btn"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    <FaChevronRight />
  </button>

</div>

      </div>
    </section>
  );
}

export default Careers;