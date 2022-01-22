export interface UpdateRentalModel {
  id: number;
  returnedKilometer: number;
  returnDate: Date;
  pickUpCityId: number;
  returnCityId: number;
  rentedKilometer: number;
  rentDate: Date;
  customerId: number;
  carId: number;
  promosyonCode:string
}
