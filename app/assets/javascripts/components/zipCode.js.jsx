class Zipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    checkZipCode(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter your zipcode'/>
        <input type="submit" value={this.props.value} />
      </form>
    );
  }
}


function checkZipCode(zipcode) {
  if(arguments[0] == "") {
    return alert('you must enter a valid zipcode');
  }

  var currentlyServed = ['1', '2', 'b']
  if(currentlyServed.includes(zipcode)) {
    return (<Zipcode value='bitches' />);
  } else {
    alert('sorry we are not in your area yet');
  }
}
