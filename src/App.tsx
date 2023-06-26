import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FoodGrids from "./components/FoodGrids";
import CategoriesList from "./components/CategoriesList";
import { useState } from "react";
import { Categories } from "./hooks/useCategories";
import HotelSelector from "./components/HotelSelector";
import { Hotel } from "./hooks/useFoods";

function App() {
  const [selectedCategories, setSelectedCategories] =
    useState<Categories | null>(null);

  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "310px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <CategoriesList
              selectedCategory={selectedCategories}
              onSelectCategory={(category) => setSelectedCategories(category)}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HotelSelector
            selectedHotel={selectedHotel}
            onSelectHotel={(hotel) => setSelectedHotel(hotel)}
          />
          <FoodGrids
            selectedHotel={selectedHotel}
            selectedCategory={selectedCategories}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
