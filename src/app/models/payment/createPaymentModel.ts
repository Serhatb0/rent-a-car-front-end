export interface CreatePaymentModel{
    paymentDate:Date,
    rentalId:number,
    promosyonId: number
	expirationDate:Date;
	cardNumber:number;
	cardName:string;
	cvv:number;
}