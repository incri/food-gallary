import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useHotels from "../hooks/useHotels";
import { Hotel } from "../hooks/useFoods";

interface Props {
  onSelectHotel: (hotel: Hotel) => void;
  selectedHotel: Hotel | null;
}

const HotelSelector = ({ onSelectHotel, selectedHotel }: Props) => {
  const { data, error } = useHotels();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedHotel?.name || "Hotels"}
      </MenuButton>
      <MenuList>
        {data.map((hotel) => (
          <MenuItem onClick={() => onSelectHotel(hotel)} key={hotel.id}>
            {hotel.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HotelSelector;
