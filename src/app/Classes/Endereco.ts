export class Endereco {
    private id: number;
    private id_pessoa: number;
    private CEP: string;
    private rua: string;
    private numero: string;
    private complemento: string;
    private cidade: string;
    private estado: string;

    constructor(
        id: number = 0,
        id_pessoa: number = 0,
        CEP: string = 'asda',
        rua: string = '',
        numero: string = '',
        complemento: string = '',
        cidade: string = '',
        estado: string = ''
    ){
        this.id = id;
        this.id_pessoa = id_pessoa;
        this.CEP = CEP;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.estado = estado;
    }

    //Get
    getId(): number {
        return this.id;
    }
    getId_pessoa(): number {
        return this.id_pessoa;
    }
    getCEP(): string {
        return this.CEP;
    }
    getRua(): string {
        return this.rua;
    }
    getNumero(): string {
        return this.numero;
    }
    getComplemento(): string {
        return this.complemento;
    }
    getCidade(): string {
        return this.cidade;
    }
    getEstado(): string {
        return this.estado;
    }

    //set
    setId(id: number): void {
        this.id = id;
    }
    setId_pessoa(id_pessoa: number): void {
        this.id_pessoa = id_pessoa;
    }
    setCEP(CEP: string): void {
        this.CEP = CEP;
    }
    setRua(rua: string): void {
        this.rua = rua;
    }
    setNumero(numero: string): void {
        this.numero = numero;
    }
    setComplemento(complemento: string): void {
        this.complemento = complemento;
    }
    setCidade(cidade: string): void {
        this.cidade = cidade;
    }
    setEstado(estado: string): void {
        this.estado = estado;
    }
}