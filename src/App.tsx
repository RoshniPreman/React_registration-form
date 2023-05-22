import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                          "nav main"
                          "nav footer"`}
      gridTemplateColumns={"150px 1fr"}
    >
      <GridItem area="header" bg="tomato">
        Header
      </GridItem>
      <GridItem area="nav" bg="yellow">
        nav
      </GridItem>
      <GridItem area="main" bg="red">
        main
      </GridItem>
      <GridItem area="footer" bg="blue">
        footer
      </GridItem>
    </Grid>
    //   <h1>Registration Form</h1>
    //   <RegistrationForm></RegistrationForm>
    // </>
  );
}

export default App;
