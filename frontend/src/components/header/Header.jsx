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
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <>
      <div className="header">
        <div className="headerContainer">
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
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

              <span className="headerSearchText">date to date</span>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchText">
                2 adults 0 children 1 room
              </span>
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
