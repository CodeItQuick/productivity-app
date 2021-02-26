import React, { useState } from 'react';
import Nav from './Nav';
import myImg from '../styles/assets/d3-javascript-graphing-library.jpg';
import CalendarHeatmap from 'react-calendar-heatmap';

function Habit1(props) {
    let currDate = new Date();
    let oneYearAgo = new Date().setFullYear(currDate.getFullYear() - 1);
    const [date, updateDate] = useState('');
    const [count, updateCount] = useState(0);
    const [heatMapArea, updateHeatMapArea] = useState([
                        { date: '2021-01-01', count: 12 },
                        { date: '2021-02-11', count: 122 },
                        { date: '2021-02-14', count: 38 }, // ...and so on
                    ]);


    const onUpdateDateHandler = (event) => {
        console.log(event.target.value);
        updateDate(event.target.value);
    }

    const onUpdateCounterHandler = (event) => {
        console.log(event.target.value);
        updateCount(event.target.value);
    }
    const onAddHabits = (event) => {
        console.log(event.target.value);
        updateHeatMapArea([...heatMapArea, {date: date, count}]);
    }
    const onSubtractHabits = (event) => {
        console.log(event.target.value);
        //This one seems difficult
    }
    const habits = props.habitList;
    console.log(oneYearAgo.toString());
    return (
        <div className="Home">
            <Nav />
            <h1>Habit page 1</h1>
            <p>My goals are to practice japanese every day because I want to become fluent in the next 5 years.</p>
            <div>
                <CalendarHeatmap
                    startDate={oneYearAgo} // TODO: Get date dynamically to be 1yr less than today's date
                    endDate={currDate}
                    values={heatMapArea}
                />
            </div>
            Add Date in format 'YYYY-MM-DD'. Should be switched to react calendar<br/>
            <input type="text" onChange={onUpdateDateHandler}></input>
            <input type="text" onChange={onUpdateCounterHandler}></input>
            <input type="button" onClick={onAddHabits} Value="Add Habits" />
            <input type="button" onClick={onSubtractHabits} Value="Subtract Habits" />
            {/* <img src={myImg} alt="sample data" /> */}
        </div>
    );
}

export default Habit1;