import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import firebaseApp from '../../firebase-config';

const auth = getAuth(firebaseApp); // Initialize auth here

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Popular", path: "/movies/popular" },
    { label: "Upcoming", path: "/movies/upcoming" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Signed in:', result.user);
        setUser(result.user);
      }).catch((error) => {
        console.error('Sign in error:', error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
        setUser(null);
      }).catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TMDB Movie App
          </Typography>
          {isMobile ? (
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {menuOptions.map((option) => (
                <MenuItem key={option.label} onClick={() => handleMenuSelect(option.path)}>
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            menuOptions.map((option) => (
              <Button
                key={option.label}
                color="inherit"
                onClick={() => handleMenuSelect(option.path)}
              >
                {option.label}
              </Button>
            ))
          )}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={user ? handleSignOut : handleSignIn}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
