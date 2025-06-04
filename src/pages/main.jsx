import React, { useState } from "react";
import "./main.css";

const Main = () => {
  const [avatar1, setAvatar1] = useState(null);
  const [avatar2, setAvatar2] = useState(null);

  const handleImageChange = (event, setAvatar) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setAvatar(imageURL);
    }
  };

  return (
    <div className="main-container">
      <div className="avatars-container">
        <label className="avatar">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setAvatar1)}
          />
          <img
            src={avatar1 || "/avatar1.svg"}
            alt="Пользователь 1"
            draggable={false}
          />
        </label>

        <div className="heartbeat-line">
          <div className="flat-line" />
        </div>

        <label className="avatar">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setAvatar2)}
          />
          <img
            src={avatar2 || "/avatar2.svg"}
            alt="Пользователь 2"
            draggable={false}
          />
        </label>
      </div>
    </div>
  );
};

export default Main;
