import {
  FormControl,
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
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const RegistrationForm = () => {
  const schema = z.object({
    firstName: z.string().min(3).max(10).nonempty(),
    lastName: z.string().min(3).max(10).nonempty(),
    email: z.string().nonempty(), // validation regex to be added
    phoneNumber: z.string(), // validation regex to be added
    password: z.string(), // validation regex to be added
    confirmPassword: z.string(), // validation regex to be added
    temporaryAddress: z.string().nonempty(),
    permanentAddress: z.string(),
    state: z.string(),
    district: z.string(),
    gender: z.string().nonempty(),
    dob: z.coerce.date(),
  });

  type userType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userType>({
    resolver: zodResolver(schema),
  });

  //    console.log(watch(errors));

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
            <FormControl isRequired isInvalid={!!errors.firstName?.message}>
              <FormLabel>First Name</FormLabel>
              <Input {...register("firstName")} type="text" />
              {<FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>}
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.email?.message}>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} type="email" />
              {<FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.password?.message}>
              <FormLabel>Passsword</FormLabel>
              <Input {...register("password")} type="password" />
              {<FormErrorMessage>{errors.password?.message}</FormErrorMessage>}
            </FormControl>

            <FormControl
              isRequired
              isInvalid={!!errors.temporaryAddress?.message}
            >
              <FormLabel>Temporary Address</FormLabel>
              <Textarea {...register("temporaryAddress")} />
              {
                <FormErrorMessage>
                  {errors.temporaryAddress?.message}
                </FormErrorMessage>
              }
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.state?.message}>
              <FormLabel>State</FormLabel>
              <Select placeholder="Select State" {...register("state")}>
                <option>Kerala</option>
                <option>Tamilnadu</option>
              </Select>
              <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.gender?.message}>
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
            <FormControl isRequired isInvalid={!!errors.lastName?.message}>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" {...register("lastName")} />
              {<FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>}
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="text" {...register("phoneNumber")} />
            </FormControl>

            <FormControl
              isRequired
              isInvalid={!!errors.confirmPassword?.message}
            >
              <FormLabel>Confirm Passsword</FormLabel>
              <Input type="password" {...register("confirmPassword")} />
              {
                <FormErrorMessage>
                  {errors.confirmPassword?.message}
                </FormErrorMessage>
              }
            </FormControl>

            <FormControl>
              <FormLabel>
                Permanent Address
                {/* <Checkbox ml="16px" fontWeight="normal">
                  Same as temporary address
                </Checkbox> */}
              </FormLabel>
              <Textarea {...register("permanentAddress")} />
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.district?.message}>
              <FormLabel>Disctrict</FormLabel>
              <Select placeholder="Select Disctrict" {...register("district")}>
                <option>Thrissur</option>
                <option>Ernakulam</option>
              </Select>
              <FormErrorMessage>{errors.district?.message}</FormErrorMessage>
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
