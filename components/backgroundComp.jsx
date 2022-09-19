import React from "react";

const backgroundComp = (WrappedComponent) => (props) => {
  return (
    <div style={{ background: "red", padding: "2rem" }}>
      <div
        style={{ background: "white", width: "100%", height: "100%" }}
        className="rounded-3; p-3"
      >
        <WrappedComponent {...props} />
      </div>
    </div>
  );
};

export default backgroundComp;
