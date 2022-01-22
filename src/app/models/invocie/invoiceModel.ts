export interface InvoiceModel{
    firstName: string,
    lastName: string,
    email: string,
    dailyPrice: number,
    rentDate: Date,
    returnedDate: Date,
    totalPrice:number
    additionalTotalPrice:number
    creationDate: Date,
    additonalServices: [],
    identityNumber: number
    rentTotalPrice:number
    discountAmount:number

}