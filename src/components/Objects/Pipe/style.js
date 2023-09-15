import styled from "styled-components";

export const Pipe_Style = styled.div`
    img {
        position: absolute;
        bottom: 150px;
        width: 80px;
        animation: pipe_anim linear 3s infinite;
    
        @keyframes pipe_anim {
            from {
                left: 100%;
            }
    
            to {
                left: 0vw;
            }
        }
    }
`