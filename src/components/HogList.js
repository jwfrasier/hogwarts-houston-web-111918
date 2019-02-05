import React from "react";
import HogCard from "./HogCard";

class HogList extends React.Component {
  render() {
    console.log("this.props.hogs ", this.props.hogs);
    return (
      <div className="ui eight wide column">
        {this.props.hogs.map(hog => {
          return <HogCard {...hog} key={hog.id} />;
        })}
      </div>
    );
  }
}

export default HogList;
