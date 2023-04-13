import { useState } from "react";

import styled from "styled-components";
import axios from "axios";

import { Rhymes } from "./index";

const ContentWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid white;
  border-radius: 5px;
`;

const RhymesContainer = styled.div`
  width: 350px;
  border: 1px solid white;
  padding: 20px;
`;

export default function Content() {
  const [word, setWord] = useState("");
  const [rhymes, setRhymes] = useState([]);

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = () => {
    const options = {
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        const RhymeList = data.rhymes.all.slice(0, 10);

        setRhymes(RhymeList);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <ContentWrapper>
      <h1>Rhyme It</h1>
      <h2>Word: {word}</h2>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Go</button>
      <RhymesContainer>
        <Rhymes rhymes={rhymes} />
      </RhymesContainer>
    </ContentWrapper>
  );
}
