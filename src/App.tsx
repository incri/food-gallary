import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import FoodGrids from "./components/FoodGrids";
import CategoriesList from "./components/CategoriesList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <CategoriesList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <FoodGrids />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
