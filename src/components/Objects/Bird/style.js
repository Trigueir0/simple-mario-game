import styled from "styled-components";

export const Bird_Style = styled.div`
    position: absolute;
    bottom: 200px;
    right: 0;
    width: 70px;
    transform: scaleX(-1);
    /* animation: birde linear 2s infinite; */

    @keyframes birde {
        from {
            left: 100%;
        }

        to {
            left: -70px;
        }
    }
`