import styled from 'styled-components';

export type FrameProps = {
  ratio: string,
};

export const Frame = styled.div<FrameProps>`
  aspect-ratio: ${props => props.ratio};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }
`;
