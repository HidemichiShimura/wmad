import styled from "styled-components";

const RhymeListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const RhymeList = styled.li`
  font-size: 20px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #252525;
`;

export default function Rhymes({ rhymes }) {
  return (
    <RhymeListContainer>
      {rhymes.map((rhyme, idx) => (
        <RhymeList key={idx}>{rhyme}</RhymeList>
      ))}
    </RhymeListContainer>
  );
}
