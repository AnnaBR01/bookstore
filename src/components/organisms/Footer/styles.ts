import styled from "styled-components";
import { Color, Media } from "../../../ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 36px;
  border-top: 1px solid ${Color.Secondary};

  ${Media.SM} {
    padding-block: 40px;
    flex-direction: column;
  }
`;

const FooterDescription = styled.p`
  line-height: 24px;
  color: ${Color.Secondary};
`;

export { StyledFooter, FooterDescription };