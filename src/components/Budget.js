import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,currency, dispatch, totalExpenses } = useContext(AppContext);
    const changeBudget = (e) => {
        console.log(e.target.value, e.target);
        let newBudget =  parseInt(e.target.value) || 2000;
        if (newBudget < totalExpenses) {
            alert("Budget cannot be less than total expenses");
            newBudget = budget;
        }

        if (newBudget > 20000) {
            alert("Budget cannot be more than 20000");
            newBudget = budget;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" value={budget} onChange={changeBudget} step={10} min={totalExpenses} max={20000} />
            </span>
        </div>
    );
};
export default Budget;
