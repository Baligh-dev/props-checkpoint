import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  return (
    <div style={{ maxWidth: "1000px" }}>
      <h1 style={{ color: "crimson" }}>{props.profile.fullName}</h1>
      <h2>{props.profile.bio}</h2>
      <h3>{props.profile.profession}</h3>
      <img src={props.profile.image} />
      {props.children}
      <button onClick={() => props.handleData(props.profile.fullName)}>
        Alert
      </button>
    </div>
  );
};
Profile.defaultProps = {
  profile: {
    fullName: "no name",
    bio: "blablabla",
    profession: "nothing",
  },
};
Profile.propTypes = {
  profile: PropTypes.object,
};
export default Profile;
