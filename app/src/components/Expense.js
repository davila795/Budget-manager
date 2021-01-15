import PropTypes from 'prop-types'

const Expense = ({ expense }) => {
    const { name, quantity } = expense

    return (
        <li className='gastos-realizados'>
            <p>
                {name}<span className='gasto'>${quantity}</span>
            </p>
        </li>
    )
};

Expense.propTypes = {
    expense: PropTypes.object.isRequired
}

export default Expense;