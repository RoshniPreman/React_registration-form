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
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineCheck } from "react-icons/ai";

interface props {
  onSubmitClick: (data: FieldValues) => void;
}

const RegistrationForm = ({ onSubmitClick }: props) => {
  const schema = z
    .object({
      firstName: z.string().min(3).max(10).nonempty(),
      lastName: z.string().min(3).max(10).nonempty(),
      email: z.string().email().nonempty(),
      phoneNumber: z.string(), // validation regex to be added
      password: z
        .string()
        .regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/g, {
          message:
            "Password must contain atleast at least a symbol, upper and lower case letters and a number",
        })
        .nonempty(), // validation regex to be added
      confirmPassword: z.string().nonempty(), // validation regex to be added
      temporaryAddress: z.string().nonempty(),
      permanentAddress: z.string(),
      state: z.string(),
      district: z.string(),
      gender: z.string().nonempty(),
      dob: z.coerce.date(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  type userType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isDirty, submitCount },
  } = useForm<userType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(formState);
    onSubmitClick(data);
    reset();
  };

  return (
    <>
      <Heading w="300px" size="md" ml="140px" mb="30px">
        Create User
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              <InputGroup>
                <Input {...register("password")} type="password" />
                {!errors.password?.message && submitCount && (
                  <InputRightElement color="green">
                    <AiOutlineCheck />
                  </InputRightElement>
                )}
              </InputGroup>
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
              <InputGroup>
                <Input type="password" {...register("confirmPassword")} />
                {!errors.confirmPassword?.message && submitCount && (
                  <InputRightElement color="green">
                    <AiOutlineCheck />
                  </InputRightElement>
                )}
              </InputGroup>
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
