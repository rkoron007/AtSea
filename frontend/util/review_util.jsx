
export const fetchReviews = (itemId) => (
  $.ajax({
    method: "GET",
    url: `api/items/${itemId}/reviews`,
  })
);

export const createReview = (review, itemId) => (
  $.ajax({
    method: "POST",
    url: `api/items/${itemId}/reviews`,
    data: {review}
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`,
  })
);
