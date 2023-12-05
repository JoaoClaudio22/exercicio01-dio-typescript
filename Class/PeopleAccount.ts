import { Account } from "./Account";

export class PeopleAccount extends Account {
    peopleId: number;

    loanConsiged(value:number):void{
        if(this.validadeStatus()){
            if(this.getBalance() > value){
                const TAX = 0.02;

                let totalFees = (value * TAX) * 12;
                console.log(`Voce efetuou um emprestimo de R$${value}\nSaldo atual de R${this.getBalance()}\nVoce pagará um total de R$${totalFees} no fim de 12 meses`)
                this.setBalance(value)
            }else{
                console.log("Saldo insuficiente")
            }
        }else{
            console.log("Emprestimo negado! Conta inativa")
        }
    }

    loanPersonal(value:number):void{
        if(this.validadeStatus()){
            if(this.getBalance() > value){
                this.setBalance(value)
                const TAX = 0.08;

                let totalFees = value + (value * TAX) * 12;
                console.log(`Voce efetuou um emprestimo de R$${value}\nSaldo atual de R$${this.getBalance()}\nVoce pagará um total de R$${totalFees} no fim de 12 meses`)
                
            }else{
                console.log("Saldo insuficiente")
            }
        }else{
            console.log("Emprestimo negado! Conta inativa")
        }
    }

    constructor(peopleId:number,id:number, name:string, isActive:boolean){
        super(id,name,isActive)
        this.peopleId = peopleId;
    }

}