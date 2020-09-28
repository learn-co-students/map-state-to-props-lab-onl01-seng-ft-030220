import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {
  render() {
    return (
      <div>
        <p>Total Users: {this.props.userCount}</p>
        <ul>
          Users!
          {this.props.users.map(user => (
            <li key={user.username}>Username: {user.username}, Hometown: {user.hometown}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)