import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  slug: {
    type: String,
    required: true,
 
  },
  description: {
    type: String,
    required: true,
  },
   price: {
    type: Number,
    required: true,
 
  },
  category: {
    type: mongoose.ObjectId,
    ref: 'Category', // Assuming you have a Category model
    required: true,
  },
 
  quantity: {
    type: Number,
    required: true,

  },
  photo: {
    data: Buffer, // You can store the file path or URL here
     contentType:String // You may provide a default image
  },
  shipping: {
    type:Boolean,
}
},{timestamps:true});

export default mongoose.model('Products',productSchema)
