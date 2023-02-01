import { appState } from "../AppState.js"
import { Bot } from "../Models/Bot.js"
import { saveState } from "../Utils/Store.js"
class BotsService {

  createBot(formData) {
    // FYI its gonna get more complex later.... 
    // so just get use to the pattern this week 
    let bot = new Bot(formData)
    appState.bots.push(bot)
    appState.emit('bots')
    saveState('bots', appState.bots)

  }

 }
export const botsService = new BotsService()