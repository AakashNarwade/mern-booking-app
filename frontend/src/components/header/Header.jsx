import { useState } from "react";
import "./header.css";
import {
  faBed,
  faCab,
  faCalendar,
  faCalendarDays,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 0,
    children: 0,
    rooms: 0,
  });

  const handleOption = (name, operation) => {
    setOption((prevOption) => {
      console.log(prevOption);
      return {
        ...prevOption,
        [name]: operation === "increment" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  return (
    <>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              {" "}
              <h1 className="headerTitle">Hop on to find your next stay...</h1>
              <p className="headerDescription">Wait no more</p>
              <button className="headerBtn">Sign in/ Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you resting?"
                    className="headerSearchInput"
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />

                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOption(!openOption)}
                    className="headerSearchText"
                  >
                    {`${option.adult} adult . ${option.children} children . ${option.rooms} rooms`}
                  </span>
                  {openOption && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={option.adult <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "decrement")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {option.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "increment")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={option.children <= 0}
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("children", "decrement")
                            }
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {option.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("children", "increment")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionCounter">
                          <button
                            disabled={option.rooms <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("rooms", "decrement")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {option.rooms}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("rooms", "increment")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn">Search</button>
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
