import React, { useState, useEffect } from 'react';
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'


function App() {

  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showquestion, handleQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [newExpense, setNewExpense] = useState({})
  const [createExpense, setCreateExpense] = useState(false)


  useEffect(() => {
    if (createExpense) {

      setExpenses([...expenses, newExpense])

      const newRest = rest - newExpense.quantity

      setRest(newRest)

      setCreateExpense(false)
    }
  }, [newExpense])

  return (
    <div className='container'>
      <header>
        <h1>Weekly expenses</h1>

        <div className='contenido-principal contenido'>
          {showquestion ?
            <Question
              setBudget={setBudget}
              setRest={setRest}
              handleQuestion={handleQuestion}
            />
            :
            <div className='row'>
              <div className='one-half column'>
                <Form
                  setNewExpense={setNewExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className='one-half column'>
                <List
                  expenses={expenses}
                />

                <BudgetControl
                  budget={budget}
                  rest={rest}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
