import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex ">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">+0999999999</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="">iPhone@example.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>🌐</span>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  );
};
