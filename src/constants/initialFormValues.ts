interface ISeller{
  seller:{
    name:string,
    address:string,
    NIP:string,
  }
}

interface IBuyer{
  buyer: {
      name: string,
      address: string,
      NIP: string,
    }
}

interface IProducts{
  numberOfProducts: string,
  products: Array<Object>,
}

interface IPrepaymentInvoice extends IBuyer,ISeller{
    prepayment: string,
}

export const initialPrepaymentInvoice:IPrepaymentInvoice = {
    seller:{
      name: "",
      address: "",
      NIP: "",
    },
    buyer: {
      name: "",
      address: "",
      NIP: "",
    },
    prepayment: "",
  };

interface IinitialInvoice extends ISeller,IBuyer,IProducts{}

export const initialInvoice:IinitialInvoice = {
    seller: {
      name: "",
      address: "",
      NIP: "",
    },
    buyer: {
      name: "",
      address: "",
      NIP: "",
    },
    numberOfProducts: "",
    products: [],
  };

interface IinitialBill extends ISeller,IProducts{}
  
export const initialBill:IinitialBill = {
    numberOfProducts: "",
    products: [],
    seller: {
    name: "",
    address: "",
    NIP: "",
    }
  };

interface IcompanyInitialData extends ISeller{
  accountNumber:string,
}

export const companyInitialData:IcompanyInitialData={
  seller: {
      name: "",
      address: "",
      NIP: "",
    },
  accountNumber: "",
}