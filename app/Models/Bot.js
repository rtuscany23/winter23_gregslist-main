

export class Bot { 
  constructor(data){
    this.id = data.id
    this.type = data.type
    this.batteryCapacity = data.batteryCapacity
    this.price = data.price
    this.description = data.description

  }
  
  get BotCardTemplate() {
    return /*html*/`
    <div class="col-md-4 my-3">
    <div class="card elevation-2 car" onclick="app.botsController.setActiveCar('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
      <img
        src="https://robohash.org/${this.id}"
        alt="${this.id}" class="rounded">
      <p><b>${this.type} ${this.batteryCapacity} - $${this.price}</b></p>
    </div>
    </div>
    `
  }


  
  static BotForm() {
    return /*html*/`
    <form onsubmit="app.botsController.handleFormSubmit()">

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="id" required minlength="3" maxlength="20">
          <label for="id">Bot ID</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="type" required>
          <label for="type">Bot Type</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="batteryCapacity" required min="1" max="999999">
          <label for="batteryCapacity">Battery Capacity</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="price" required min="0">
          <label for="price">Price</label>
        </div>

        <div class="form-floating">
          <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
          <label for="description">Description</label>
        </div>

        <div class="d-flex my-4 gap-5 align-items-center">
          <button class="btn" type="reset">Cancel</button>
          <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
        </div>

      </form>
    `
  }

}