
/* Ámbito de la variable */

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i); // Da error porque la variable i, solo en el bloque for que es independiete de todo el codigo

for (let j = 0; j < 5; j++) {
    console.log(j);
}

console.log(j); // Da error porque la variable j, solo en el bloque for que es independiete de todo el codigo