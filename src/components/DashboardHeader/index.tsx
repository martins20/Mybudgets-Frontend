import React, { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { ArrowDownIcon, ArrowUpIcon, SignOutIcon } from "../../styles/icons";

import { Container, DropDown, DropDownItems, SignOut } from "./styles";

const storagedUserData = localStorage.getItem("@MyBudgets:user");

const data = storagedUserData && JSON.parse(storagedUserData);

interface DashboardHeaderProps {
  isDropdownToggled: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  isDropdownToggled,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const { signOut } = useAuth();

  return (
    <Container>
      <DropDown>
        <img
          src="https://avatars1.githubusercontent.com/u/55673235?s=460&u=09b1efea3d4d012feb8dd90f5f234dbe3df323cb&v=4"
          alt="Profile"
        />

        <b>{data.first_name}</b>

        {isDropdownToggled ? (
          <ArrowUpIcon onClick={() => setIsToggled(!isToggled)} />
        ) : (
          <ArrowDownIcon onClick={() => setIsToggled(!isToggled)} />
        )}
      </DropDown>
      <DropDownItems isToggled={isToggled}>
        <SignOut>
          <SignOutIcon />
          <b onClick={signOut}>Logout</b>
        </SignOut>
      </DropDownItems>
    </Container>
  );
};

export default DashboardHeader;
