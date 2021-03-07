/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import Flight from './models/Flights';

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function connectToDatabase() {
  try {
    await mongoose.connect(
      'mongodb://localhost/traveloka_clone_flight_service',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
    console.log('connect thanh cong');
  } catch (error) {
    console.log(`ket noi khong thanh cong: ${error.message}`);
  }
}
connectToDatabase();

app
  .route('/')
  .get((req, res) => {
    res.json({ message: 'HelloJSON' });
  })
  .post(async (req, res) => {
    try {
      const flight = new Flight({ ...req.body });
      await flight.save();
      res
        .status(201)
        .send(`Da dang ky chuyen bay thanh cong ${flight.flightid}`);
    } catch (error) {
      res
        .status(500)
        .send(`Dang ky chuyen bay khong thanh cong${error.message}`);
    }
  });
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Flight service is running on ${PORT}`));
