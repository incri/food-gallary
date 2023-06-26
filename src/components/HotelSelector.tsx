import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useHotels from "../hooks/useHotels";

const HotelSelector = () => {
  const { data, error } = useHotels();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Hotels
      </MenuButton>
      <MenuList>
        {data.map((hotel) => (
          <MenuItem key={hotel.id}>{hotel.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HotelSelector;
