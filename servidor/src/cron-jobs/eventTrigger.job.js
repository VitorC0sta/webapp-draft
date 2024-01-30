const Vehicles = require("../infra/database/entities/vehicles");
const EventCreateUseCase = require("../modules/events/usecases/eventCreate.usecase");

async function eventTrigger() {
  const events = ['Sonolência', 'Cinto de Segurança', 'Bêbado', 'Condução perigosa' ];

  const random = ( max, min=1 ) => Math.floor(Math.random() * (max - min) + min);

  const vehicleAmount = await Vehicles.findAll();
  
  const idVehicle = random(vehicleAmount.length);
  const eventName = events[random(events.length, 0)];

  await new EventCreateUseCase().execute({ idVehicle, eventName });

}

module.exports = eventTrigger;