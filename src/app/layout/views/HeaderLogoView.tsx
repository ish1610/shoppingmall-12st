import styled from "@emotion/styled";
import logo from "../../../../public/siba.png";
import Image from "next/image";
import { IHeaderLogoProps } from "../types/header";
import Link from "next/link";
import Inner from "@/app/common/components/Inner";

const HeaderLogoContainer = styled.div`
  position: absolute;
  top: 20px;
  .logo__name {
    text-align: center;
    margin-top: 5px;
    font-weight: 700;
  }
`;

const HeaderLogoView = ({ route }: IHeaderLogoProps) => {
  return (
    <HeaderLogoContainer>
      <Link className="logo" href={route.home}>
        <Image src={logo} alt="logo" width={40} height={40} />
        <p className="logo__name">12st</p>
      </Link>
    </HeaderLogoContainer>
  );
};

export default HeaderLogoView;
