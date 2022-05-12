
interface IThreeDProps {
    title: string;
    imgs: string[];
    section?: SectionThreeD;
}

type SectionThreeD = 'Grooming' | 'Texturas' | 'Modelado Basico' | 'Sculp' | 'vehiculos' | 'Render';

export const _3d:IThreeDProps[] = [
    {
        title: 'Monstruo S.A.',
        imgs: [
            './assets/3d/pelo/monstruosa.jpg',
            './assets/3d/pelo/monstruosa-frontal.jpg',
            './assets/3d/pelo/monstruosa-planocorto.jpg',
        ],
        section: "Grooming",

    },
    {
        title: 'Electabuzz',
        imgs: [
            './assets/3d/pelo/electabuzz.jpg',
            './assets/3d/pelo/electabuzz-carafinal.jpg',
            './assets/3d/pelo/electabuzz-desde-abajo.jpg',
        ],
        section: "Grooming",
    }
];

export const imgList = _3d.map(({ imgs }) => {
    return imgs;
}).flat();
