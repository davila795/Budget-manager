import React, { useState } from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Form = ({ setNewExpense, setCreateExpense }) => {

    const [expense, setExpense] = useState({ name: '', quantity: 0 })
    const [error, handleError] = useState(false)
    const { name, quantity } = expense

    const handleChange = e => {
        setExpense(
            {
                ...expense,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
            handleError(true)
            return
        }

        handleError(false)

        expense.id = shortid.generate()

        setNewExpense(expense)
        setCreateExpense(true)

        setExpense({ name: '', quantity: 0 })


    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Expense</h2>

            {error && <Error message='Invalid value' />}

            <div className='campo'>
                <label>Name</label>
                <input
                    name='name'
                    type='text'
                    className='u-full-width'
                    placeholder='Ex. transport'
                    value={name}
                    onChange={e => handleChange(e)}
                />
            </div>

            <div className='campo'>
                <label>Quantity</label>
                <input
                    name='quantity'
                    type='number'
                    className='u-full-width'
                    placeholder='Ex. 300'
                    value={quantity}
                    onChange={e => handleChange(e)}
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Add expense'
            />
        </form>
    );
}

Form.propTypes = {
    setNewExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}

export default Form;