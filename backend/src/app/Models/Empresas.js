import mongoose from "mongoose";

const Empresas = mongoose.Schema(
  {
    name: {type: String, required: true},
    doc:  {type: String, required: true},
    about: {type: String, required: false},
    active: {type:Boolean, required: true},
    site: {type: String, required: false}  
  },

  {
    timestamps: true,
  }
)

export default mongoose.model('empresas', Empresas)