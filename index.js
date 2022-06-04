const redux = require ('redux')
const prompts = require ('prompts')

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

const todosOsReducers = redux.combineReducers({
    historicoMatricula,
    historicoVestibular
})

const store = redux.createStore(todosOsReducers)

const main = async () => {
    const menu = "1. Realizar Vestibular\n2. Realizar Matricula\n3. Visualizar meu status\n4. Visualizar a lista de aprovados\n0. Sair"
    let response
    do{
        response = await prompts({
            type: "number",
            name: "op",
            message: menu
        })

        switch(response.op){
            case 1:{
                let nome = await prompts({type:"text",name:"valor",message: "Informe o Nome: "})
                let cpf = await prompts({type:"number",name:"valor",message: "Informe o CPF: "})
                const acao = realizarVestibular(nome.valor, cpf.valor)
                store.dispatch(acao)
                break
            }
            case 2:{
                let cpf = await prompts({type:"number",name:"valor",message: "Informe o CPF: "})
                let status = store.getState().historicoVestibular.find(e => e.cpf == cpf && e.nota >= 6) ? "M" : "NM"
                store.dispatch(realizarMatricula(cpf, status))
                break
            }
            case 3:
                break
            case 4:
                break
        }
    } while (response.op !== 0)
}