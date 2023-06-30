import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '../App.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const handleMission = (missionId, currentStatus) => {
    if (currentStatus) {
      dispatch(leaveMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };
  return (
    <div>
      <table className="Mission-table">
        <thead>
          <tr className="Table-head">
            <th className="Mission-title">Mission</th>
            <th className="Desc-title">Discription</th>
            <th className="Desc-title">Status</th>
            <th className="Desc-title-2"> </th>
          </tr>
        </thead>
        {missions.map((mission, index) => (
          <tbody key={mission.id}>
            <tr className={index % 2 === 1 ? 'Even-row' : 'Odd-row'}>
              <td className="Mission-name">{mission.name}</td>
              <td className="Description">{mission.description}</td>
              <td className="Status">
                <button type="button" className={mission.reserved ? 'Active-member' : 'Not-member'}>
                  {mission.reserved ? 'Active Member' : 'Not a Member'}
                </button>
              </td>
              <td className="Status-2">
                <button type="button" onClick={() => handleMission(mission.id, mission.reserved)} className={mission.reserved ? 'Leave-mission' : 'Join-mission'}>
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Missions;
