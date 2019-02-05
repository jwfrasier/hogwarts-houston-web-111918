import React from "react";

class HogCard extends React.Component {
  state = {
    hidePig: false
  };

  hidePig = () => {
    this.setState({
      hidePig: !this.state.hidePig
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.hidePig ? (
          <div className="ui card centered">
            <img src={this.props.image} alt="" />
            <button className="ui button primary" onClick={this.hidePig}>
              Bake Me
            </button>
            <h1 className="header">{this.props.name}</h1>
            <p className="meta">{this.props.specialty}</p>
            <p className="extra content">Weight: {this.props.weight}</p>
          </div>
        ) : (
          <div className="ui card centered">
            <img src={this.props.image} alt="" />
            <button className="ui button primary" onClick={this.hidePig}>
              Reveal My Goodness
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default HogCard;
