import GroupMenu from "./components/NavigationMenu";
import Match from "./components/Match";
import { teams } from "./data/teams";
import StandingsTable from "./components/StandigsTable";
import "./styles/index.css";

function App() {
  return (
     <div className="layout">

      <aside className="sidebar">
        <GroupMenu />
      </aside>

      <main className="content">
        <Match
          team1={teams.mexico}
          team2={teams.sudafrica}
          date="11/06/2026"
        />
        
        <Match
         team1={teams.corea}
         team2={teams.chequia}
         date="11/06/2026"
        />

        <Match
         team1={teams.chequia}
         team2={teams.sudafrica}
         date="18/06/2026"
        />

        <Match
         team1={teams.mexico}
         team2={teams.corea}
         date="18/06/2026"
        />

        <Match
         team1={teams.sudafrica}
         team2={teams.corea}
         date="24/06/2026"
        />

        <Match
         team1={teams.chequia}
         team2={teams.mexico}
         date="24/06/2026"
        />



      </main>

       <StandingsTable />

    </div>
  );
}

export default App;
