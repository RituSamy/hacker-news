import * as actions from "./actionTypes";

export default function reducer(
  state = {
    order: "Popularity",
    timeScope: "All time",
    searchQuery: "",
    page: 0,
    stories: [],
  },
  action
) {
  let stories = [];
  switch (action.type) {
    case actions.REFRESH:
      return { ...state, stories: action.payload.data };
    case actions.SORT:
      stories = sort(state.stories, action.payload.order);
      return { ...state, order: action.payload.order, stories };
    case actions.FILTER:
      stories = filter(state.stories, action.payload.timeScope);
      return { ...state, timeScope: action.payload.timeScope, stories };
    case actions.SEARCH:
      stories = sort(action.payload.data, state.order);
      stories = filter(action.payload.data, state.timeScope);
      return {
        ...state,
        searchQuery: action.payload.query,
        stories,
      };
    case actions.CHANGE_PAGE:
      stories = sort(action.payload.data, state.order);
      stories = filter(action.payload.data, state.timeScope);
      return {
        ...state,
        page: action.payload.page,
        stories,
      };
    default:
      return state;
  }
}

function sort(arr, order) {
  if (order === "Popularity") {
    return arr.sort((a, b) =>
      a.points !== b.points ? b.points - a.points : b.comments - a.comments
    );
  } else if (order === "Date") {
    return arr.sort((a, b) => a.date[0] - b.date[0]);
  }
}

function filter(arr, timeScope) {
  if (timeScope === "All time") {
    return arr.map((story) => ({ ...story, visible: true }));
  } else if (timeScope === "Last 24 h") {
    return arr.map((story) => ({
      ...story,
      visible:
        story.date[1].indexOf("day") !== -1 ||
        story.date[1].indexOf("week") !== -1 ||
        story.date[1].indexOf("month") !== -1 ||
        story.date[1].indexOf("year") !== -1
          ? false
          : true,
    }));
  } else if (timeScope === "Past Week") {
    return arr.map((story) => ({
      ...story,
      visible:
        story.date[1].indexOf("week") !== -1 ||
        story.date[1].indexOf("month") !== -1 ||
        story.date[1].indexOf("year") !== -1
          ? false
          : true,
    }));
  } else if (timeScope === "Past Month") {
    return arr.map((story) => ({
      ...story,
      visible:
        story.date[1].indexOf("month") !== -1 ||
        story.date[1].indexOf("year") !== -1
          ? false
          : true,
    }));
  } else if (timeScope === "Past Year") {
    return arr.map((story) => ({
      ...story,
      visible: story.date[1].indexOf("year") !== -1 ? false : true,
    }));
  }
}
