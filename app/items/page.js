import React from "react";
import Navbar from "../components/Navbar";

function Items() {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200 w-full flex p-4 gap-6 items-center justify-center overflow-scroll">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="card w-96 bg-base-100 shadow-xl  hover:scale-105 transition-all">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
