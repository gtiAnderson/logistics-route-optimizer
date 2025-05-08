
//Interface para o ponto de entrega
interface PontoEntrega {
    id:string | number;
    x: number;
    y: number;
}

//função da formula euclidiana
function calcularDistancia(a: PontoEntrega, b: PontoEntrega): number {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

//Entrada de dados: lista de pontos de entrega
const pontos: PontoEntrega[] = [
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 10, y: 5 },
    { id: 3, x: 5, y: 12 },
    { id: 4, x: 8, y: 3 },
    { id: 5, x: 2, y: 8 },
];
