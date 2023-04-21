import React from "react";
import CardComponent from "./cardcomponent";



export const Home = () => (
<div className="container-fluid p-6 m-6">
  <div className="row gy-5">
    <div className="col-12">
      <div className="p-3 border bg-light"><CardComponent ></CardComponent></div>
    </div>
    <div className="col-12">
      <div className="p-3 border bg-light">Custom column padding</div>
    </div>
    <div className="col-12">
      <div className="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
);

