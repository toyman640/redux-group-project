import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux';
import Missions from '../components/Missions';

jest.mock('react-redux');

describe('A test for Missions component', () => {
  it('renders correctly', () => {
    const missions = [
      {
        id: 1, name: 'Mission 1', description: 'Description 1', reserved: true,
      },
      {
        id: 2, name: 'Mission 2', description: 'Description 2', reserved: false,
      },
    ];

    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: { missions },
    }));

    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const tree = renderer.create(<Missions />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders mission table with correct data', () => {
    const missions = [
      {
        id: 1, name: 'Mission 1', description: 'Description 1', reserved: true,
      },
      {
        id: 2, name: 'Mission 2', description: 'Description 2', reserved: false,
      },
    ];

    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: { missions },
    }));

    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(<Missions />);

    missions.forEach((mission) => {
      expect(getByText(mission.name)).toBeInTheDocument();
      expect(getByText(mission.description)).toBeInTheDocument();

      const statusButton = getByText(mission.reserved ? 'Active Member' : 'Not a Member');
      expect(statusButton).toBeInTheDocument();
      expect(statusButton).toHaveClass(mission.reserved ? 'Active-member' : 'Not-member');

      const actionButton = getByText(mission.reserved ? 'Leave Mission' : 'Join Mission');
      expect(actionButton).toBeInTheDocument();
      expect(actionButton).toHaveClass(mission.reserved ? 'Leave-mission' : 'Join-mission');
    });
  });
});
