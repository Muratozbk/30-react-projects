import styled, { keyframes } from "styled-components";

const shake = keyframes`
0%{transform:translate(1px,1px) rotate(0)}
10%{transform:translate(-1px,2px) rotate(-1deg)}
20%{transform:translate(-3px,0px) rotate(1deg)}
100%{transform:translate(1px,-2px) rotate(-1deg)}
`;

export const Wrapper = styled.div`

&.active{
    animation: ${shake} 0.5s ease-out;
    input{
        color: red;
        &::placeholder{
            color: red;
        }
    }
    &.hide{
        display: none;
    }
}
`