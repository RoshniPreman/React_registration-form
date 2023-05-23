import { Grid, GridItem, Heading, Button, HStack } from "@chakra-ui/react";
import "./App.css";
import UserManagement from "./components/UserManagement";
import { useState } from "react";

function App() {
  const [createNew, setrCreateNew] = useState(false);

  const createUser = () => {
    setrCreateNew(true);
  };

  return (
    <Grid
      templateAreas={`"header header"
                          "main main"
                          "footer footer"`}
      gridTemplateColumns={"1fr"}
    >
      <GridItem area="header">
        <HStack justify="space-between">
          <Heading size="lg" p="20px">
            User Management System
          </Heading>
          <Button onClick={createUser}>Create User</Button>
        </HStack>
      </GridItem>
      <GridItem area="nav"></GridItem>
      <GridItem area="main">
        <UserManagement createNew={createNew} />
      </GridItem>
      <GridItem area="footer"></GridItem>
    </Grid>
  );
}

export default App;
