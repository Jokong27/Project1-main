const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <div onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </div>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <div onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </div>
    );
  };
  
  const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          style={{ margin: "0 40px" }}
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </div>
      ))}
    </ScrollMenu>
  );