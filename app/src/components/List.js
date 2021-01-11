import React, { useState } from 'react';
import Expense from './Expense'

const List = ({ expenses }) => (
    <div className='gastos-realizados'>
        <h2>List of expenses</h2>
        {expenses.map(expense => (
            <Expense
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
);


export default List;