import { connect } from "react-redux";
import * as actions from "../data/actionTypes";
import Stories from "../components/stories";
import processData from "../data/processData";

const mapStateToProps = (state) => {
  return {
    order: state.order,
    timeScope: state.timeScope,
    page: state.page,
    stories: state.stories,
  };
};

const mapDispatchToProps = {
  refresh: () => {
    return (dispatch) => {
      fetch(`http://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=30`)
        .then((res) => res.json())
        .then((json) => processData(json))
        .then((json) => { 
          dispatch({
            type: actions.REFRESH,
            payload: {
              data: json,
            },
          });
        });
    };
  },

  changePage: (page) => {
    return (dispatch) => {
      fetch(
        `http://hn.algolia.com/api/v1/search?tags=story&page=${page}&hitsPerPage=30`
      )
        .then((res) => res.json())
        .then((json) => processData(json))
        .then((json) => {
          dispatch({
            type: actions.CHANGE_PAGE,
            payload: {
              page,
              data: json,
            },
          });
        });
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
