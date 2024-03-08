import React from 'react';
import './App.css';

const teamData = require('./CollegeBasketballTeams.json');
console.log(teamData);

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h1>Welcome to the NCAA Basketball Team Database!</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam: TeamProps = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamData.teams.map((singleTeam: TeamProps) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
