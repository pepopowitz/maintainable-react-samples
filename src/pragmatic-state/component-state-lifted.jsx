class KittenForm extends React.Component {
  state = {
    lovesMe: true,
    name: "",
  };

  handleLovesMeChange = () => {
    this.setState(oldState => ({
      lovesMe: !oldState.lovesMe,
    }));
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  render() {
    return (
      <form>
        <KittenLovesMeCheckbox lovesMe={this.state.lovesMe}
          onChange={this.handleLovesMeChange} />
        <KittenNameInput name={this.state.name}
          onChange={this.handleNameChange} />
        <KittenFormButton kitten={...this.state} />
      </form>
    );
  }
}
