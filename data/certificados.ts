

interface Props {
    title:string;
    desc?: string;
    teacher: string;
    img:string;
    alt?:string;
    urlVerified?:string;
    tecnogies?: string[];
}


export const certificados:Props[] = [
    {
        title: 'Hacking Ético',
        img: '../assets/udemy/HackingEtico.jpg',
        teacher: 'Santiago Hernandez Ramos'
    },
    {
        title: 'JavaScript Moderno',
        img: './assets/udemy/javascript-fh.jpg',
        teacher: 'Fernando Herrera'
    },
    {
        title: 'JavaScript ES6',
        img: './assets/udemy/javascript-grover.jpg',
        teacher: 'Grover Vasquez'
    },
    {
        title: 'Node',
        img: './assets/udemy/Node.jpg',
        teacher: 'Fernando Herrera'
    },
    {
        title: 'React 0 a Experto',
        img: './assets/udemy/React.jpg',
        teacher: 'Fernando Herrera'
    },
]