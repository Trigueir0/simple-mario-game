import styled from "styled-components";

export const Cloud_Style = styled.div`
    position: absolute;
    top: 10px;
    width: 500px;
    animation: cloud linear 10s infinite;

    @keyframes cloud {
        from {
            left: 100%;
        }

        to {
            left: -500px;
        }
    }
`