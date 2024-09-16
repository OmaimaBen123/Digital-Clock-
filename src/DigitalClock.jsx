import { useState ,useEffect } from "react";



function DigitalClock() {

    const [time, setTime] = useState(new Date());
    useEffect(
        () => {
            const intervalId = setInterval(() => {
                setTime(new Date())
            }, 1000);
            return()=>{clearInterval(intervalId)}
            
        },[]
    );
    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }
    function padZero() {
        
    }
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{ formatTime}</span>
            </div>

        </div>
 )   
}
export default DigitalClock;