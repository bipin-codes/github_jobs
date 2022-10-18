import React, { useEffect, useState } from "react";
import { Container } from "./Paginator.styles";
import Button from "../common/Button/Button";

const Paginator: React.FC<{
  range: number;
  currentIndex: number;
  onPageSelect: (pageNumber: number) => void;
}> = ({ range, currentIndex, onPageSelect }) => {
  const onClickPrev = () => onPageSelect(currentIndex - 1);
  const onClickNext = () => onPageSelect(currentIndex + 1);
  const onClickIndex = (index: number) => onPageSelect(index);

  const [pages, setPages] = useState([0]);
  useEffect(() => {
    setPages(Array.from(Array(range).keys()).filter((x) => x !== 0));
  }, [range]);

  return (
    <Container>
      <Button isActive={false} label="<" onClick={onClickPrev}></Button>
      {pages.map((value, index) => (
        <Button
          key={index}
          label={`${value}`}
          onClick={onClickIndex}
          isActive={currentIndex === index + 1}
        ></Button>
      ))}
      <Button label=">" isActive={false} onClick={onClickNext}></Button>
    </Container>
  );
};
export default Paginator;
