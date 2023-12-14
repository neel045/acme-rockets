import { useState } from "react";

function CalenderComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log({ currentDate });

  const generateCalender = () => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const lastDateOfMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let dayCount = 1;
    const calenderTable = [];
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if ((i == 0 && j < firstDayOfMonth) || dayCount > lastDateOfMonth) {
          week.push(null);
        } else {
          week.push(dayCount);
          dayCount++;
        }
      }
      calenderTable.push(week);
    }
    return calenderTable;
  };

  const ta = generateCalender();

  return (
    <div className=" col-2">
      <div className=" d-flex justify-content-between align-items-center my-2">
        <p className="m-0">
          <span className="">
            {currentDate.toLocaleDateString("en-US", { month: "long" })}
          </span>
          ,<span>{currentDate.getFullYear()}</span>
        </p>
        <div className=" d-flex gap-2">
          <button
            className=" btn btn-sm btn-light"
            onClick={() => {
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() - 1,
                  currentDate.getDate()
                )
              );
            }}
          >{`<`}</button>
          <button
            className=" btn btn-sm btn-light"
            onClick={() => {
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  currentDate.getDate()
                )
              );
            }}
          >{`>`}</button>
        </div>
      </div>
      <table className="table table-bordered ">
        <thead>
          <tr className=" text-center center align-middle">
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          {ta.map((week, index) => {
            return week.some((d) => d) ? (
              <tr
                className=" text-center center align-middle"
                key={`week-${index + 1}`}
              >
                {week.map((day) => {
                  return day !== null ? (
                    <td
                      key={`day-${day}`}
                      className=" calender-td"
                      data-date={`${currentDate.getFullYear()}-${
                        currentDate.getMonth() + 1
                      }-${day.toString().padStart(2, "0")}`}
                      onClick={(e) => {
                        console.log(e.target);
                        const date = e.target.getAttribute("data-date");
                        console.log({ date });
                      }}
                    >
                      {day}
                    </td>
                  ) : (
                    <td></td>
                  );
                })}
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CalenderComponent;
