
//Interface para o ponto de entrega
interface PontoEntrega {
    id:string | number;
    x: number;
    y: number;
}

//função extra para validar se o ponto de entrega é válido
function validarPonto(ponto: any): ponto is PontoEntrega {
    return (
        ponto &&
        (typeof ponto.id === 'string' || typeof ponto.id === 'number') &&
        typeof ponto.x === 'number' &&
        typeof ponto.y === 'number'
    );
}

//função da formula euclidiana
function calcularDistancia(a: PontoEntrega, b: PontoEntrega): number {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

// Algoritmo Nearest Neighbor com ponto inicial aleatório
function otimizarRota(pontos: PontoEntrega[]): { rota: (string | number)[], distanciaTotal: number } {
    if (!Array.isArray(pontos) || pontos.length === 0) {
        throw new Error("A lista de pontos está vazia ou é inválida.");
    }

    for (const ponto of pontos) {
        if (!validarPonto(ponto)) {
            throw new Error(`Ponto inválido detectado: ${JSON.stringify(ponto)}`);
        }
    }

    const pontosVisitados = new Set<string | number>();
    const rota: (string | number)[] = [];
    
    // Escolhe ponto inicial aleatório
    const indiceInicial = Math.floor(Math.random() * pontos.length);
    const pontoInicial = pontos[indiceInicial];
    let pontoAtual = pontoInicial;
    let distanciaTotal = 0;

    rota.push(pontoAtual.id);
    pontosVisitados.add(pontoAtual.id);

    while (pontosVisitados.size < pontos.length) {
        let menorDistancia = Infinity;
        let proximoPonto: PontoEntrega | null = null;

        for (const ponto of pontos) {
            if (!pontosVisitados.has(ponto.id)) {
                const distancia = calcularDistancia(pontoAtual, ponto);
                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    proximoPonto = ponto;
                }
            }
        }

        if (proximoPonto) {
            distanciaTotal += menorDistancia;
            pontoAtual = proximoPonto;
            rota.push(pontoAtual.id);
            pontosVisitados.add(pontoAtual.id);
        }
    }

    // Volta ao ponto inicial
    distanciaTotal += calcularDistancia(pontoAtual, pontoInicial);
    rota.push(pontoInicial.id);

    return { rota, distanciaTotal };
}

//Entrada de dados: lista de pontos de entrega
const pontos: PontoEntrega[] = [
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 10, y: 5 },
    { id: 3, x: 5, y: 12 },
    { id: 4, x: 8, y: 3 },
    { id: 5, x: 2, y: 8 },
];

try {
    const resultado = otimizarRota(pontos);
    console.log("Ordem da rota:", resultado.rota);
    console.log("Distância total:", resultado.distanciaTotal.toFixed(2));
} catch (error) {
    console.error("Erro ao otimizar a rota:", (error as Error).message);
}