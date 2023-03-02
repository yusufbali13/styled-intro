import styled from "styled-components";

const HeaderText = styled.h1`
color: ${({ renk }) => renk || "black"}
font-size: 2rem;
text-align: center;
`;

export default HeaderText;
