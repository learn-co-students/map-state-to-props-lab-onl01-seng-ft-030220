import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    debugger
    return (
      <div>
        Total Users: {this.props.users.length}
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.map(user => (
            <li>
              {user.username}
              {user.hometown}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
