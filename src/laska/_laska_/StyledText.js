import styled from "styled-components";

export default styled.div`
  box-sizing: border-box;
  a {
    ${props => props.linkColor && `color: ${props.linkColor};`}
    ${props => {
      const style = props.style || {};
      const textDecorationLine = style.textDecorationLine || "none";
      return `text-decoration: ${textDecorationLine};`;
    }};
  }

  ${props =>
    props.linkHoverColor &&
    `
    a:hover {
      color: ${props.linkHoverColor};
    }
  `}
`;
