//Criadora de ação para realizar o vestibular
const realizarVestibular = (nome, cpf) => {
    const entre6e10 = Math.random() <= 0.7
    const nota = entre6e10 ? 6 + Math.random() * 4 : Math.random() * 6
    return {
        type: "REALIZAR_VESTIBULAR",
        payload: {
            nome,
            cpf,
            nota
        }
    }
}

//Criadora de ação para realizar a matricula
const realizarMatricula = (cpf, status) => {
    return {
        type: "REALIZAR_MATRICULA",
        payload: {
            cpf,
            status
        }
    }
}

//Reducer para controle do historico do vestibular
const historicoVestibular = (historicoVestibularAtual = [], acao) => {
    if(acao.type === "REALIZAR_VESTIBULAR"){
        return [...historicoVestibularAtual, acao.payload]
    }

    return historicoVestibularAtual
}

//Reducer para controle do historico de matricula
const historicoMatricula = (historicoMatriculaAtual = [], acao) => {
    if(acao.type === "REALIZAR_MATRICULA"){
        return [...historicoMatriculaAtual, acao.payload]
    }

    return historicoMatriculaAtual
}