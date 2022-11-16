import React, { useEffect, useState } from "react";
import { Container, IconSpan } from "./Paginator.styles";
import Button from "../common/Button";

const Paginator: React.FC<{
  range: number;
  currentIndex: number;
  onPageSelect: (pageNumber: number) => void;
}> = ({ range, currentIndex, onPageSelect }) => {
  const [pages, setPages] = useState([0]);
  const limit = 1;

  const onClickPrev = () => onPageSelect(currentIndex - 1);
  const onClickNext = () => onPageSelect(currentIndex + 1);
  const onClickIndex = (index: number) => onPageSelect(index);

  useEffect(() => {
    setPages(Array.from(Array(range + 1).keys()).filter((x) => x !== 0));
  }, [range]);

  return (
    <Container>
      <Button
        type="paginator"
        enabled={currentIndex !== 1}
        isActive={false}
        label="<"
        onClick={onClickPrev}
      ></Button>
      {/* DOT TO LOWER LIMIT */}
      {currentIndex - 1 > limit && (
        <>
          <Button
            type="paginator"
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
            type="paginator"
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
            type="paginator"
            enabled={true}
            label={pages[pages.length - 1].toString()}
            onClick={onClickIndex}
            isActive={false}
          />
        </>
      )}

      <Button
        type="paginator"
        enabled={currentIndex !== range}
        label=">"
        isActive={false}
        onClick={onClickNext}
      ></Button>
    </Container>
  );
};
export default Paginator;
