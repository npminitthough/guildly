import styled from "styled-components";

interface IProps {
  color?: string;
  children: string;
}

function Tag({ color, children }: IProps) {
  return <TagContainer color={color}>{children}</TagContainer>;
}

const TagContainer = styled.div<{ color?: string }>`
  height: 20px;
  padding: 3px 10px;
  margin: 1px;
  color: white;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial';
  font-size: 12px;

  ${({ color }) => {
    return `
      background-color: ${color || "black"};
    `;
  }}
`;

export default Tag;
