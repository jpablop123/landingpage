import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumboxtron = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">A Warm Welcome</h1>
          Below are a series of poorly constructed paragraphs and possible solutions. Put yourself in the place of a teacher. Criticise the structure of each paragraph and suggest how it might be improved. Be very critical about how the paragraph is constructed and how well the ideas flow.
          <p className="col-md-8 fs-4"> 
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to Action
          </button>
        </div>
      </div>
    </>
  );
};
export default Jumboxtron;  
