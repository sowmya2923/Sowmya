import React from "react";
import { useNavigate } from "react-router-dom";
import Memory1 from "./assets/Memory1.jpg";
import Memory2 from "./assets/Memory2.jpeg";
import Memory3 from "./assets/Memory3.jpeg"; // make sure you have this image

const Memories = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Beautiful Journey 💖</h1>

      <div className="row justify-content-center">

        {/* Card 1 */}
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <div className="card shadow" style={{ width: "22rem" }}>
            <img
              src={Memory1}
              className="card-img-top"
              alt="Memory 2025"
            />
            <div className="card-body text-centerd-flex flex-column justify-content-between">
              <h5 className="card-title">2025 💖</h5>
              <p className="card-text">
               <b>The moment that was unforgettable..</b>
              </p>
              
              <span className="big-emoji ">😘</span>
              <p><b>Soulmates for Lifetime✨</b> </p>

            </div>
          </div>
        </div>

       {/* Card 2 */}
<div className="col-md-4 mb-4 d-flex justify-content-center">
  <div className="card shadow h-100" style={{ width: "22rem" }}>
    <img
      src={Memory2}
      className="card-img-top h-250"
      alt="Memory 2023"
    />
    <div className="card-body text-center">
      <h5 className="card-title">2023 💖</h5>
      <p className="card-text">
      <b> Celebration of Birthdays together.</b>
      </p>
      <span className="big-emoji ">🫂</span>

      <p><b>Those are not only pictures ,its our special moments.</b></p>
      <p>💋</p>
    </div>
  </div>
</div>


        {/* Card 3 */}
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <div className="card shadow h-100" style={{ width: "22rem" }}>
            <img
              src={Memory3}
              className="card-img-top"
              alt="Memory 2024"
            />
            <div className="card-body text-centerd-flex flex-column justify-content-between">
              <h5 className="card-title">2024 ✨</h5>
              <p className="card-text">
               <b> Every memory with you became my favorite one.</b>
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-danger px-4"
          onClick={() => navigate("/songslide")}
        >
          Memories in My Heart 💌
        </button>
      </div>
    </div>
  );
};

export default Memories;
