import "./featuredProperty.css";
import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/api/hotels?featured=true&limit=4"
  );
  // console.log("data=> ", data);
  return (
    <div className="fp">
      {loading ? (
        "loading..."
      ) : (
        <>
          {data &&
            data.map((item, i) => (
              <div className="fpItem" key={item._id}>
                {console.log(item.photos[0])}
                <img src={item.photos[0]} alt="" className="fpImg" />
                <span className="fpName">{item?.name}</span>
                <span className="fpCity">{item?.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
