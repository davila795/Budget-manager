import React, { useState } from 'react';

const BudgetControl = ({ budget, rest }) => {
    return (
        <>
            <div className='alert alert-primary'>
                Budget: ${budget}
            </div>

            <div className='alert'>
                Rest: ${rest}
            </div>
        </>
    );
}

export default BudgetControl;