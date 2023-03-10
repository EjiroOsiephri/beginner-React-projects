import "../components/meme.scss";
import datameme from "./data";
import React, { useState } from "react";

const Meme = () => {
  const meme = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  };

  const [memeImage, setMemeImage] = useState(meme);

  const [allMemeImage, setAllMemeImage] = useState(datameme);

  const [formData, setFormData] = useState({
    firstText: "",
    lastText: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const newMeme = allMemeImage.data.memes;
  const newValue = newMeme.map((meme) => {
    <h1>{meme.id}</h1>;
    return {
      id: meme.id,
      name: meme.name,
      url: meme.url,
    };
  });
  const randomIndex = Math.floor(Math.random() * newValue.length);

  const randomNewValue = newValue[randomIndex].url;

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
    setMemeImage((prev) => {
      return {
        ...prev,
        randomImage: randomNewValue,
      };
    });
  }

  return (
    <div>
      <div className="form1">
        <form onSubmit={submitHandler}>
          <div className="form-components">
            <input
              onChange={handleChange}
              type="text"
              name="firstText"
              placeholder="Shut up"
              value={formData.firstText}
            />

            <input
              type="text"
              name="lastText"
              value={formData.lastText}
              onChange={handleChange}
              placeholder="and Take my money"
            />
          </div>
          <button className="btn">Create a new meme img</button>

          <div className="img-container meme">
            <img src={memeImage.randomImage} className="meme" alt="" />
            <h2 className="meme--text top">{formData.firstText}</h2>
            <h2 className="meme--text bottom">{formData.lastText}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Meme;
