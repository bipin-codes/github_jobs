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
      <Button
        enabled={currentIndex !== 1}
        isActive={false}
        label="<"
        onClick={onClickPrev}
      ></Button>
      {/* DOT TO LOWER LIMIT */}
      {currentIndex - 1 > limit && (
        <>
          <Button
            enabled={true}
            label={`1`}
            onClick={onClickIndex}
            isActive={false}
          />
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
            enabled={true}
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
            enabled={true}
            label={pages[pages.length - 1].toString()}
            onClick={onClickIndex}
            isActive={false}
          />
        </>
      )}

      <Button
        enabled={currentIndex !== range}
        label=">"
        isActive={false}
        onClick={onClickNext}
      ></Button>
    </Container>
  );
};
export default Paginator;
