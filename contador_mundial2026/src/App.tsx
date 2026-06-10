import GroupMenu from "./components/NavigationMenu";
import Match from "./components/Match";
import { useState } from "react";
import StandingsTable from "./components/StandigsTable";
import { matches } from "./components/Matches";
import "./styles/index.css";

type MatchScoreField = "team1Goals" | "team2Goals";

function App() {
  const [selectedGroup, setSelectedGroup] = useState("A");
  const [allMatches, setAllMatches] = useState(matches);
  const filteredMatches = allMatches.filter((match) => match.group === selectedGroup);

  function handleScoreChange(matchId: number, field: MatchScoreField, value: string) {
    setAllMatches((prev) =>
      prev.map((match) =>
        match.id === matchId ? { ...match, [field]: value } : match
      )
    );
  }

  return (
     <div className="layout">

      <aside className="sidebar">
        <GroupMenu activeGroup={selectedGroup} onSelectGroup={setSelectedGroup} />
      </aside>

      <main className="content">
       {
        filteredMatches.map((match) => (
        <Match 
          key={match.id}
          team1={match.team1}
          team2={match.team2}
          date={match.date}
          team1Goals={match.team1Goals}
          team2Goals={match.team2Goals}
          onScoreChange={(field, value) => handleScoreChange(match.id, field, value)}
          />
        ))
        } 

      </main>

       <StandingsTable matches={filteredMatches} />

    </div>
  );
}

export default App;
