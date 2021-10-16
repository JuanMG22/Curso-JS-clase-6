// Array de personas que contiene datos de nombre y edad
const personas = [{
        nombre: `José`,
        edad: 20,
    },
    {
        nombre: `Juan`,
        edad: 18,
    },
    {
        nombre: `Julia`,
        edad: 38,
    },
    {
        nombre: `Maria`,
        edad: 55,
    },
    {
        nombre: `Pedro`,
        edad: 23,
    },
    {
        nombre: `Natalia`,
        edad: 20,
    },
];

// Función general que inicie el proceso
function ordenarDatos() {
    let ordenar = prompt(`Ingrese "si" para ordenar datos de personas por edad\nEn caso contrario ingrese cualquier otra cosa`);

    if (ordenar == `si`) {
        // Se ordena array con metodo sort y se ordena por edad, de menor a mayor
        personas.sort((a, b) => {
            if (a.edad > b.edad) {
                return 1;
            }

            if (a.edad < b.edad) {
                return -1;
            }

            // En caso de que se posea la misma edad, se empieza a ordenar por nombre
            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return 1;
            }

            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return -1;
            }
        })

        console.log(personas);

    }
}


console.log(personas);
