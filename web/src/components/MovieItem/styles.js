import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-right: 8px;

  background-color: ${({ theme }) => theme.colors.gray_600};

  > h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray_50};
    font-weight: 700;
  }

  cursor: pointer;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 8px;

  svg {
    color: ${({ theme }) => theme.colors.pink};
  }
`

export const Description = styled.div`

  > p {
    color: ${({ theme }) => theme.colors.gray_300};
    /* white-space: nowrap;
    text-overflow: ellipsis; */
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin-top: 16px;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 16px;

  > span {
    padding: 5px 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 8px;
    background-color: #312E38;
    color: ${({ theme }) => theme.colors.gray_100};
  }
`