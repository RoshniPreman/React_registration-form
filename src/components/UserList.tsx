import {
  Card,
  CardBody,
  Heading,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export interface User {
  firstName: string;
  lastName: string;
  email: string; // validation regex to be added
  phoneNumber: string; // validation regex to be added
  password: string; // validation regex to be added
  temporaryAddress: string;
  permanentAddress: string;
  state: string;
  district: string;
  gender: string;
  dob: string;
}

interface props {
  users: User[];
}

const UserList = ({ users }: props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      <Card width="300px" align="end">
        <CardBody>
          <VStack>
            <Heading size="sm">Roshni Preman</Heading>
            <Text>Thandamparambil house, Nandikkara</Text>
            <Text>Ph: 9645306264</Text>
            <Text>Email: roshnipreman92@gmail.com</Text>
            <Text>DOB: 10/09/1992</Text>
            <Text>Gender: Female</Text>
          </VStack>
        </CardBody>
      </Card>

      <Card width="300px">
        <CardBody>
          <VStack>
            <Heading size="sm">Roshni Preman</Heading>
            <Text>Thandamparambil house, Nandikkara</Text>
          </VStack>
        </CardBody>
      </Card>

      <Card width="300px">
        <CardBody>
          <VStack>
            <Heading size="sm">Roshni Preman</Heading>
            <Text>Thandamparambil house, Nandikkara</Text>
          </VStack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default UserList;
