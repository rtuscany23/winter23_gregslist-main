import { CarsController } from './Controllers/CarsController.js'
import { HousesController } from './Controllers/HousesController.js'
import { BotsController } from './Controllers/BotsController.js'


class App {
  carsController = new CarsController() // (AKA) constructor
  botsController = new BotsController()
  housesController = new HousesController()
}

window["app"] = new App();
