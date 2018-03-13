import React from "react";
import FeatureBlock from "../cross-cutting/FeatureBlock";

// ----------------
// old
// ----------------
// class KittenLovesMeCheckbox extends React.Component {
//   constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       lovesMe: true,
//     };
//   }

//   handleChange() {
//     this.setState(oldState => ({
//       lovesMe: !oldState.lovesMe,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <label htmlFor="kittenLovesMe">Loves me?</label>
//         <input
//           type="checkbox"
//           checked={this.state.lovesMe}
//           onChange={this.handleChange}
//         />
//         <div>{this.state.lovesMe ? 'loves me!' : 'hates me.'}</div>
//       </div>
//     );
//   }
// }
// ----------------

// ----------------
// new
// ----------------
class KittenLovesMeCheckbox extends React.Component {
  state = {
    lovesMe: true,
  };

  handleChange = () => {
    this.setState(oldState => ({
      lovesMe: !oldState.lovesMe,
    }));
  }

  render() {
    return (
      <div>
        <label htmlFor="kittenLovesMe">Loves me?</label>
        <input
          type="checkbox"
          checked={this.state.lovesMe}
          onChange={this.handleChange}
        />
        <div>{this.state.lovesMe ? 'loves me!' : 'hates me.'}</div>
      </div>
    );
  }
}
// ----------------

export default function() {
  return (
    <FeatureBlock title="State - Class Fields">
      <KittenLovesMeCheckbox />
    </FeatureBlock>
  );
}
