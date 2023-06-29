import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div>
      <h1>MyProfile</h1>
      {missions.filter((mission) => mission.status).map((mission) => (
        <tr key={mission.id}>
          <td>{mission.name}</td>
        </tr>
      ))}
    </div>
  );
};

export default MyProfile;
