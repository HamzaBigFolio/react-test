import React from "react";
import PropTypes from "prop-types";

const Heading = ({
  as: Component = "h1",
  children,
  style,
  variant = "primary",
  fontWeight = 500,
  className,
  ...props
}) => {
  const classes = {
    primary: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    secondary: "text-2xl md:text-3xl",
  };
  return (
    <Component
      className={`${classes[variant]} ${className}`}
      style={{ fontWeight, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
};

Heading.PropTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  fontWeight: PropTypes.number,
  style: PropTypes.object,
  props: PropTypes.object,
  className:PropTypes.string
};

export default Heading;
