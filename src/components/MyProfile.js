import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  return (
    <div>
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
  );
};

export default MyProfile;
