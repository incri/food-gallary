import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FoodGrids from "./components/FoodGrids";
import CategoriesList from "./components/CategoriesList";
import { useState } from "react";
import { Categories } from "./hooks/useCategories";
import HotelSelector from "./components/HotelSelector";
import { Hotel } from "./hooks/useFoods";

export interface FoodQuery {
  category: Categories | null;
  hotel: Hotel | null;
}

function App() {
  const [foodQuery, setFoodQuery] = useState<FoodQuery>({} as FoodQuery);

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
              selectedCategory={foodQuery.category}
              onSelectCategory={(category) =>
                setFoodQuery({ ...foodQuery, category })
              }
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HotelSelector
            selectedHotel={foodQuery.hotel}
            onSelectHotel={(hotel) => setFoodQuery({ ...foodQuery, hotel })}
          />
          <FoodGrids foodQuery={foodQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
