import React, { useState, FunctionComponent } from "react";
import { NavbarProps } from "../componentsTypes/componentTypes";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const MobileMenu: FunctionComponent<NavbarProps & { className: string }> = ({
  items,
  className,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="hideOnDesktop">
      <i className="fas fa-bars" onClick={handleClick}></i>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map(({ content, to }) => (
          <MenuItem onClick={handleClose} key={content}>
            <Link to={to}>{content}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MobileMenu;
