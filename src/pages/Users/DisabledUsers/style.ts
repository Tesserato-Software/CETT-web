import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 90%;
    margin: 2rem auto 1rem auto;
    justify-content: space-between;
    div { 
        display: grid;
        grid-template-columns: 1fr 1fr .3fr;
        gap:.5rem;
        width: 70%;
        .input {
            background-color: #D9D9D9;
            padding: 4px;
            border-radius: 8px;
            width: 100%;
        }
    }
    .Link {
        background-color: #E13763;
        padding: .3rem;
        border: 1px solid #E13763;
        border-radius: 8px;
        color: #fff;
        text-decoration: none;
    }
    .select {
        border-radius: 8px;
    }
`

export const ListContainer = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .loading {
        width: 90%;
        padding: .3rem;
        margin-bottom: .4rem;
        margin-top: .2rem;
        background-color: #D9D9D9;
        border-radius: 8px;
        display: flex;
        justify-content: center;
    }
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
    justify-content: space-between;

    .LinkUpdate {
        font-size: .99rem;
        text-decoration: none;
        color: #000;
        background-color: rgba(52, 68, 88, .5);
        border-radius: 8px;
        padding: .3rem;
        border: 1px solid rgba(52, 68, 88, .5);
    }
`

export const ListSpanLink = styled.div`
    background-color: #D9D9D9;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ListHeader = styled.div`
    padding: .3rem;
    margin-bottom: .4rem;
    background-color: #D9D9D9;
    border-radius: 8px;
    margin-top: 1rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ListSpan = styled.div`
    background-color: #D9D9D9;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ListHeaderItem = styled.div`
    padding-left: .3rem;
    padding-bottom: .3rem;
    width: 100%;
    justify-content: space-between;
    display: flex;
`