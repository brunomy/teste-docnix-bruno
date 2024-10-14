export class Cartao {
    private id: number;
    private id_pessoa: number;
    private numero: string;
    private nome: string;
    private vencimento: string;
    private cvc: string;

    constructor(
        id: number = 0,
        id_pessoa: number = 0,
        numero: string = '',
        nome: string = '',
        vencimento: string = '',
        cvc: string = ''
    ){
        this.id = id;
        this.id_pessoa = id_pessoa;
        this.numero = numero;
        this.nome = nome;
        this.vencimento = vencimento;
        this.cvc = cvc;
    }

    // Set
    setNumero(numero: string) : void {
        this.numero = numero;
    }
    setNome(nome: string) : void {
        this.nome = nome;
    }
    setVencimento(vencimento: string) : void {
        this.vencimento = vencimento;
    }
    setCvc(cvc: string) : void {
        this.cvc = cvc;
    }

    // Get
    getId() : number {
        return this.id;
    }
    getNumero() : string {
        return this.numero;
    }
    getNome() : string {
        return this.nome;
    }
    getVencimento() : string {
        return this.vencimento;
    }
    getCvc() : string {
        return this.cvc;
    }
}