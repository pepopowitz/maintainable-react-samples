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