export interface RentalListModel{
    id:number,
    rentedKilometer: number,
    pickUpCityName:string,
    pickUpCityId: number,
    returnCityName:string,
    returnCityId:number,
    rentDate: Date,
    returnedKilometer: number,
    returnDate: Date,
    email:string,
    carDailyPrice: number,
    carId:number,
    promosyonId:number
}
