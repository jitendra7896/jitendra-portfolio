import React from "react";
import PropTypes from "prop-types";

const ChildComponent = (props) => {
  const { data, className } = props;
  return (
    <div className={`child-component ${className}`}>
      <div className="childComponent">
        {/* Render the content based on the `data` prop */}
        <h3>{data.title}</h3>
      </div>
    </div>
  );
};

// Define prop types for validation
ChildComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

// Set default props
ChildComponent.defaultProps = {
  className: "",
};

export default ChildComponent;
