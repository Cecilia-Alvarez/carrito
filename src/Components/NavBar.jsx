import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          className="links"
          to="/category/1"
          style={{ textDecoration: "none" }}
        >
          Pantalones
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          className="links"
          to="/category/2"
          style={{ textDecoration: "none" }}
        >
          Vestidos
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          className="links"
          to="/category/3"
          style={{ textDecoration: "none" }}
        >
          Tops
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          className="links"
          to="/category/4"
          style={{ textDecoration: "none" }}
        >
          Polleras
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          className="links"
          to="/category/5"
          style={{ textDecoration: "none" }}
        >
          Shorts
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          onClick={handleMenuClose}
          className="links"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Todo
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <CartWidget />
      </MenuItem>
      <MenuItem onClick={handleMenuOpen}>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          Categorías
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Link className="links" to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="secondary"
              sx={{
                display: { xs: "none", sm: "block" },
                textDecoration: "none",
              }}
            >
              Tienda de Moda
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <CartWidget />
            <IconButton
              size="small"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              Categorías
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
