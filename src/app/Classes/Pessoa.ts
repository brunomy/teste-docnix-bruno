export class Pessoa {
    private id: number;
    private foto: string;
    private nome: string;
    private sobrenome: string;
    private dataDeNascimento: string;
    private email: string;
    private telefone: string;
    private CPF: string;
    private nomeDaEmpresa: string;
    private cargo: number;
    private credito: number;

    constructor(
        id: number = 0,
        foto: string = '',
        nome: string = '',
        sobrenome: string = '',
        dataDeNascimento: string = '',
        email: string = '',
        telefone: string = '',
        CPF: string = '',
        nomeDaEmpresa: string = '',
        cargo: number = 0,
        credito: number = 0
    ) {
        this.id = id;
        this.foto = foto;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = dataDeNascimento;
        this.email = email;
        this.telefone = telefone;
        this.CPF = CPF;
        this.nomeDaEmpresa = nomeDaEmpresa;
        this.cargo = cargo;
        this.credito = credito;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getFoto(): string {
        return this.foto;
    }

    getNome(): string {
        return this.nome;
    }

    getSobrenome(): string {
        return this.sobrenome;
    }

    getDataDeNascimento(): string {
        return this.dataDeNascimento;
    }

    getEmail(): string {
        return this.email;
    }

    getTelefone(): string {
        return this.telefone;
    }

    getCPF(): string {
        return this.CPF;
    }

    getNomeDaEmpresa(): string {
        return this.nomeDaEmpresa;
    }

    getCargo(): number {
        return this.cargo;
    }

    getCredito(): number {
        return this.credito;
    }

    // Setters
    setFoto(foto: string): void {
        this.foto = foto;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    setDataDeNascimento(dataDeNascimento: string): void {
        this.dataDeNascimento = dataDeNascimento;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    setCPF(CPF: string): void {
        this.CPF = CPF;
    }

    setNomeDaEmpresa(nomeDaEmpresa: string): void {
        this.nomeDaEmpresa = nomeDaEmpresa;
    }

    setCargo(cargo: string): void {
        this.cargo = Number(cargo);
    }

    setCredito(credito: number): void {
        this.credito = credito;
    }
}