import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavbarMobile() {
  const [state, setState] = React.useState({
    top: false,
  });

  const [itemsVisible, setItemsVisible] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Trigger the visibility of list items one by one
  useEffect(() => {
    if (itemsVisible) {
      const interval = setInterval(() => {
        setCurrentItemIndex((prevIndex) => prevIndex + 1);
      }, 200); // adjust the timing for your desired effect
      return () => clearInterval(interval);
    } else {
      setCurrentItemIndex(0);
    }
  }, [itemsVisible]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setItemsVisible(open);
  };

  const list = (anchor) => (
    <Box
      sx={{
        background: "white",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
           <img
                  className="light-mode"
                  alt="Anytime car rental"
                  src="/logo.avif"
                  height={"50px"}
                />
          </div>
          <div>
            <Button onClick={toggleDrawer(anchor, false)}>
              <CloseIcon sx={{ fontSize: "28px" }} />
            </Button>
          </div>
        </div>

        {[
          { text: "Home", link: "/" },
          { text: "About Us", link: "/About" },
          { text: "Services", link: "/Services" },
          { text: "Contact Us", link: "/ContactPage" },
        ].map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem
              sx={{
                opacity: currentItemIndex >= index ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              <Link
                to={item.link}
                className="navbar-title"
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "100%", 
                }}
              >
                {item.text}
              </Link>
            </ListItem>
            <Divider
              sx={{
                backgroundColor: "grey",
                marginBottom: "5px",
                marginTop: "15px",
              }}
            />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            sx={{ outline: "none", border: "none" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon sx={{ fontSize: "40px", color: "#2174b6" }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            transitionDuration={500}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
