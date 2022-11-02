import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const ListContainer = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
` 

export const ListItems = styled.ul`
    list-style: none;
    width: 90%;
`

export const ListItem = styled.li`
    padding: .3rem;
    margin-bottom: .4rem;
    margin-top: .2rem;
    background-color: #D9D9D9;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const ListHeader = styled.div`
    padding: .3rem;
    margin-bottom: .4rem;
    background-color: #D9D9D9;
    border-radius: 8px;
    margin-top: 1rem;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ListSpan = styled.div`
    background-color: #D9D9D9;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ListeHeaderItem = styled.div`
    padding-left: .3rem;
    padding-bottom: .3rem;
    width: 100%;
    justify-content: space-around;
    display: flex;
`