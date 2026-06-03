import Match from "./components/Match";
import { teams } from "./data/teams";

function App() {
  return (
    <Match
      team1={teams.mexico}
      team2={teams.sudafrica}
    />
  );
}

export default App;
