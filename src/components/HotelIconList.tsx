import {
  FaHotel,
  FaUtensils,
  FaGlassCheers,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";
import { Hotel } from "../hooks/useFoods";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  hotels: Hotel[];
}

function HotelIconList({ hotels }: Props) {
  const iconMap: { [key: string]: IconType } = {
    luton: FaHotel,
    Arnold: FaHamburger,
    plaza: FaGlassCheers,
    America: FaUtensils,
    riviera: FaPizzaSlice,
  };

  return (
    <>
      <HStack marginY={1}>
        {hotels.map((hotel) => (
          <Icon as={iconMap[hotel.slug]} color="gray.500"></Icon>
        ))}
      </HStack>
    </>
  );
}

export default HotelIconList;
