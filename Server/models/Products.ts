import * as mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    subCategory:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    currency:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    image:{
        type:[String],
        require:true
    },
    averageRating:{
        type:Number,
        require:false
    },
    totalrRviews:{type:Number,require:false},
    sustainabilityAttributes: {
        type: [ // Array of objects
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: false, // Optional description
            },
          },
        ],
        default: [], // Set default value to an empty array
      },
},{timestamps:true});


module.exports = mongoose.model("Products",productSchema)