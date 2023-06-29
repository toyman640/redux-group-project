import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, toggleMissionStatus } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const handleMission = (missionId, currentStatus) => {
    const newStatus = !currentStatus;
    dispatch(toggleMissionStatus({ missionId, newStatus }));
  };
  return (
    <div>
      <h1>Missions</h1>
      <table>
        <thead>
          <th>Mission</th>
          <th>Discription</th>
          <th>Status</th>
        </thead>
        {missions.map((mission) => (
          <tbody key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>
              {mission.status ? (
                <button type="button">Active Member</button>
              ) : (
                <button type="button">Not a member</button>
              )}
            </td>
            <td>
              {mission.status ? (
                <button type="button" onClick={() => handleMission(mission.id, mission.status)}>leave mission</button>
              ) : (
                <button type="button" onClick={() => handleMission(mission.id, mission.status)}>Join Mission</button>
              )}
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Missions;
