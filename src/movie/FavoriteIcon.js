import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavoriteIcon = ({ isFavorited, toggleFavorite }) => {
  return (
    <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
      <FontAwesomeIcon
        icon={faHeart}
        style={{ color: isFavorited ? "red" : "grey" }}
      />
    </div>
  );
};

export default FavoriteIcon;
