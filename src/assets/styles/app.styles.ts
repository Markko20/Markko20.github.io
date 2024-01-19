import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 500;
    text-align: center;
`;

export const TimerContainer = styled.div`
    text-align: center;
    font-size: 40px;
`;

export const ButtonsContainer = styled.div`
    text-align: center;
    margin-top: 25px;
`;

export const Button = styled.button`
    && {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: 2px solid #000;
        border-radius: 5px;
        background-color: transparent;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        margin-right: 15px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.2); /* Затемнение при наведении */
            border-color: #3498db;
        }

        &:active {
            border-color: #2980b9;
            background-color: #2980b9;
            color: #fff;
        }
    }
`;