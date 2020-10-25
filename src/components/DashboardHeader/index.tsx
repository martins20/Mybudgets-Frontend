import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../styles/icons";

import { Container, DropDown } from "./styles";

interface DashboardHeaderProps {
  isDropdownToggled: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  isDropdownToggled,
}) => {
  return (
    <Container>
      <DropDown>
        <img
          src="https://avatars1.githubusercontent.com/u/55673235?s=460&u=09b1efea3d4d012feb8dd90f5f234dbe3df323cb&v=4"
          alt="Profile"
        />

        <b>Paulo</b>

        {isDropdownToggled ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </DropDown>
    </Container>
  );
};

export default DashboardHeader;
