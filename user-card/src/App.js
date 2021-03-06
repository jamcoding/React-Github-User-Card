import React from 'react';

import UserCard from './components/UserCard'

class App extends React.Component {
  state = {
    githubUsers: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/jamcoding/followers')
      .then(response => response.json())
      .then(github => this.setState({ githubUsers: github }))
      // .then(github => console.log('response', github))
      .catch(error => console.log("error", error))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <input type="text" placeholder="Search for followers" />
        </nav>
        <div className="container">
          {this.state.githubUsers.map(users => {
            return <UserCard key={users.id} users={users} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
