import { motion } from "framer-motion";
import React from "react";
import Calendar from "react-calendar";
import "src/App.css";

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
}

const CustomCalendar = (props: ICalendarProps) => {
  const { setDate, date, selectRange, setSelectRange } = props;
  return (
    <div style={{ width: "80vw", display: "grid", placeItems: "center" }}>
      <motion.h1
        initial={{ y: -1000 }}
        animate={{ y: -150 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="text-center"
      >
        Calendar
      </motion.h1>

      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="calendar-container"
      >
        <Calendar onChange={setDate} value={date} selectRange={selectRange} />
      </motion.div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        {date.length > 0 && selectRange ? (
          <p className="text-center">
            {date[0].toDateString()}
            &nbsp;-&nbsp;
            {date[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">{date.toDateString()}</p>
        )}
        <button
          style={{
            color: selectRange ? "#6f48eb" : "#524d4d",
            cursor: "pointer",
            marginTop: "1rem",
            width: "10rem",
            height: "3rem",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "0.5rem",
            boxShadow: "0 12px 14px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => {
            setSelectRange(!selectRange);
            setDate(new Date());
          }}
        >
          Select Range
        </button>
      </motion.div>
    </div>
  );
};

export default CustomCalendar;
