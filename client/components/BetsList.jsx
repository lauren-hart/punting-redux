import React from 'react'
import {deleteBet, editBet} from '../actions/bets'
import {connect} from 'react-redux'
import {accounting} from 'accounting'

class BetsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editStatus: false,
      person: '',
      couple: '',
      sport: '',
      bet: '',
      amountBet: '',
      amountWon: '',
      date: '',
      percentage: ''
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.sendBet = this.sendBet.bind(this)
  }

  handleDelete (e) {
    this.props.dispatch(deleteBet(e.target.value))
  }

  handleEdit () {
    this.setState({
      editStatus: !this.state.editStatus
    })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    this.setState({
      submitted: !this.state.submitted
    })
    this.sendBet(e.target.value)
  }

  sendBet (id) {
    this.props.dispatch(editBet(this.state, id))
  }

  render () {
    const amountBet = Number(this.props.list.amountBet).toFixed(2)
    const amountWon = isNaN(this.props.list.amountWon)
      ? Number(0).toFixed(2)
      : Number(this.props.list.amountWon).toFixed(2)
    const percentage = isNaN(((amountWon / amountBet) * 100))
      ? Number(0) : ((amountWon / amountBet) * 100).toFixed(0)
    return (
      <tbody>
        {this.state.editStatus
          ? <tr>
            <td><input placeholder={this.props.list.couple}></input></td>
            <td><input placeholder={this.props.list.person}></input></td>
            <td><input placeholder={this.props.list.bet}></input></td>
            <td><input placeholder={accounting.formatMoney(amountBet)}></input></td>
            <td><input placeholder={accounting.formatMoney(amountWon)}></input></td>
            <td></td>
            <td><input placeholder={this.props.list.date}></input></td>
            <td></td>
            <td><button value={this.props.list.id} onClick={this.handleEdit}>Finish</button></td>
          </tr>
          : <tr>
            <td>{this.props.list.couple}</td>
            <td>{this.props.list.person}</td>
            <td>{this.props.list.bet}</td>
            <td>{accounting.formatMoney(amountBet)}</td>
            <td>{accounting.formatMoney(amountWon)}</td>
            <td style={this.props.percentColour(percentage)}>{percentage}%</td>
            <td>{this.props.list.date}</td>
            <td><button value={this.props.list.id} onClick={this.handleDelete}>x</button></td>
            <td><button value={this.props.list.id} onClick={this.handleEdit}>Edit</button></td>
          </tr>

        }
      </tbody>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(BetsList)
