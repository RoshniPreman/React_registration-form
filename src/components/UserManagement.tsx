import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import { FieldValues } from "react-hook-form";
import UserList, { User } from "./UserList";
import userData from "../data/users";

interface props {
  createNew: boolean;
}

const UserManagement = ({ createNew }: props) => {
  const [users, setUsers] = useState<Array<User>>(userData);
  const [showUsers, setShowUsers] = useState(false);

  //s  setUsers(userData);

  const submitUser = (data: FieldValues) => {
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      temporaryAddress: data.temporaryAddress,
      permanentAddress: data.permanentAddress,
      state: data.state,
      district: data.district,
      gender: data.gender,
      dob: data.dob,
    };

    setUsers([...users, user]);
    // setShowUsers(true);
  };

  return (
    <>
      {/* {!showUsers && ( */}
      <RegistrationForm onSubmitClick={(data) => submitUser(data)} />
      {/* // )}
      // {showUsers && <UserList users={users} />} */}
    </>
  );
};

export default UserManagement;
