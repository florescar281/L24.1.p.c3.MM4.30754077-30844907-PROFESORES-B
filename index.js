const salida = document.getElementById("salida");  

let Profesores = [
    {categoría: 1, nombre: "Ana", sexo: "F"},
    {categoría: 2, nombre: "Carlos", sexo: "M"},
    {categoría: 3, nombre: "Diana", sexo: "F"},
    {categoría: 4, nombre: "Eduardo", sexo: "M"},
    {categoría: 5, nombre: "Fernanda", sexo: "F"},
    {categoría: 3, nombre: "Gustavo", sexo: "M"},
    {categoría: 4, nombre: "Helena", sexo: "F"},
    {categoría: 5, nombre: "Ivan", sexo: "M"},
    {categoría: 1, nombre: "Javier", sexo: "M"},
    {categoría: 2, nombre: "Katherine", sexo: "F"},
    {categoría: 3, nombre: "Luis", sexo: "M"},
    {categoría: 4, nombre: "Mariana", sexo: "F"}
]

let profesoresCategoria = (Profesores, categoria) => {
    return Profesores.filter(profesor => profesor.categoría == categoria);
}

let profesoresSexoEnCategoria = (Profesores, categoria, sexo) => {
    let profesoresCategorias = profesoresCategoria(Profesores, categoria);
    profesoresCategorias.filter(profesor => profesor.sexo == sexo);
    return profesoresCategorias;
}

let porcProfesSexoEnCategoria = (Profesores, categoria, sexo) => {
    let profesoresSexo = profesoresSexoEnCategoria(Profesores, categoria, sexo);
    return (profesoresSexo.length * Profesores.length) / 10;
}

salida.innerHTML = `
    Porcentaje de profesores mujeres en la categoría 1: ${porcProfesSexoEnCategoria(Profesores, 1, "F")}% <br>
    Porcentaje de profesores hombres en la categoría 2: ${porcProfesSexoEnCategoria(Profesores, 2, "M")}% <br>
    Porcentaje de profesores mujeres en la categoría 3: ${porcProfesSexoEnCategoria(Profesores, 3, "F")}% <br>
    Porcentaje de profesores hombres en la categoría 4: ${porcProfesSexoEnCategoria(Profesores, 4, "M")}% <br>
    Porcentaje de profesores mujeres en la categoría 5: ${porcProfesSexoEnCategoria(Profesores, 5, "F")}%
`