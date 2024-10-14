import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  //Mascaras
  public maskData(value: string): string {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d)/, '$1/$2') // dd/
      .replace(/(\d{2})(\d)/, '$1/$2') // dd/mm/
      .substring(0, 10); // Limita a 10 caracteres
  }

  public maskTelefone(value: string): string {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .substring(0, 15);
  }

  public maskCPF(value: string): string {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, '$1.$2') // 999.
      .replace(/(\d{3})(\d)/, '$1.$2') // 999.999.
      .replace(/(\d{3})(\d)/, '$1-$2') // 999.999.999-
      .substring(0, 14); // Limita a 14 caracteres
  }
  public maskCartao(value: string): string {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .substring(0, 16); // Limita a 14 caracteres
  }

  public maskCEP(value: string): string {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{5})(\d)/, '$1-$2') // 99999-
      .substring(0, 9); // Limita a 10 caracteres
  }

  public maskVencimento(value: string): string {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d)/, '$1/$2') // dd/
      .substring(0, 5); // Limita a 10 caracteres
  }
  public maskCRV(value: string): string {
    return value
      .replace(/\D/g, '')
      .substring(0, 3);
  }
  public maskNome(value: string): string {
    console.log(value.length);
    
    return value
      .substring(0, 25);
  }



  //validações
  public validarEmail(value: string) {
    let usuario = value.substring(0, value.indexOf("@"));
    let dominio = value.substring(value.indexOf("@")+ 1, value.length);

    if (
      (usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)
    ) {
      return false;
    }
    return true;
  }

  public validaCPF(cpf: string): boolean {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPF inválido
    }

    // Validação dos dígitos verificadores
    let sum = 0;
    let remainder: number;

    // Valida o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Reseta a soma para validar o segundo dígito
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    return remainder === parseInt(cpf.charAt(10)); // Retorna verdadeiro ou falso
  }

  public identificarBandeiraCartao(cartao: string): string {
    const bandeiras: { [key: string]: { prefixos: string[]; digitos: number[] } } = {
        'Visa': { prefixos: ['4'], digitos: [13, 16, 19] },
        'MasterCard': { prefixos: ['51', '52', '53', '54', '55'], digitos: [16] },
        'American Express': { prefixos: ['34', '37'], digitos: [15] },
        'Discover': { prefixos: ['6011', '65'], digitos: [16] },
        'JCB': { prefixos: ['35'], digitos: [16] },
        // Adicione mais bandeiras conforme necessário
    };

    const numero = cartao.replace(/\D/g, ''); // Remove caracteres não numéricos

    for (const [bandeira, { prefixos, digitos }] of Object.entries(bandeiras)) {
        for (const prefixo of prefixos) {
            if (numero.startsWith(prefixo) && digitos.includes(numero.length)) {
                return bandeira;
            }
        }
    }

    return 'Bandeira desconhecida';
}
}
