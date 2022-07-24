// STRETCH
const cars = [
    { 
        vin: "1111111111111",
        make:"toyota",
        model: "prius",
        mileage: 215000,
        title:"clean",
        transmission: "manual",
    },
    { 
        vin: "222222222222",
        make:"toyota",
        model: "corolla",
        mileage: 115000,
        title:"salvage",
       
    },
    { 
        vin: "33333333333",
        make:"ford",
        model: "focus",
        mileage: 15000,
      
        
    },
]
exports.seed = async function(knex){
await knex("cars").truncate()
await knex("cars").insert(cars)
}