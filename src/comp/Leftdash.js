import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Leftdash = () => {
  return (
    <div >
      <div className="accordion" id="acco">
        <div className="row w-100">
          <h2 className="col-9">Dahsborad</h2>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Students
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                {" "}
                <Link to="/student">Add Student</Link>
              </strong>
              <br />
              <strong>
                {" "}
                <Link to="/studentdetails"> Student Details</Link>
              </strong>
              <br />
              <strong>
                {" "}
                <Link to="/Allstudents">All Students</Link>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Teacher
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                <Link to="/addteacher">Add Teacher</Link>
              </strong>{" "}
              <br />
              <strong>
                <Link to="/teacherdetails"> Teacher Details</Link>
              </strong>
              <br />
              <strong>
                <Link to="/allteachers">All Teacher</Link>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Parents
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                <Link to="/addteacher">Add Teacher</Link>
              </strong>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
