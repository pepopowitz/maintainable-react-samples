import React from "react";
import { connect, Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import FeatureBlock from "../cross-cutting/FeatureBlock";

// actions
const TOGGLE_LOVES_ME = "TOGGLE_LOVES_ME";

function toggleLovesMeActionCreator() {
  return {
    type: TOGGLE_LOVES_ME,
  };
}

// reducer
const initialState = {
  lovesMe: true,
};

function kittenLovesMeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOVES_ME:
      return {
        ...state,
        lovesMe: !state.lovesMe,
      };
    default:
      return state;
  }
}

// presentational
function KittenLovesMeCheckbox({ lovesMe, onChange }) {
  return (
    <div>
      <label htmlFor="kittenLovesMe">Loves me?</label>
      <input type="checkbox" checked={lovesMe} onChange={onChange} />
      <div>{lovesMe ? "loves me!" : "hates me."}</div>
    </div>
  );
}

// container
const mapStateToProps = state => {
  return {
    lovesMe: state.kittenLovesMeReducer.lovesMe,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: () => {
      dispatch(toggleLovesMeActionCreator());
    },
  };
};

const KittenLovesMeCheckboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KittenLovesMeCheckbox);

// connect it all
const reducers = combineReducers({
  kittenLovesMeReducer,
});

const store = createStore(reducers);

export default function() {
  return <Provider store={store}>
    <FeatureBlock title="Redux for component state">
      <KittenLovesMeCheckboxContainer />
    </FeatureBlock>
  </Provider>;
}
