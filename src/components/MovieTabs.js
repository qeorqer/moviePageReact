import React from "react";

export const MovieTabs = props => {
  let { sort_by, updSort } = props;
  const getLink = value =>
    `nav-link ${sort_by === `${value}.desc` ? "active" : " "}`;
  const getSort = value => () => updSort(value);
  return (
    <ul
      className="tabs nav nav-pills"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}
    >
      <li className="nav-item">
        <a
          className={getLink("popularity")}
          onClick={getSort("popularity.desc")}
        >
          Popularity desc
        </a>
      </li>
      <li className="nav-item">
        <a className={getLink("revenue")} onClick={getSort("revenue.desc")}>
          Revenue
        </a>
      </li>
      <li className="nav-item">
        <a
          className={getLink("vote_average")}
          onClick={getSort("vote_average.desc")}
        >
          Vote average
        </a>
      </li>
    </ul>
  );
};
