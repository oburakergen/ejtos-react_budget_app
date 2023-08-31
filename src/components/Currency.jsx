import styled from "styled-components";

const Select = styled.select`
    width: 100%;
    height: 100%;
    padding: 1rem 1.5rem;
    border: none;
    outline: none;
    background: lightgreen;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    option {
        background: lightgreen;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
      
      &:hover {
        background: #fff;
        color: #000;
      }
    }
`;

export const Currency = () => {
    return (
        <div>
            <Select className="form-select form-select-md" name="selectCurrency" defaultValue="dl">
                <option value="dl">$ Dollar</option>
                <option value="po">£ Pound</option>
                <option value="eu">€ Euro</option>
                <option value="rpp">₹ Ruppee</option>
            </Select>
        </div>
    )
}
