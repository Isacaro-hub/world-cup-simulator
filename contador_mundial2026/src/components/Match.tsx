import "../styles/Match.css";

type Team = {
  name: string;
  flag: string;
};

type ScoreField = "team1Goals" | "team2Goals";

type MatchProps = {
  team1: Team;
  team2: Team;
  date: string;
  team1Goals: string;
  team2Goals: string;
  onScoreChange: (field: ScoreField, value: string) => void;
};

function Match({ team1, team2, date, team1Goals, team2Goals, onScoreChange }: MatchProps) {
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
                        value={team1Goals}
                        onChange={(e) => onScoreChange("team1Goals", e.target.value)}
                    />

                    <input
                        className="score-input"
                        type="number"
                        value={team2Goals}
                        onChange={(e) => onScoreChange("team2Goals", e.target.value)}
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