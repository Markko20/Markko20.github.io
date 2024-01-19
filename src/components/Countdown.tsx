import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';
import Slider from './Slider';
import { TimerBorder, TimerContent, TimerNumber, TimerContainer } from '../assets/styles/countdown.style';
import { Title } from '../assets/styles/app.styles';
import Inputs from './Inputs';

const Countdown: React.FC = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const totalSeconds = seconds + minutes * 60;

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;

        if (isActive) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 0) {
                        if (minutes === 0) {
                            clearInterval(intervalId);
                            setIsActive(false);
                            return 0;
                        }
                        setMinutes(prevMinutes => Math.max(0, prevMinutes - 1));
                        return 59;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isActive, minutes]);

    useEffect(() => {
        setSliderValue(totalSeconds);
    }, [totalSeconds]);

    const handleSliderChange = (value: number) => {
        setSliderValue(value);
        const minutes = Math.floor(value / 60);
        setMinutes(minutes);
        setSeconds(value - minutes * 60);
    };

    const handleInputChangeForMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value) && value >= 0 && value <= 720) {
            setMinutes(value);
        }
    };

    const handleInputChangeForSeconds = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value) && value >= 0 && value <= 59) {
            setSeconds(value);
        }
    };

    const startOrPause = () => {
        setIsActive(prev => !prev);
    };

    const reset = () => {
        setIsActive(false);
        setMinutes(0);
        setSeconds(0);
        setSliderValue(0);
    };

    return (
        <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
            <Title>Countdown</Title>
            <div>
                <Inputs
                    valueForMinutes={!isActive && (minutes ? String(minutes) : '')}
                    valueForSeconds={!isActive && (seconds ? String(seconds) : '')}
                    handleInputChangeForMinutes={handleInputChangeForMinutes}
                    handleInputChangeForSeconds={handleInputChangeForSeconds}
                    isActive={isActive}
                />
                <Slider value={sliderValue} onChange={handleSliderChange} disabled={isActive} />
                <TimerContainer>
                    {isActive && <TimerBorder />}
                    <TimerContent>
                        <TimerNumber>{`${minutes < 10 ? `0${minutes}` : minutes} : ${
                            seconds < 10 ? `0${seconds}` : seconds
                        }`}</TimerNumber>
                    </TimerContent>
                </TimerContainer>
            </div>

            <div style={{ marginTop: '50px' }}>
                <Button variant='contained' onClick={startOrPause}>
                    {isActive ? <PauseIcon /> : <PlayArrowIcon />}
                </Button>
                <Button variant='contained' onClick={reset}>
                    <ReplayIcon />
                </Button>
            </div>
        </div>
    );
};

export default Countdown;
