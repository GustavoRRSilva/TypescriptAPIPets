import EnumEspecie from "../enum/especie";

type TipoPet = {
    id: number,
    nome: string,
    especie: EnumEspecie, //Uso do enum para posteriormente ficar mais fácil 
    dataDeNascimento: Date, 
    adotado: boolean
}

export default TipoPet;