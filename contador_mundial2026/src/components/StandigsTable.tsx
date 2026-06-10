import "../styles/Tables.css";

type Team = {
  name: string;
  flag: string;
};

type MatchType = {
  id: number;
  group: string;
  date: string;
  team1: Team;
  team2: Team;
  team1Goals: string;
  team2Goals: string;
};

type StandingsTableProps = {
  matches: MatchType[];
};

function StandingsTable({ matches }: StandingsTableProps) {
  const statsMap = new Map<string, {
    team: Team;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    gf: number;
    gc: number;
    points: number;
  }>();

  matches.forEach((match) => {
    const team1Name = match.team1.name;
    const team2Name = match.team2.name;
    const hasResult = match.team1Goals !== "" && match.team2Goals !== "";
    const goals1 = Number(match.team1Goals || 0);
    const goals2 = Number(match.team2Goals || 0);

    if (!statsMap.has(team1Name)) {
      statsMap.set(team1Name, {
        team: match.team1,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        gc: 0,
        points: 0,
      });
    }
    if (!statsMap.has(team2Name)) {
      statsMap.set(team2Name, {
        team: match.team2,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        gc: 0,
        points: 0,
      });
    }

    if (!hasResult) {
      return;
    }

    const team1Stats = statsMap.get(team1Name)!;
    const team2Stats = statsMap.get(team2Name)!;

    team1Stats.played += 1;
    team2Stats.played += 1;

    team1Stats.gf += goals1;
    team1Stats.gc += goals2;
    team2Stats.gf += goals2;
    team2Stats.gc += goals1;

    if (goals1 > goals2) {
      team1Stats.wins += 1;
      team1Stats.points += 3;
      team2Stats.losses += 1;
    } else if (goals1 < goals2) {
      team2Stats.wins += 1;
      team2Stats.points += 3;
      team1Stats.losses += 1;
    } else {
      team1Stats.draws += 1;
      team2Stats.draws += 1;
      team1Stats.points += 1;
      team2Stats.points += 1;
    }
  });

  const sortedTeams = Array.from(statsMap.values()).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const diffA = a.gf - a.gc;
    const diffB = b.gf - b.gc;
    return diffB - diffA;
  });

  return (
    <div className="standings-table">
      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((row) => (
            <tr key={row.team.name}>
              <td className="team-cell">
                <img
                  src={row.team.flag}
                  alt={row.team.name}
                  className="table-flag"
                />
                {row.team.name}
              </td>
              <td>{row.played}</td>
              <td>{row.draws}</td>
              <td>{row.losses}</td>
              <td>{row.gf}</td>
              <td>{row.gc}</td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StandingsTable;