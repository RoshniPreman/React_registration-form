import { Grid, GridItem, Heading } from "@chakra-ui/react";
import "./App.css";
import UserManagement from "./components/UserManagement";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                          "main main"
                          "footer footer"`}
      gridTemplateColumns={"1fr"}
    >
      <GridItem area="header">
        <Heading size="lg" p="20px">
          User Management System
        </Heading>
      </GridItem>
      <GridItem area="nav">nav</GridItem>
      <GridItem area="main">
        <UserManagement />
      </GridItem>
      <GridItem area="footer">footer</GridItem>
    </Grid>
  );
}

export default App;
