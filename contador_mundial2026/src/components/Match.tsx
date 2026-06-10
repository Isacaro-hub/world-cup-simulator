import "../styles/Match.css";

type Team = {
  name: string;
  flag: string;
};

type MatchProps = {
  team1: Team;
  team2: Team;
  date: string;
};

function Match({team1, team2, date}: MatchProps) {
    return (
         <>
      <div className="match-wrapper">

      <div className="date-container">
        <span className="match-date">{date}</span>
      </div>

        <div className="match-container">
                <div className="team-info">
                    <img
                        className="team-flag"
                        src={team1.flag}
                        alt={team1.name} />

                    <span className="team-name">
                        {team1.name}
                    </span>

                </div>

                <div className="score-container">
                    <input
                        className="score-input"
                        type="number" 
                    />

                    <input
                        className="score-input"
                        type="number" 
                        
                    />
                    </div>

                <div className="team-info">
                    <span
                        className="team-name">
                        {team2.name}
                    </span>

                    <img
                        className="team-flag"
                        src={team2.flag}
                        alt={team2.name} />
                </div>
            </div>
        </div>
    </>
)
}

export default Match;