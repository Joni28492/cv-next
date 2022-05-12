
export interface IStudies {
    title:string,
    place:string,
    date:string,
    work:string,
    className?:string,
}



export const estudios:IStudies[] = [
    {
        title: 'FP Superior Imagen',
        place: 'CIDISI - Noreña',
        date: '2011-2013',
        work: 'Trabajo de fotografía, video y edición'
    },
    {
        title: 'Ingeniera de videojuegos',
        place: 'ESNE - Asturias',
        date: '2014-2017',
        work: 'Modelado 3D, Animación, Programación etc.. '
    },
    {
        title: 'Certificado de profesionalidad Nivel 3',
        place: 'InterGrupo - SEPEPA',
        date: '2018',
        work: 'Programación en Java y C, Linux basico y Maquinas virtuales'
    },
    {
        title: 'Formación autodidacta',
        place: 'Web y otros medios',
        date: 'Continuamente',
        work: 'Me formo continuamente con videos tutoriales, cursos sobre todo online, en plataformas como Udemy, Domestika etc...'
    },

]