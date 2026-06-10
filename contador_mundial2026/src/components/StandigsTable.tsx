import { teams } from "../data/teams";
import "../styles/Tables.css";

function StandingsTable() {
    
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
                    <tr> 
                        {/* MEXICO */}
                        <td className="team-cell">
                            <img
                                src={teams.mexico.flag}
                                alt={teams.mexico.name}
                                className="table-flag"
                             />
                                {teams.mexico.name}
                                
                            </td>
                         
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>0</td>
                            <td>7</td>
                            <td>5</td>
                        </tr>
                            {/* SUDAFRICA */}

                        <tr>
                            <td className="team-cell">
                            <img
                                src={teams.sudafrica.flag}
                                alt={teams.sudafrica.name}
                                className="table-flag"
                             />
                                {teams.sudafrica.name}
                                
                            </td>
                            
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>0</td>
                            <td>7</td>
                            <td>5</td>
                        </tr>
                            {/* COREA */}
                        <tr>
                            <td className="team-cell">
                            <img
                                src={teams.corea.flag}
                                alt={teams.corea.name}
                                className="table-flag"
                             />
                                {teams.corea.name}
                                
                            </td>
                            
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>0</td>
                            <td>7</td>
                            <td>5</td>
                        </tr>
                            {/* CHEQUIA */}
                        <tr>
                            <td className="team-cell">
                            <img
                                src={teams.chequia.flag}
                                alt={teams.chequia.name}
                                className="table-flag"
                             />
                                {teams.chequia.name}
                                
                            </td>
                            
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>0</td>
                            <td>7</td>
                            <td>5</td>
                        </tr>
                        
                </tbody>
            </table>
        </div>
    )
}

export default StandingsTable;