import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const StyledList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  display: grid;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const StyledListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 15px;
`;

export const StyledListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 15px;
`;

export const StyledTitle = styled.h4`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const StyledName = styled.p`
  display: flex;
  align-items: baseline;
  position: relative;

  span {
    flex-shrink: 0;
  }

  &::after {
    content: '';
    display: inline-block;
    margin: 0 30px;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
