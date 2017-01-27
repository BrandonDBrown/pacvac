class QuoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      squareFoot: null,
      address: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.name === 'address' ? target.value : target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className='quoteForm' onSubmit={this.handleSubmit}>
        <input className='inputBox' name="squareFoot" type="text" value={this.state.value} onChange={this.handleInputChange} placeholder='Square footage of lot'/>
        <input className='inputBox' name="address" type="text" value={this.state.value} onChange={this.handleInputChange} placeholder='Date needed'/>
        <input className='btn-primary btns btn-xl' type="submit" value={this.props.value} />
        <QuoteCalendar />
      </form>
    );
  }
}

class QuoteCalendar extends React.Component {
  render() {
    d = new Date();
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <DateCard />
          <DateCard />
          <DateCard />
          <DateCard />
          <DateCard />
          <DateCard />
          <DateCard />
        </div>
      </div>
    )
  }
}

class DateCard extends React.Component {
  render() {
    return (
      <div className="col-xs-1 text-center date-body">
        <label className="date-title">January {d.getDate()}</label>
        <div className="date-content">
          <p className="quote">$49</p>
          <hr className="nomargin"/>
        </div>
      </div>
    )
  }
}
