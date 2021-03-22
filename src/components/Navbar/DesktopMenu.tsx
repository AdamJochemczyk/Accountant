import React, { FunctionComponent } from "react";
import { Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../Button";
import { NavbarProps } from "../componentsTypes/componentTypes";

const DesktopMenu: FunctionComponent<NavbarProps & { className: string }> = ({
  items,
  className,
}) => {
  return (
    <>
      <h1 style={{ fontSize: "16px" }} className={className}>
        Accountant System
      </h1>
      <Toolbar>
        {items.map(({ content, to }) => (
          <Link key={to} to={to} className={className}>
            <Button right={1} primary>{content}</Button>
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

export default DesktopMenu;
