import React, { memo } from 'react';
import { Slider as MuiSlider, Typography } from '@mui/material';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  disabled: boolean;
}

const Slider: React.FC<SliderProps> = memo(({ value, onChange, disabled }) => {
  return (
    <div>
      <Typography gutterBottom>Slider</Typography>
      <MuiSlider
        value={value}
        onChange={(event, newValue) => onChange(newValue as number)}
        min={0}
        max={3600}
        step={15}
        valueLabelDisplay="auto"
        disabled={disabled}
      />
    </div>
  );
});

export default Slider;
