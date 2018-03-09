import React from "react";
import PropTypes from "prop-types";

class Kitten extends React.Component {
  render() {
    const { name, color, lovesMe, isDead } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{color}</h3>
        <h4>{lovesMe ? "loves me" : "hates me"}</h4>
        <h4>{isDead ? "is dead" : "is alive"}</h4>
      </div>
    );
  }

//   static defaultProps = {
//     lovesMe: true,
//     isDead: false,
//   };

//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     lovesMe: PropTypes.bool.isRequired,
//     isDead: PropTypes.bool,
//   };
}

Kitten.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  lovesMe: PropTypes.bool.isRequired,
  isDead: PropTypes.bool,
};

Kitten.defaultProps = {
  lovesMe: true,
  isDead: false,
};

export default function() {
  const turtle = {
    name: "Turtle",
    color: "gray",
    lovesMe: false,
  };
  return (
    <div>
      <h2>Props - Class Fields</h2>
      <h1>Kitten</h1>
      <Kitten {...turtle} />
    </div>
  );
}
