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

