import React from "react";
import { useSelector } from "react-redux";
import "./css/colorInfo.css";

const ColorInfo = () => {
  const hexColor = useSelector(state => state.colorInfo.hexColor);
  const R = useSelector(state => state.colorInfo.R);
  const G = useSelector(state => state.colorInfo.G);
  const B = useSelector(state => state.colorInfo.B);
  const alpha = useSelector(state => state.colorInfo.alpha);

  return (
    <div className="color-info">
      <h5>Hex</h5>
      <input className="hex-info-input" defaultValue={hexColor}/>
      <p className="info-text">R</p>
      <p className="info-text">G</p>
      <p className="info-text">B</p>
      <p className="info-text">a</p>
      <div>
        <input className="info-input" defaultValue={R} readOnly />
        <input className="info-input" defaultValue={G} readOnly />
        <input className="info-input" defaultValue={B} readOnly />
        <input
          className="info-input"
          defaultValue={alpha}
          readOnly
        />
      </div>
    </div>
  );
}

export default ColorInfo;
