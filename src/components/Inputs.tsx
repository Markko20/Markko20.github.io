import React from 'react';
import { TextField } from '@mui/material';

interface InputsProps {
    isActive: boolean;
    valueForMinutes: string | boolean;
    valueForSeconds: string | boolean;
    handleInputChangeForMinutes: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputChangeForSeconds: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = React.memo(
    ({ isActive, handleInputChangeForMinutes, handleInputChangeForSeconds, valueForMinutes, valueForSeconds }) => {
        return (
            <>
                <TextField
                    type='number'
                    label='Minutes'
                    variant='outlined'
                    value={valueForMinutes}
                    onChange={handleInputChangeForMinutes}
                    inputProps={{ min: 0, max: 720 }}
                    disabled={isActive}
                />
                <TextField
                    type='number'
                    label='Seconds'
                    variant='outlined'
                    value={valueForSeconds}
                    onChange={handleInputChangeForSeconds}
                    inputProps={{ min: 0, max: 59 }}
                    disabled={isActive}
                />
            </>
        );
    }
);

export default Inputs;
