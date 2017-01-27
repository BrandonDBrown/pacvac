class Zipcode extends React.Component {
  constructor() {
    super();
    this.state = {value: '', isValid: false, messageValid: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    checkZipCode(this.state.value) ? this.setState({isValid: true}) : this.setState({isValid: false, messageValid: false})
    event.preventDefault();
  }

  render() {
    error = this.state.messageValid ? <ValidatorMessage /> : <ValidatorMessage value='*ZIP Code is invalid or we are not in your area yet.' />
    if(this.state.isValid) {
      return <QuoteForm />
    } else {
      return (
          <form className='zipcode' onSubmit={this.handleSubmit}>
            <input className='inputBox' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter your zipcode'/>
            {error}
            <input className='btn-primary btns btn-xl' type="submit" value={this.props.value} />
          </form>
      );
    }
  }
}


function checkZipCode(zipcode) {
  var currentlyServed = ['1', '2', 'b']
  if(!currentlyServed.includes(zipcode) || arguments[0] == "") {
    return false;
  } else {
    return true
  }
}

class ValidatorMessage extends React.Component {
  render() {
    return (
      <div className='validator-message'>{this.props.value}</div>
    );
  }
}
