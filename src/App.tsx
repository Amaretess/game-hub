import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <>
      {/* "1st row 1st column 1st row 2nd column 1st row 3rd column"  "2nd row 1st col 2nd row 2nd col, 2nd row 3rd col" */}
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }} >
        <GridItem area="nav" >
          <NavBar />
        </GridItem>
        {/* will SHOW on large screens and above */}
        <Show above="lg">
          <GridItem area="aside" >
            aside
          </GridItem>
        </Show>
        <GridItem area="main" >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App;
