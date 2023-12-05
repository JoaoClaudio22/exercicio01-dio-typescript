import { Account } from "./Account";

export class NewTypeAccount extends Account {
    depoist(value:number){
        if(this.validadeStatus()){
            console.log(`Voce fez um deposito de R$${value + 10}`)
            this.setBalance( value + 10) 
        }else{
            console.log("Acesso negado! Conta está inativa")
        }
    }
}