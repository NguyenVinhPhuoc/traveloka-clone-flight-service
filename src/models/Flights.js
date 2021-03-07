import mongoose from 'mongoose';

const { Schema } = mongoose;

const flightSchema = new Schema({
  customersContactDetail: {
    contact: {
      type: {
        contactLastName: { type: String, maxlength: 250, require: true },
        contactMiddleFirstName: { type: String, maxlength: 250, require: true },
        contactPhone: { type: String, maxlength: 15, require: true },
        contactEmail: { type: String, maxlength: 250, require: true },
      },
      require: true,
    },

    customers: {
      type: [
        {
          customerTitle: { type: String, maxlength: 250, require: true },
          customerLastName: { type: String, maxlength: 250, require: true },
          customerMiddleFirstName: {
            type: String,
            maxlength: 250,
            require: true,
          },
          customerDateOfBirth: { type: Date, require: true },
        },
      ],
      require: true,
    },
  },
  flightTime: {
    takeoffTime: { type: Date, require: true },
    laddingTime: { type: Date, require: true },
    totalFlightTime: { type: Date, require: true },
    flightDay: { type: Date, require: true },
    require: true,
  },
  flightDesination: {
    flightFrom: { type: String, require: true },
    flightTo: { type: String, require: true },
    departureAirport: { type: String, require: true },
    destinationAirport: { type: String, require: true },
    middleAirport: [String],
    require: true,
  },
  plane: {
    planeBrand: { type: String, require: true },
    planeId: { type: String, require: true },
    planeName: { type: String, require: true },
    planeSeatLayout: { type: String, require: true },
    planeSeatPitch: { type: String, require: true },
    require: true,
  },
  baggage: {
    flightBaggage: { type: Number, require: true },
    cabinBaggage: { type: Number, require: true },
    require: true,
  },
  totalPrice: {
    ticketPrice: { Number },
    seatPrice: { Number },
    foodPrice: { Number },
    travelProtectionPrice: { Number },
    baggageProtectionPrice: { Number },
  },
});

const Flight = mongoose.model('flight', flightSchema);

export default Flight;
