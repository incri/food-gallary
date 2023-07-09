import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FoodGrids from "./components/FoodGrids";
import CategoriesList from "./components/CategoriesList";
import { useState } from "react";
import { Categories } from "./hooks/useCategories";
import HotelSelector from "./components/HotelSelector";
import { Hotel } from "./hooks/useFoods";
import SortSelector from "./components/SortSelector";

export interface FoodQuery {
  category: Categories | null;
  hotel: Hotel | null;
  sortOrder: string;
  searchText: string;
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
          <NavBar
            onSearch={(searchText) =>
              setFoodQuery({ ...foodQuery, searchText  })
            }
          />
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
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <HotelSelector
              selectedHotel={foodQuery.hotel}
              onSelectHotel={(hotel) => setFoodQuery({ ...foodQuery, hotel })}
            />
            <SortSelector
              sortOrder={foodQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setFoodQuery({ ...foodQuery, sortOrder })
              }
            />
          </HStack>
          <FoodGrids foodQuery={foodQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
