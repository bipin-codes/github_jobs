import React, { useEffect, useState } from "react";
import { Container, IconSpan } from "./Paginator.styles";
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

  const limit = 2;

  useEffect(() => {
    setPages(Array.from(Array(range + 1).keys()).filter((x) => x !== 0));
  }, [range]);
  return (
    <Container>
      <Button isActive={false} label="<" onClick={onClickPrev}></Button>
      {/* DOT TO LOWER LIMIT */}
      {currentIndex - 1 > limit && (
        <>
          <Button label={`1`} onClick={onClickIndex} isActive={false} />
          <IconSpan>more_horiz</IconSpan>
        </>
      )}

      {/* MIDDLE */}
      {pages
        .filter(
          (page) =>
            page === currentIndex || Math.abs(currentIndex - page) <= limit
        )
        .map((value, index) => (
          <Button
            key={index}
            label={`${value}`}
            onClick={onClickIndex}
            isActive={currentIndex === value}
          ></Button>
        ))}

      {/* DOT TO UPPER LIMIT */}
      {range - currentIndex > limit && (
        <>
          <IconSpan>more_horiz</IconSpan>
          <Button
            label={pages[pages.length - 1].toString()}
            onClick={onClickIndex}
            isActive={false}
          />
        </>
      )}

      <Button label=">" isActive={false} onClick={onClickNext}></Button>
    </Container>
  );
};
export default Paginator;
