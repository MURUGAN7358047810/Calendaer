import { useState } from 'react'
import left_arrow  from './assets/left.svg';
import right_arrow from './assets/right.svg';
import './App.css';

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]; 

function App() {
  const [selectedDate, setSelectedDate] = useState(new  Date());

  const daysInMonth = () => {
    const daysArray = []; 


    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(),1);

    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for(let i=0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }

    for(let i=1; i<= lastDay.getDate(); i++){
      daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i) );
    }

    console.log(firstDay);
    console.log(lastDay);

    return daysArray;


  };

 const handleChangeMonth = (e) => {
  const newMonth = parseInt(e.target.value, 10);
  setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
 };

 const handleChangeYear = (e) => {
  const newYear = parseInt(e.target.value, 10);
  setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
 };
 
  return (
    <>
     <div className="calendar">
     <div className="header">
     <button>
     <img src={left_arrow} alt="" onClick={() => {
      setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth() - 1,1 ));
     }} />
     </button>
     <select name="" id="" value={selectedDate.getMonth()} onChange={handleChangeMonth}>{
      months.map((month, index) => (
        <option key={index} value={index}>{month}</option>
      ))
     }</select>
     <select name="" id="" value={selectedDate.getFullYear()} onChange={handleChangeYear}>{
      Array.from({length:10} ,(_,i)=> selectedDate.getFullYear() -5+i).map((year) => (
        <option key={year} value={year}  > {year}</option>
      ))
     }</select>
     <button>
     <img src={right_arrow} alt="" onClick={() => {
      setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth() + 1,1 ));
     }}  />
     </button>
     </div>
     <div className="daysOfWeek">
     {daysOfWeek.map((day) => (
      <div key={day}>{day}</div>
     ))}</div>
     <div className="days">{
      daysInMonth().map((day, index) => (
        <div key={index} className={day ? "day" : "empty"}>{day ? day.getDate( ) : "" }</div>
          ))
     }</div>
     </div>
    </>
  )
}      

export default App
