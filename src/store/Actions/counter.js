const AddCounter = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_COUNTER",
    //   payload,
    });
  };
};
const SubCounter = () => {
    return (dispatch) => {
      dispatch({
        type: "SUB_COUNTER",
        // payload,
      });
    };
  };
  export {AddCounter,SubCounter};