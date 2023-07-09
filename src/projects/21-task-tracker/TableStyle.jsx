import styled from 'styled-components'

export const TableStyle = styled.div`
width: 700px;
margin:auto;
font-weight: 600;
ul.table-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #333;
    color:#ddd;
    border-radius: 3px;
    padding: 15px 25px;
    margin-bottom: 25px;
}

ul.table-row{
    margin-bottom: 25px;
    & li{
        background-color: #cfcfcf;
        box-shadow: 0 0 5px 1px rgba(0,0,0,0.3);
        border-radius: 3px;
    padding: 25px 30px;
    margin-bottom: 25px;
    transition: all 0.2s ease;
    &:hover{
        cursor:pointer;
        box-shadow: none;
    }
    &:nth-child(odd){
        background-color:rgba(30,158,186,0.1) ;
    }
    &:nth-child(even){
        background-color:rgba(30,158,186,0.3) ;
    }
    &.completed{
        background-color: #8080804c;
         color: gray;
         box-shadow: none;
    }
    }
}
input {
    border: none;
    padding: 0.35rem 0.75rem;
    font-weight: bold;
    font-size: 0.9;
} input:hover{
    cursor: pointer;
    background: rgba(104,104,104, 0.2);
}
`

export const NewTaskStyle = styled.li`
display: flex;
justify-content: space-between;
`