import React, { Component } from "react";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl:
            "https://ae01.alicdn.com/kf/HTB1RQ8NLXXXXXXAapXXq6xXFXXXx/2016-2017-Latest-Hot-Selling-USA-justin-bieber-fear-of-god-hoodies-pullovers-hiphop-Fashion-Casual.jpg",
          id: 2,
          linkUrl: ""
        },
        {
          title: "shoes",
          imageUrl:
            "https://ae01.alicdn.com/kf/HTB1aCEGBcyYBuNkSnfoq6AWgVXaZ/UBFEN-Hot-selling-fashion-Casual-Shoes-For-Men-comfortable-shoes-autumn-winter-warm-black-yellow-casual.jpg",
          id: 3,
          linkUrl: ""
        },
        {
          title: "womens",
          imageUrl:
            "https://i.pinimg.com/originals/60/e8/f3/60e8f3f3774269eee6b90fb40033fae3.jpg",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "mens",
          imageUrl:
            "https://i.pinimg.com/736x/bd/f8/12/bdf81227c8c13191aa249fa39384d144.jpg",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
