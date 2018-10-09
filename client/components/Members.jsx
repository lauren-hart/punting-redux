import React from 'react'
import {connect} from 'react-redux'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {getMembers} from '../actions/members'

class Members extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getMembers())
  }

  render () {
    const test = this.props.members && this.props.members.map(item => {
      if (item.couple === 'Bielby/Hart') {
        return item.person[0]
      }
    })

    return (
      <div>
        <div className="bg-grass"></div>
        <h1 className="header">Members</h1>
        <div className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/bets"><button>Bets</button></Link>
          <Link to="/members"><button>Members</button></Link>
        </div>
        <table className="table members">
          <thead>
            <tr>
              <th>Bielby/Hart</th>
            </tr>
          </thead>
          <tbody>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Bielby/Hart') {
                return <td key={item.id}>{item.person}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Bielby/Hart') {
                return <td key={item.id}>{item.email}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Bielby/Hart') {
                // return <td key={item.id}><img src={item.imagecouple} /></td>
                return <td key={item.id}>{item.imagecouple}</td>
              }
            })}</tr>
          </tbody>
        </table>
        <table className="table members">
          <thead>
            <tr>
              <th>Scaglia/Scaglia</th>
            </tr>
          </thead>
          <tbody>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Scaglia/Scaglia') {
                return <td key={item.id}>{item.person}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Scaglia/Scaglia') {
                return <td key={item.id}>{item.email}</td>
              }
            })}</tr>
          </tbody>
        </table>
        <table className="table members">
          <thead>
            <tr>
              <th>Burningham/Sim</th>
            </tr>
          </thead>
          <tbody>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Burningham/Sim') {
                return <td>{item.person}</td>
              }
            })}</tr>
            <tr>{this.props.members && this.props.members.map(item => {
              if (item.couple === 'Burningham/Sim') {
                return <td key={item.id}>{item.email}</td>
              }
            })}</tr>
          </tbody>
        </table>

        <Footer />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets,
    members: state.members.members
  }
}

export default connect(mapStateToProps)(Members)