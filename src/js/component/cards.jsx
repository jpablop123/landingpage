import React from "react";
import "./cards.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Card({
  titulo,
  imgUrl,
  body,
  titulo3,
  titulo4,
  body2,
  body3,
  body4,
  imgUrl2,
  imgUrl3,
  imgUrl4,
  titulo2,
}) {
  return (
    <>
      <div className="row d-flex justify-content-center ">
        
      <div className="card mx-1" style={{ width: "18rem" }}>
          <img width="100%" height="200px" src={imgUrl} alt="" />
          <div className="card-body">
            <h1 className="card-title"> {titulo3}</h1>
            <p className="card-text"> {body2}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        
        
        
        <div className="card mx-1" style={{ width: "18rem" }}>
          <img width="100%" height="200px" src={imgUrl} alt="" />
          <div className="card-body">
            <h1 className="card-title"> {titulo2}</h1>
            <p className="card-text">{body4}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "18rem" }}>
          <img width="100%" height="200px" src={imgUrl2} alt="" />
          <div className="card-body">
            <h1 className="card-title">{titulo2}</h1>
            <p className="card-text">{body}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "18rem" }}>
          <img width="100%" height="200px" src={imgUrl3} alt="" />
          <div className="card-body">
            <h1 className="card-title">{titulo3}</h1>
            <p className="card-text">{body}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
export default Card;
