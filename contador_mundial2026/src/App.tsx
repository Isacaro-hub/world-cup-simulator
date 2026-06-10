import GroupMenu from "./components/NavigationMenu";
import Match from "./components/Match";
import { useState } from "react";
import StandingsTable from "./components/StandigsTable";
import { matches } from "./components/Matches";
import "./styles/index.css";

function App() {
  const [allMatches] = useState(matches);
    return (
     <div className="layout">

      <aside className="sidebar">
        <GroupMenu />
      </aside>

      <main className="content">
       {
        allMatches.map(match => (
        <Match 
          key={match.id}
          team1={match.team1}
          team2={match.team2}
          date={match.date}
          />
        ))
        } 

      </main>

       <StandingsTable />

    </div>
  );
}

export default App;
