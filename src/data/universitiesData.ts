
export const universidades = [
  {
    id: 1,
    nombre: "Universidad de Barcelona",
    imagen: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    pais: "España",
    ciudad: "Barcelona",
    programas: 45
  },
  {
    id: 2,
    nombre: "University of Toronto",
    imagen: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    pais: "Canadá",
    ciudad: "Toronto",
    programas: 78
  },
  {
    id: 3,
    nombre: "Technische Universität Berlin",
    imagen: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    pais: "Alemania",
    ciudad: "Berlín",
    programas: 52
  },
  {
    id: 4,
    nombre: "Universidad Nacional Autónoma de México",
    imagen: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    pais: "México",
    ciudad: "Ciudad de México",
    programas: 63
  },
  {
    id: 5,
    nombre: "University of Sydney",
    imagen: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    pais: "Australia",
    ciudad: "Sydney",
    programas: 41
  },
  {
    id: 6,
    nombre: "Sorbonne Université",
    imagen: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    pais: "Francia",
    ciudad: "París",
    programas: 37
  }
];

// Extract unique countries for filter
export const uniqueCountries = ['Todos', ...new Set(universidades.map(uni => uni.pais))];
