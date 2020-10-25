import styled, { css } from "styled-components";

import { HiHome } from "react-icons/hi";
import { IoIosBriefcase } from "react-icons/io";
import { RiMapPinUserLine } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";

const defaultStyle = css`
  font-size: 18px;
  line-height: 18px;
`;

export const HomeIcon = styled(HiHome)`
  ${defaultStyle}
`;

export const BriefcaseIcon = styled(IoIosBriefcase)`
  ${defaultStyle}
`;

export const ProfileIcon = styled(RiMapPinUserLine)`
  font-size: 19px;
  line-height: 19px;
`;

export const SignOutIcon = styled(AiOutlinePoweroff)`
  ${defaultStyle}
`;