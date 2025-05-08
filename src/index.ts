
//Interface para o ponto de entrega
interface PontoEntrega {
    id:string | number;
    x: number;
    y: number;
}

//função para validar se o ponto de entrega é válido
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

//função para calcular a distância entre dois pontos de entrega
function otimizarRota(pontos: PontoEntrega[]): { rota: (string | number)[], distanciaTotal: number } {
    if (pontos.length === 0) return { rota: [], distanciaTotal: 0};

    const pontosVisitados = new Set<string | number>();
    const rota: (string | number)[] = [];
    let pontoAtual = pontos[0];
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

    distanciaTotal += calcularDistancia(pontoAtual, pontos[0]);
    rota.push(pontos[0].id); // Retorna ao ponto inicial

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
    console.log("Rota otimizada:", resultado.rota);
    console.log("Distância total:", resultado.distanciaTotal.toFixed(2));
} catch (error) {
    console.error("Erro ao otimizar a rota:", (error as Error).message);
}