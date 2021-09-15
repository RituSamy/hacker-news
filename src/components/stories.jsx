import React from "react";
import Story from "./story";
import Pagination from "react-bootstrap/Pagination";

const Stories = (props) => {
  if (props.stories.length === 0) {
    props.refresh();
  }
  return (
    <div style={{ backgroundColor: "#F6F6EF" }}>
      {props.stories.map((story) =>
        story.visible === true ? (
          <Story
            key={props.stories.indexOf(story)}
            title={story.title}
            url={story.url}
            points={story.points}
            author={story.author}
            time={story.date[0]}
            displayTime={story.date[1]}
            num_comments={story.num_comments}
          />
        ) : null
      )}
      <Pagination>
        <Pagination.First
          onClick={() => {
            props.changePage(0);
            window.scrollTo(0, 0);
          }}
        />
        <Pagination.Prev
          onClick={() => {
            props.changePage(props.page > 0 ? props.page - 1 : 0);
            window.scrollTo(0, 0);
          }}
        />
        {[0, 1, 2, 3, 4, 5, 6].map((number) => (
          <Pagination.Item
            key={number}
            onClick={() => {
              props.changePage(number);
              window.scrollTo(0, 0);
            }}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => {
            props.changePage(props.page < 6 ? props.page + 1 : 6);
            window.scrollTo(0, 0);
          }}
        />
        <Pagination.Last
          onClick={() => {
            props.changePage(6);
            window.scrollTo(0, 0);
          }}
        />
      </Pagination>
    </div>
  );
};

export default Stories;
