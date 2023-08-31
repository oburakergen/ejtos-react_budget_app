import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ <input type="number" value={budget} onChange={(e) => {
                console.log(e.target.value);
            }}/></span>
        </div>
    );
};
export default Budget;
