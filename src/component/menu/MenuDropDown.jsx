import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function MenuDropDown() {
  return (
    <>
      <Menu p={0}>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          size={{ base: "sm", md: "md" }}
          backgroundColor="transparent"
          sx={{ ":hover": { backgroundColor: "transparent", color: "black" } }}
        >
          All
        </MenuButton>
        <MenuList>
          <MenuItem
            sx={{ ":hover": { backgroundColor: "#3BB67D", color: "black" } }}
          >
            All
          </MenuItem>

          <MenuItem
            sx={{ ":hover": { backgroundColor: "#3BB67D", color: "black" } }}
          >
            Radiotherapy
          </MenuItem>
          <MenuItem
            sx={{ ":hover": { backgroundColor: "#3BB67D", color: "black" } }}
          >
            Instrumental/Instrumental Accessories
          </MenuItem>
          <MenuItem
            sx={{ ":hover": { backgroundColor: "#3BB67D", color: "black" } }}
          >
            Organic Supportive Therapies
          </MenuItem>
          <MenuItem
            sx={{ ":hover": { backgroundColor: "#3BB67D", color: "black" } }}
          >
            Chemotherapy
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default MenuDropDown;
