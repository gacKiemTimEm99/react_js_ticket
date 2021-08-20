import React from "react";
import ShownComing from "./shownComing";
import { Link } from "react-router-dom";
import "../../style/shown.scss";
export default function Shown() {
  return (
    <div className="showntime">
      <div className="row">
        <div className="col-12 text-center">
          <Link to="/">
            <button
              style={{ padding: "10px 40px" }}
              className="btn mr-2 mb-3 ticket"
            >
              <span>SHOWN ĐANG BÁN</span>
            </button>
          </Link>
        </div>
      </div>
      <ShownComing />
    </div>
  );
}
