//Dio Banking
export abstract class Account {
    
    private readonly accountNumber:number;
    private readonly  name: string; 
    private balance:number = 0;
    private isActive: boolean;



    public getAccountNumber():number {
        return this.accountNumber
    }

    public getName():string {
        return this.name
    }


    public getBalance():number {
        return this.balance
    }

    public setBalance(balance: number):void {
        this.balance = balance
    }


    constructor(accountNumber:number, name:string, isActive:boolean){
        this.accountNumber = accountNumber;
        this.name = name;
        this.isActive = isActive;
        
    }


    deposit(value:number):void{

        if(this.validadeStatus()){
            console.log(`Voce fez um deposito de R$${value}`)
            this.balance += value; 
        }else{
            console.log("Acesso negado! Conta está inativa")
        }

    }

    withdraw(value:number):void{
        if(this.validadeStatus()){
            if(this.balance <= value){
                console.log("Saldo Insuficiente")
            }else{
                console.log(`Voce sacou R$${value}`)
                this.balance -= value; 
            }
        }else{
            console.log("Acesso negado! Conta está inativa")
        }
        
    }

    checkBalance():void{
        console.log(`Voce possui atualmente R$${this.balance} de saldo`)
    }


    public validadeStatus(): boolean{
        if(this.isActive){
            return true;
        }else{
            throw new Error("Conta esta inativa");
        }
    }
}