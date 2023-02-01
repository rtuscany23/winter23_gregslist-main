import { appState } from "../AppState.js"
import { botsService } from "../Services/BotsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"
import { Bot } from "../Models/Bot.js"


function _drawBots() {
  let template = ''
  appState.bots.forEach(c => template += c.BotCardTemplate)
  setHTML('listings', template)
}

const ListingButtonTemplate = `<button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#listingForm" aria-controls="listingForm" id="add-listing-button">Add Bot</button>`


export class BotsController {

  constructor() {
    console.log('Hello this is the bots Controller')
  }

  generateRandomBot(){

  }

  show() {
    console.log('bot')
    setHTML('listingButton',ListingButtonTemplate)

    setText('add-listing-button', 'Need a Bot?')
    setText('listingFormLabel', 'Cheap bots')

    setHTML('the-actual-form', Bot.BotForm())

    _drawBots()
  }

    handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)

      botsService.createBot(formData)

      console.log(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }
}
