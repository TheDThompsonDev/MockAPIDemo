import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/banking", () => {
      return {
        accounts: [
          { id: 1, name: "Checking", amount: "amount", total: "1,300" },
          { id: 2, name: "Savings", amount: "amount", total: "3,600" },
          { id: 3, name: "401k", amount: "amount", total: "45,900" },
        ],
      }
    })

    this.get("/rentals", () => {
      return {
        accounts: [
          { id: 1, name: "Rental #1", amount: "amount", total: "1,300" },
          { id: 2, name: "Rental #2", amount: "amount", total: "3,600" },
          { id: 3, name: "Rental #3", amount: "amount", total: "45,900" },
        ],
      }
    })
  },
})
