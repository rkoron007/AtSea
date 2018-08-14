import React from "react";
export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: `api/items/${review.item_id}/reviews`,
    data: {review}
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`,
  })
);

export const parseTime = (rdate) => {
  let date = new Date(rdate);
  let day = date.getDate();
  let year = date.getFullYear();
  let monthNum = date.getMonth();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let monthStr = months[monthNum];
  let fulldate = "";
  fulldate += monthStr + " " + day +", " + year;

  return fulldate;
};


export const starCreator = (num) => {
    let starArr = [];

    for (let i = 1; i < 6; i++) {

      if(i <= num ) {
      starArr.push(<i key={i+num}
        className="fa fa-star"
        id="full"
        aria-hidden="true">
      </i>);
    } else {
      starArr.push(
      <i key={i + num}
        className="fa fa-star-o"
        id="empty"
        aria-hidden="true">
      </i>);
      }
    }
    return starArr;
};
