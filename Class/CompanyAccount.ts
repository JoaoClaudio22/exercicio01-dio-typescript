import { Account } from "./Account";

export class CompanyAccount extends Account{
    private corporateId: string;


    constructor(corporateId:string, id:number,name:string,isActive:boolean){
        super(id,name,isActive)
        this.corporateId = corporateId
    }


    getLoan(value:number, years:number):void{
        if(this.validadeStatus()){
            if(this.getBalance() > value){
                this.setBalance(value);

                const TAX = 0.2

                let totalFees = value + (value * TAX) * years

                console.log(`Voce efetuou um emprestimo de R$${value}\nSaldo atual de R$${this.getBalance()}\nVoce pagará um total de R$${totalFees} no fim de ${years} anos`)

            }else{
                console.log("Saldo insuficiente")
            }
        }
    }

}