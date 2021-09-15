import * as actions from "../data/actionTypes";
import { connect } from "react-redux";
import NavBar from "../components/navbar";
import processData from "../data/processData";

const mapStateToProps = (state) => {
  return {
    order: state.order,
    timeScope: state.timeScope,
    stories: state.stories,
  };
};

const mapDispatchToProps = {
  sort: (order) => ({
    type: actions.SORT,
    payload: {
      order,
    },
  }),
  filter: (timeScope) => ({
    type: actions.FILTER,
    payload: {
      timeScope,
    },
  }),
  search: (query) => {
    return (dispatch) => {
      fetch(`http://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=30`)
        .then((res) => res.json())
        .then((json) => processData(json))
        .then((json) => {
          console.log("data:", json);
          dispatch({
            type: actions.SEARCH,
            payload: {
              query,
              data: json,
            },
          });
        });
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
