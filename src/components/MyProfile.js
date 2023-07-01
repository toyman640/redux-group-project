import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.rocket.filter((rocket) => rocket.reserved);
  return (
    <div className="profile">
      <div className="mission-joined">
        <h3 className="Missions-label">My Missions</h3>
        {missions.filter((mission) => mission.reserved).map((mission) => (
          <table className="Profile-missions" key={mission.id}>
            <tbody>
              <tr>
                <td>{mission.name}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      <div className="rocket-booked">
        <h2>Reserved Rockets</h2>
        <ul>
          {filteredRockets.map((rocket) => (
            <li key={rocket.id} className="py single-reserve">{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default MyProfile;
