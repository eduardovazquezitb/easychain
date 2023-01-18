import styled from '@emotion/styled'

export const Container = styled.div`
    width: inherit;
    height: inherit;
`

export const Roller = styled.div`
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0%);
    width: 8rem;
    height: 8rem;

    * {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 4rem 4rem;
    }

    *:after {
        content: " ";
        display: block;
        position: absolute;
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
        background: ${props => props.theme.colors.primary};
        margin: -0.2rem 0 0 -0.2rem;
    }

    *:nth-of-type(1) {
        animation-delay: -0.036s;
    }

    *:nth-of-type(1):after {
        top: 6.3rem;
        left: 6.3rem;
    }

    *:nth-of-type(2) {
        animation-delay: -0.072s;
    }

    *:nth-of-type(2):after {
        top: 6.8rem;
        left: 5.6rem;
    }

    *:nth-of-type(3) {
        animation-delay: -0.108s;
    }

    *:nth-of-type(3):after {
        top: 7.1rem;
        left: 4.8rem;
    }

    *:nth-of-type(4) {
        animation-delay: -0.144s;
    }

    *:nth-of-type(4):after {
        top: 7.2rem;
        left: 4rem;
    }

    *:nth-of-type(5) {
        animation-delay: -0.18s;
    }

    *:nth-of-type(5):after {
        top: 7.1rem;
        left: 3.2rem;
    }

    *:nth-of-type(6) {
        animation-delay: -0.216s;
    }

    *:nth-of-type(6):after {
        top: 6.8rem;
        left: 2.4rem;
    }

    *:nth-of-type(7) {
        animation-delay: -0.252s;
    }

    *:nth-of-type(7):after {
        top: 6.3rem;
        left: 1.7rem;
    }

    *:nth-of-type(8) {
        animation-delay: -0.288s;
    }
  
    *:nth-of-type(8):after {
        top: 5.6rem;
        left: 1.2rem;
    }

    @keyframes lds-roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
