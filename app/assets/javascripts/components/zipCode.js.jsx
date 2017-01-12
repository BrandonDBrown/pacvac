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
        <input className='inputBox' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter your zipcode'/>
        <input className='btn-primary btns btn-xl' type="submit" value={this.props.value} />
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
    window.location = "/pages/quote"
  } else {
    alert('sorry we are not in your area yet');
  }
}
