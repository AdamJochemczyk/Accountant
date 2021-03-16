import styled from 'styled-components';

const CustomButton=styled.button`
    cursor: pointer;
    background-color:transparent;
    border: 2px solid black;
    border-radius: 3px;
    font-weight: 800;
    padding: 5px 10px;
    color: white;
    transition: background-color .3s ease-in-out;
    margin-right: 1rem;
    &:hover{
        background-color: black;
    }
`
export default CustomButton;