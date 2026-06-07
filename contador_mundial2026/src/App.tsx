import GroupMenu from "./components/NavigationMenu";
import Match from "./components/Match";
import { teams } from "./data/teams";
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
        />
        
        <Match
         team1={teams.corea}
         team2={teams.chequia}
        />



      </main>

       

    </div>
  );
}

export default App;
