import * as React from 'react';

import { withApp } from '../../provider';

import Cards from './components/Cards';
import Heading from './components/Heading';
import Nodes from './components/Nodes';
import Staking from './components/Staking';
import Withdrawals from './components/Withdrawals';

import { useDashboard, withDashboard } from './provider';

// TODO: use PageState component from DappUI for handling loading and error state (empty state)
// App level loader
// Component level loader
// Component level error state
// Use ... for numneric unknown stuff

// TODO: useGolbalDate() --> fetch critical data

const Dashboard: React.FC = () => {
  const { adminEnabled } = useDashboard();

  return (
    <div className='container p-0'>
      <div className='mb-4'>
        <Heading />
      </div>

      <div className='mb-4'>
        <Cards />
      </div>

      {!adminEnabled && (
        <div className='mb-4'>
          <Staking />
        </div>
      )}

      {!adminEnabled && (
        <div className='mb-4'>
          <Withdrawals />
        </div>
      )}

      {adminEnabled && (
        <div className='mb-4'>
          <Nodes />
        </div>
      )}
    </div>
  );
};

export default withApp(withDashboard(Dashboard));
