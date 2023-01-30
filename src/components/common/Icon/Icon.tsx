import styled from "styled-components";

interface IProps {
  color?: string;
  icon: string;
  altText: string;
  style?: React.CSSProperties;
}

function IconTag({ color, icon, altText, style }: IProps) {
  return (
    <Container color={color} style={style}>
      <img src={icon} alt={altText} />
    </Container>
  );
}

const Container = styled.div<{ color?: string }>`
  height: 17px;
  width: 17px;
  border-radius: 17px;
  padding: 3px;
  margin: 1px 2px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color }) => {
    return `
      background-color: ${color || "black"};
    `;
  }}
`;

export default IconTag;
