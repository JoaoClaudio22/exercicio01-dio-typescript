import { CompanyAccount } from "./Class/CompanyAccount";
import { NewTypeAccount } from "./Class/NewTypeAccount";
import { PeopleAccount } from "./Class/PeopleAccount";



const newPeopleAccount:PeopleAccount = new PeopleAccount(1524,1,"Joao",true)
console.log(newPeopleAccount)
newPeopleAccount.deposit(5000)
console.log(newPeopleAccount)
newPeopleAccount.loanPersonal(4000)
console.log(newPeopleAccount)


const newCorporateAccount: CompanyAccount = new CompanyAccount("12CB2",3,"Rodosul",true)
console.log(newCorporateAccount)
newCorporateAccount.deposit(10000)
newCorporateAccount.checkBalance()
newCorporateAccount.getLoan(50000,3)


const newTypeAccount: NewTypeAccount = new NewTypeAccount(3,"Trops",true)
newTypeAccount.depoist(100);










