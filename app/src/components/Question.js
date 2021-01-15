import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ setBudget, setRest, handleQuestion }) => {

    const [quantity, setQuantity] = useState(0)
    const [error, handleError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if (quantity < 1 || isNaN(quantity)) { handleError(true); return }

        handleError(false)
        setBudget(quantity)
        setRest(quantity)
        handleQuestion(false)

    }

    return (
        <>
            <h2>Budget: </h2>

            {error && <Error message='Budget not valid' />}

            <form
                onSubmit={handleSubmit}>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Add your budget'
                    onChange={e => setQuantity(parseInt(e.target.value))}
                />

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Set'
                />
            </form>
        </>
    );
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRest: PropTypes.func.isRequired,
    handleQuestion: PropTypes.func.isRequired
}

export default Question