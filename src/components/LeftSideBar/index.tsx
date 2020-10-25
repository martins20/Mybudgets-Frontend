import React from "react";
import Button from "../Button";

import {
  BriefcaseIcon,
  HomeIcon,
  ProfileIcon,
  SignOutIcon,
} from "../../styles/icons";
import ActionType from "../ActionType";

import {
  Container,
  Header,
  Section,
  ModalsActionContainer,
  SignOut,
} from "./styles";

const LeftSideBar: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>My budgets</h2>

        <img
          src="https://avatars1.githubusercontent.com/u/55673235?s=460&u=09b1efea3d4d012feb8dd90f5f234dbe3df323cb&v=4"
          alt="Profile"
        />

        <b>Paulo Martins</b>
        <small>Armação dos Búzios</small>
      </Header>

      <Section>
        <Button name="Dashboard" icon={() => <HomeIcon />} />
      </Section>

      <ModalsActionContainer>
        <small>Referencias</small>

        <ActionType name="My budgets" icon={() => <BriefcaseIcon />} />
        <ActionType name="Profile" icon={() => <ProfileIcon />} />
      </ModalsActionContainer>

      <SignOut>
        <SignOutIcon />
        <b>Logout</b>
      </SignOut>
    </Container>
  );
};

export default LeftSideBar;
