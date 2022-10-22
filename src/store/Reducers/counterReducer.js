const INITIALSTATE = {
  counter: 0,
};

const counterReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        counter: ++state.counter,
      };
    case "SUB_COUNTER":
      return {
        counter: --state.counter,
      };
    default:
      return { ...state };
  }
};

export default counterReducer;
