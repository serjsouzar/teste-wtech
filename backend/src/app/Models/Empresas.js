import mongoose from "mongoose";

const Empresas = mongoose.Schema(
  {
    name: {type: String, required: true},
    doc:  {type: String, required: true},
    about: {type: String, required: true},
    active: {type:Boolean, required: false},
    site: {type: String, required: false}  
  },

  {
    timestamps: true,
  }

)

export default mongoose.model('empresas', Empresas)