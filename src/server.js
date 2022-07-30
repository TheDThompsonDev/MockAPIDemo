import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/banking", () => {
      return {
        accounts: [
          { id: 1, name: "Checking", total: "1,300" },
          { id: 2, name: "Savings", total: "3,600" },
          { id: 3, name: "401k", total: "45,900" },
        ],
      }
    })

    this.get("/rentals", () => {
      return {
        accounts: [
          { id: 1, name: "Rental #1", total: "1,300" },
          { id: 2, name: "Rental #2", total: "3,600" },
          { id: 3, name: "Rental #3", total: "45,900" },
        ],
      }
    })

    this.get("/rewardsPoints", () => {
      // return new Response(500)
      return {
        accounts: [
          {
            id: 1,
            name: "reward points",
            total: "300",
          },
        ],
      }
    })
  },
})
