import "../styles/Match.css";

type Team = {
  name: string;
  flag: string;
};

type MatchProps = {
  team1: Team;
  team2: Team;
};

function Match({team1, team2}: MatchProps) {
    return (
        <div className="match-container">
        <img 
            className="team-flag"
            src={team1.flag} 
            alt={team1.name} />
            
        <span className="team-name">
            {team1.name}
        </span>

        <input 
            className="score-input"
            type="number"
        />
            
        <input 
            className="score-input"
            type="number"
        />

        <span 
            className="team-name">
            {team2.name}
        </span>

        <img
            className="team-flag"
            src={team2.flag}
            alt={team2.name}
        />
        </div>
    )
}

export default Match;