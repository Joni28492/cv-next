
export interface IReferentes {
    nombre: string;
    img?: string;
    especialidad: string;
    desc: string;
    web: string;
    icon?: string;
    className?:string;
}





export const referentes:IReferentes[] = [
    {
       nombre:'Santiago Hernandez Ramos',
       especialidad: 'Seguridad de la Información',
       desc: 'Experto en seguridad de la información y Hacking Ético, muy buen comunicador para hacer sencillos temas bastante complejos',
       web: 'https://twitter.com/santiagohramos',
       icon: 'fab fa-twitter'
   },
   {
       nombre:'Fernando Herrera',
       img:'https://yt3.ggpht.com/ytc/AKedOLTgdFQ9YfNLWeK_7fmJWzys25xahZvkMibBqQcSJA=s900-c-k-c0x00ffffff-no-rj',
       especialidad:'JavaScript FullStack',
       desc:'Experto en JavaScript, y en cada uno de sus frameworks, con cursos muy completos y siempre actualizados',
       web:'https://fernando-herrera.com/#/',
      
   },
  {
       nombre:'Sergio Hualde',
       img:'https://pbs.twimg.com/profile_images/1181228337919922177/oWOP4oNx_400x400.png',
       especialidad:'Zbrush',
       desc:'conocimiento muy profundo para la anatomía de superheroes y personajes realistas',
       web:'https://sergiohualde.com/',
    
   },
  {
       nombre:'Rafael Grassetti',
       img:'https://static.wixstatic.com/media/73f922_117a9692eb5d4491bffb2c60078cb8e7~mv2.png/v1/fill/w_88,h_86,al_c,q_85,usm_0.66_1.00_0.01/glogogold.webp',
       especialidad:'Beast of 3D Model',
       desc:'Principal referente de todo artista 3D',
       web:'https://www.rgrassetti.com/',
      
   },
  {
       nombre:'Danny Mac',
       img:'https://pbs.twimg.com/profile_images/1292456742538956800/_-1IXeoR_400x400.jpg',
       especialidad:'Cartoon Character Artist',
       desc:'Mejores conversiones de concepts y fotos a 3D cartoon',
       web:'https://www.artstation.com/mccabe86',
       icon: 'fab fa-artstation'
   },
  {
       nombre:'Maria Panfilova',
       img:'https://cdna.artstation.com/p/users/avatars/000/030/668/large/76dfad5b9a5bf791a8c8ee553a6c7607.jpg?1519808647',
       especialidad:'3D Creatures anatomy',
       desc:'Especialista en criaturas y con una especial sensibilidad en cada uno de sus modelos que hace que destaquen',
       web:'https://www.artstation.com/maryia_panfilova',
       icon: 'fab fa-artstation'
   },
  {
       nombre:'Marcelo Vazquez as S4vitar',
       img:'https://pbs.twimg.com/profile_images/1451324480949784576/Dm1Occg7_400x400.jpg',
       especialidad:'Experto en ciberseguridad',
       desc:'Experto en ciberseguridad ofensiva y con sentido del humor, siempre esta hack',
       web:'https://twitter.com/S4vitar',
       icon: 'fab fa-twitter'
   },
  {
       nombre:'Ian Spriggs',
       img:'https://cdna.artstation.com/p/users/avatars/000/013/522/large/85cb98c8680667ee964a8bc6b89805f8.jpg?1582013303',
       especialidad:'3D Character Artist',
       desc:'Mejores renders de personas humanas, a veces se confunden con fotos',
       web:'https://www.artstation.com/ianspriggs',
       icon: 'fab fa-artstation'
   },
]