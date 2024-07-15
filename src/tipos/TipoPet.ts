import EnumEspecie from "../enum/especia";

type TipoPet = {
    id: number,
    nome: string,
    especie: EnumEspecie, //Uso do enum para posteriormente ficar mais fácil verificar seu tipo
    idade: number, 
    adotado: boolean
}

export default TipoPet;