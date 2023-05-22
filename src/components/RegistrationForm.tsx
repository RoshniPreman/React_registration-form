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
import { FieldValues, useForm } from "react-hook-form";

const RegistrationForm = () => {
  const { register, handleSubmit, watch } = useForm();

  //  console.log(watch("firstName"));

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <Heading w="300px" size="md" ml="140px" mb="30px">
        Create User
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack justify="space-evenly">
          <VStack w="400px">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input {...register("firstName")} type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} type="email" />
            </FormControl>

            <FormControl>
              <FormLabel>Passsword</FormLabel>
              <Input {...register("password")} type="password" />
            </FormControl>

            <FormControl>
              <FormLabel>Temporary Address</FormLabel>
              <Textarea {...register("temporaryAddress")} />
            </FormControl>

            <FormControl>
              <FormLabel>State</FormLabel>
              <Select placeholder="Select State" {...register("state")}>
                <option>Kerala</option>
                <option>Tamilnadu</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup>
                <HStack spacing="24px">
                  <Radio {...register("gender")} value="Male">
                    Male
                  </Radio>
                  <Radio {...register("gender")} value="Female">
                    Female
                  </Radio>
                  <Radio {...register("gender")} value="">
                    Can't disclose
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </VStack>
          <VStack w="400px">
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" {...register("lastName")} />
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="text" {...register("phoneNumber")} />
            </FormControl>

            <FormControl>
              <FormLabel>Confirm Passsword</FormLabel>
              <Input type="password" {...register("confirmPassword")} />
            </FormControl>

            <FormControl>
              <FormLabel>
                Permanent Address
                <Checkbox ml="16px" fontWeight="normal">
                  Same as temporary address
                </Checkbox>
              </FormLabel>
              <Textarea />
            </FormControl>

            <FormControl>
              <FormLabel>Disctrict</FormLabel>
              <Select placeholder="Select Disctrict" {...register("district")}>
                <option>Thrissur</option>
                <option>Ernakulam</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>DOB</FormLabel>
              <Input type="text" {...register("dob")} />
            </FormControl>
          </VStack>
        </HStack>
        <Button ml="150px" mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default RegistrationForm;
