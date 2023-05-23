import styled from 'styled-components/native';

interface TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
	mt?: number;
	mb?: number;
	mr?: number;
	ml?: number;
	center?: string;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) => weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
	margin-top: ${({mt}) => mt ? mt : 0}px;
  margin-bottom: ${({mb}) => mb ? mb : 0}px;
  margin-right: ${({mr}) => mr ? mr : 0}px;
  margin-left: ${({ml}) => ml ? ml : 0}px;
  text-align: ${({ center }) => center ? 'center' : 'left' }
`;
