import React, { useState, useEffect } from 'react';

function Timer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = new Date(targetDate) - new Date();
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Nettoyage pour éviter les fuites de mémoire
    }, [targetDate]);

    return (
        <div>
            <div className='time'>
                <span> {timeLeft.days} J:</span>
                <span> {timeLeft.hours} H:</span>
                <span> {timeLeft.minutes} M:</span>
                <span> {timeLeft.seconds} S !</span>
            </div>
        </div>
    );
}

export default Timer;
