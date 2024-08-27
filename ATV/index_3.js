// MergeSort O(n log n). eficiente para ordenar listas grandes

console.log("merge Sort");

function mergeSort(arr) {
    if (arr.length <= 1) {
        console.log(arr);  
        return arr;
    }

    const meio = Math.floor(arr.length / 2);
    const esquerda = arr.slice(0, meio);
    const direita = arr.slice(meio);

    const esquerdaOrdenada = mergeSort(esquerda);
    const direitaOrdenada = mergeSort(direita);

    const resultado = merge(esquerdaOrdenada, direitaOrdenada);

    console.log(resultado);  
    return resultado;
}

function merge(esquerda, direita) {
    const resultado = [];
    let i = 0;
    let j = 0;

    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] < direita[j]) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }

    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

const numeros1 = [5, 2, 9, 1, 5, 6];
const numerosOrdenados1 = mergeSort(numeros1);


console.log("ordenacao Por Insercao");

// ordenacaoPorInsercao O(n^2). eficiente para listas pequenas ou quase ordenadas

function ordenacaoPorInsercao(arr) {
    for (let i = 1; i < arr.length; i++) {
        let chave = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = chave;
        console.log(arr);
    }
    return arr;
}

const numeros2 = [5, 2, 9, 1, 5, 6];
const numerosOrdenados2 = ordenacaoPorInsercao(numeros2);
