import { useState, useEffect, memo } from 'react';
import { Title, TimerContainer, Button, ButtonsContainer } from '../assets/styles/app.styles';

const MemoizedTitle = memo(Title);
const MemoizedButtonsContainer = memo(ButtonsContainer);

const Timer: React.FC = () => {
    const [milliseconds, setMilliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const timer = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds}`;

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;

        if (isActive) {
            intervalId = setInterval(() => {
                setMilliseconds(prevMilliseconds => {
                    const newMilliseconds = prevMilliseconds + 1;

                    if (newMilliseconds === 10) {
                        setSeconds(prevSeconds => {
                            const newSeconds = prevSeconds + 1;

                            if (newSeconds === 60) {
                                setMinutes(prevMinutes => prevMinutes + 1);
                                return 0;
                            }

                            return newSeconds;
                        });

                        return 0;
                    }

                    return newMilliseconds;
                });
            }, 100);
        }

        return () => {
            clearInterval(intervalId);
        };

    }, [isActive]);


    const handleStartOrStopClick = () => {
        setIsActive(isActive => !isActive);
    };

    const handleResetClick = () => {
        setIsActive(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
    };

    return (
        <div style={{ marginBottom: '100px' }}>
            <MemoizedTitle>Timer</MemoizedTitle>
            <TimerContainer>{timer}</TimerContainer>
            <MemoizedButtonsContainer>
                <Button onClick={handleStartOrStopClick}>{isActive ? 'Стоп' : 'Старт'}</Button>
                <Button onClick={handleResetClick}>Сбросить</Button>
            </MemoizedButtonsContainer>
        </div>
    );
};

export default Timer;
