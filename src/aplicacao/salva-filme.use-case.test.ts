import { describe, test, expect } from "vitest";
import SalvaFilme from './salva-filme.use-case'
import BancoEmMemoria from '../infra/banco/banco-em-memoria'
describe("testando", ()=>{
    test("Deve salvar um filme",async ()=>{
        //entrada
        const filme ={
        id:1,
        titulo:"trembolona",
        descricao:"tome o suco",
        foto:"test"
    }
        //processamento
        const bancoEmMemoria = new BancoEmMemoria()
        const salvaFilme = new SalvaFilme(bancoEmMemoria)
        const {id, titulo, descricao, foto} = filme
        const resultado = await salvaFilme.execute({id,titulo,descricao,foto})
        //resultado
        expect(resultado).toEqual(filme)
    })
})