const usePressEnter = (callBackFunction) => {
  return (e) => {
    if (e.key === "Enter") {
      callBackFunction();
    }
  };
};

export default usePressEnter;
