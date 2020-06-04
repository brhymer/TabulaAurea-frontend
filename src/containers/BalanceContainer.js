import React from 'react';
import Assets from '../components/Assets';
import Liabilities from '../components/Liabilities';

const BalanceContainer = () => {
    return (
        <div>
            <h1>Assets & Liabilities Balance Sheet</h1>
            <Assets />
            <Liabilities />
        </div>
    );
}

export default BalanceContainer;
