import styled from "styled-components";

type variant = 'default' | 'transparent'

interface IProps {
  color?: string;
  children: string;
  variant?: variant
}

function Tag({ color, children, variant }: IProps) {
  return <TagContainer variant={variant ?? 'default'} color={color}>{children}</TagContainer>;
}

const TagContainer = styled.div<{ color?: string, variant: variant }>`
  height: 20px;
  padding: 3px 10px;
  margin: 1px;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial';
  font-size: 12px;

  ${({ color, variant }) => {
    if (variant === 'default') {
      return `
      background-color: ${color || "black"};
      color: white;
    `;
    }

    return `
    background-color: transparent;
    border: 1px solid ${color};
    color: ${color};
    `
  }}

`;

export default Tag;
