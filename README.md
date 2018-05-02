# AtSea - the etsy clone for all your nautical needs.


### Overview!

AtSea is a single page Etsy clone built with a React/Redux frontend and Ruby on Rails backend. User's can log in and create, edit, update, and delete all kinds of nautical items. There is a categories bar and search bar for easy item sorting and lookup.

![intro](https://media.giphy.com/media/TIdSI8dOShTmJe9RdW/giphy.gif)


## Fun and Interesting Problems!
One of the most simple looking- yet hard to build things was my review form. I wanted the stars to look and behave in a very way and I didn't want to end up writing out some big ugly block of text to do so. Eventally I cam up with the followng code which allowed stars to not only have a rating value but a hover value targeted on mouse events.


```javascript
ratingStars(){
    let starArr = [];

    for (let i = 1; i < 6; i++) {
      let id, maxRating;
      maxRating = this.state.hover ? this.state.hoverV: this.state.rating;
      if (i <= maxRating) id ="full";

      starArr.push(
        <i
          key={i}
          className="fa fa-star"
          id={id}
          onMouseEnter={this.handleHover(i)}
          onMouseLeave={this.handleHoverLeave}
          aria-hidden="true"
          onClick={this.updateRating(i)}>
        </i>);
    }

    return starArr;
  }

```

![intro](https://media.giphy.com/media/EBnEQk00mgpNCA5bs8/giphy.gif)

## Technologies
  * React/Redux
  * Rails
  * Cloudinary for image hosting
  * SASS for all styling


## MVP List

* Users can create, read, update and destroy item listings
* Users Create and Delete Reviews
* Users have a persistent Cart where they can add and remove items
* Search Bar for item title and description

## Future Plans

I had SO much fun making this site and it's so easy to think of more and more features to add. Specifically my next steps will be:
* Creating a fake "checkout system" and keeping track of a user's order history
* Adding false shipping information based on a user's location
* Have a 'Sales' section where a user can alter their item with a tag for it to be 'on sale'
