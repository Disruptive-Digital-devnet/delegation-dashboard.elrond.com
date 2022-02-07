import * as React from 'react';
import { Fragment } from 'react';

import { getAccountProvider } from '@elrondnetwork/dapp-core';
import { ChainID } from '@elrondnetwork/erdjs';
import transact from 'helpers/transact';
import { useAction } from 'pages/Dashboard/components/Action/provider';
import { useApp } from 'provider';

const ChangeRedelegationCap: React.FC = () => {
  const { redelegationCap } = useApp();
  const { setShow } = useAction();

  const onSubmit = async (): Promise<void> => {
    try {
      const status = redelegationCap === 'ON' ? 'false' : 'true';
      const parameters = {
        signer: getAccountProvider(),
        account: {}
      };

      const payload = {
        args: Buffer.from(status).toString('hex'),
        chainId: new ChainID('T'), // TODO
        type: 'setReDelegateCapActivation',
        value: '0'
      };

      await transact(parameters, payload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <p className='lead mb-spacer'>{redelegationCap}</p>

      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        <button
          type='button'
          onClick={onSubmit}
          className='btn btn-primary mx-2'
        >
          Turn {redelegationCap === 'ON' ? 'OFF' : 'ON'}
        </button>

        <button
          type='button'
          onClick={() => setShow(false)}
          className='btn btn-link mx-2'
        >
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default ChangeRedelegationCap;
