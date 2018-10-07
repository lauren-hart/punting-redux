import React from 'react'
import {connect} from 'react-redux'

export class Addbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      couple: '',
      sport: '',
      bet: '',
      amountBet: '',
      amountWon: '',
      percentage: '',
      submitted: false
    }
  }
  render () {
    return (
      <div>
        <h1>Add Bet</h1>
        <input className="form-control" name="person" input={this.state.person} placeholder="Person" onChange={this.handleChange}></input>
        <input className="form-control" name="couple" input={this.state.couple} placeholder="Couple" onChange={this.handleChange}></input>
        <input className="form-control" name="sport" input={this.state.sport} placeholder="Sport" onChange={this.handleChange}></input>
        <input className="form-control" name="bet" input={this.state.bet} placeholder="Bet" onChange={this.handleChange}></input>
        <input className="form-control" name="amountBet" input={this.state.amountBet} placeholder="Amount Bet" onChange={this.handleChange}></input>
        <input className="form-control" name="amountWon" input={this.state.amountWon} placeholder="Amount Won" onChange={this.handleChange}></input>
        <input className="form-control" name="percentage" input={this.state.percentage} placeholder="Percentage" onChange={this.handleChange}></input>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Addbet)
