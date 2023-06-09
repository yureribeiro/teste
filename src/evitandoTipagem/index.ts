function sendSpaceships( spaceship: {pilot: string, copilot?: string} ) {
  // restante da função
  // repare que adicionei um '?' ao 'copilot' para indicar que o copilot não é Obrigatório
}

sendSpaceships({pilot: 'yure', copilot: 'joao'})

sendSpaceships({pilot: 'Lucas'}) //caso NÃO ouvesse o ponto de interrogação o TS reclamaria pois 'copiloto' seria obrigatório..


// -------------- ANY 
// não é recomendado usar o 'any' mas ele serve como evitar tipagem.

let input: any //O tipo 'any' praticamente desabilita o TS, vai aceitar qualquer tipo funcionando como um JS padrão.

input = 'Teste'
input = 20
input = []

let text: string

text = input



export {}