import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FoodGrids from "./components/FoodGrids";
import CategoriesList from "./components/CategoriesList";
import { useState } from "react";
import { Categories } from "./hooks/useCategories";

function App() {
  const [selectedCategories, setSelectedCategories] =
    useState<Categories | null>(null);
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
              onSelectCategory={(category) => setSelectedCategories(category)}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <FoodGrids selectedCategory={selectedCategories} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
