import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  VStack,
  Textarea,
  Select,
  RadioGroup,
  Radio,
  Button,
  Checkbox,
} from "@chakra-ui/react";

const RegistrationForm = () => {
  return (
    <>
      <Heading w="300px" size="md" ml="140px" mb="30px">
        Create User
      </Heading>

      <HStack justify="space-evenly">
        <VStack w="400px">
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="firstName" />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Passsword</FormLabel>
            <Input type="password" />
          </FormControl>

          <FormControl>
            <FormLabel>Temporary Address</FormLabel>
            <Textarea />
          </FormControl>

          <FormControl>
            <FormLabel>State</FormLabel>
            <Select placeholder="Select State">
              <option>Kerala</option>
              <option>Tamilnadu</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup defaultValue="Itachi">
              <HStack spacing="24px">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="">Can't disclose</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </VStack>
        <VStack w="400px">
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="lastName" />
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="phoneNumber" />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Passsword</FormLabel>
            <Input type="password" />
          </FormControl>

          <FormControl>
            <FormLabel>
              Permanent Address{" "}
              <Checkbox ml="16px" fontWeight="normal">
                Same as temporary address
              </Checkbox>
            </FormLabel>
            <Textarea />
          </FormControl>

          <FormControl>
            <FormLabel>Disctrict</FormLabel>
            <Select placeholder="Select Disctrict">
              <option>Thrissur</option>
              <option>Ernakulam</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>DOB</FormLabel>
            <Input type="text" />
          </FormControl>
        </VStack>
      </HStack>
      <Button ml="150px" mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </>
  );
};

export default RegistrationForm;
