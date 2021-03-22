import * as Yup from "yup";

export const sellerValidator=Yup.object().shape(
  {
  seller: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      NIP: Yup.number()
        .typeError("NIP must be a number")
        .required("NIP is required"),
    })
  }
)

export const buyerValidator = Yup.object().shape({
  buyer: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    NIP: Yup.number()
      .typeError("NIP must be a number")
      .required("NIP is required"),
  }),
});

export const productsValidator = Yup.object().shape({
  numberOfProducts: Yup.number()
    .positive()
    .required("Number of products is required"),
  products: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      amount: Yup.number()
        .positive()
        .integer("amount must be integer")
        .typeError("amount must be a number")
        .required("amount is required"),
      tax: Yup.number()
        .positive()
        .typeError("tax must be a number")
        .required("tax is required"),
      price: Yup.number()
        .positive()
        .typeError("price must be a number")
        .required("price is required"),
    })
  ),
});

export const companyDataValidator=Yup.object().shape(
  {
    ...sellerValidator.fields,
    accountNumber: Yup.string().required("Account number is required")
  }
)

export const validationPrepaymentInvoice = Yup.object().shape({
    ...sellerValidator.fields,
    ...buyerValidator.fields,
    prepayment: Yup.number()
      .positive()
      .required("Prepayment amount is required"),
  });

export const validationInvoice = Yup.object().shape({
  ...sellerValidator.fields,
  ...buyerValidator.fields,
  ...productsValidator.fields,
});

export const validationBill = Yup.object().shape({
  ...sellerValidator.fields,
  ...productsValidator.fields,
});