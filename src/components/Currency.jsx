import styled from "styled-components";
import {useContext} from "react";
import {AppContext} from "../context/AppContext";

const Select = styled.select`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    background: lightgreen;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
  option{
    &:hover{
        background-color: lightgreen;
    }
  }
`;

export const Currency = () => {
    const { currency,dispatch } = useContext(AppContext);

    return (
        <div>
            <Select className="form-select" name="selectCurrency" value={currency} onChange={(e) => dispatch({
                type:"CHG_CURRENCY",
                payload:e.target?.value || "$"
            })}>
               <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </Select>
        </div>
    )
}
