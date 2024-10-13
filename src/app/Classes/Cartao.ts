export class Cartao {
    private id: number;
    private numero: string;
    private nome: string;
    private vencimento: string;
    private crv: string;

    constructor(
        id: number = 0,
        numero: string = '',
        nome: string = '',
        vencimento: string = '',
        crv: string = ''
    ){
        this.id = id;
        this.numero = numero;
        this.nome = nome;
        this.vencimento = vencimento;
        this.crv = crv;
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
    setCrv(crv: string) : void {
        this.crv = crv;
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
    getCrv() : string {
        return this.crv;
    }
}