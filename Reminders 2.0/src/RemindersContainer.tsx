import React, { useState } from "react";
import Reminder from "../src/Reminder";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RemindersContainer"

function RemindersBox () {
  const [reminderArray, setReminderArray] = useState([
    {
      title: "First reminder",
      schedule: "25/12/2022  @  12:00",
      completed: false,
    },
  ]);
  const [reminderTitle, setReminderTitle] = useState("");
  const [rDate, setRDate] = useState(new Date());
  const [reminderDate, setReminderDate] = useState(
    `${new Date().getDate()}/${new Date().getMonth() +
      1}/${new Date().getFullYear()} @ ${new Date().getHours()}:${new Date().getMinutes()}`
  );
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  let remindersList = reminderArray.map((val, key) => {
    return (
      <Reminder
        key={key}
        keyVal={key}
        val={val}
        deleteReminder={() => deleteReminder(key)}
      />
    );
  });

  const showDateTimePicker = () => {
    setIsDatePickerVisible(true);
  };
  const hideDateTimePicker = () => {
    setIsDatePickerVisible(false);
  };

  const addReminder = () => {
    if (reminderTitle) {
      setReminderArray([
        ...reminderArray,
        {
          title: reminderTitle,
          schedule: reminderDate,
          completed: false,
        },
      ]);
      setReminderTitle("");
    }
  };

  const handleConfirm = (date: Date) => {
    setRDate(date);
    setReminderDate(
      `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}`
    );
    hideDateTimePicker();
  };

  const deleteReminder = (key: number) => {
    reminderArray.splice(key, 1);
    setReminderArray([...reminderArray]);
  };
    return (
      <div className="container">
        {remindersList}

        <div className="footer">
          <button
            onClick={addReminder}
            className="newReminderButton"
          >
            <p className="plusButton">+</p>
          </button>
          <div className="reminderBar">
            <input
              className="reminderText"
              onChange={(e) => setReminderTitle(e.target.value)}
              value={reminderTitle}
              placeholder="Add Reminder"
            ></input>
            <div className="datePicker">
              <p className="textInput">{reminderDate}</p>
              <button
                onClick={showDateTimePicker}
                title="Set Date"
              />
              {isDatePickerVisible && (
                // <DateTimePicker
                //   date={this.state.rDate}
                //   mode="datetime"
                //   onChange={this.handleConfirm.bind(this.state)}
                //   onClose={this.hideDateTimePicker.bind(this)}
                // />
                <DatePicker
                  selected={rDate}
                  onChange={(date: Date) => handleConfirm(date)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default RemindersBox;
