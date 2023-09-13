import mongoose, { SchemaTypes } from 'mongoose'

const { Schema } = mongoose;

// Modelo Post
const PostSchema = new Schema({
    title: { type: String },
    content: { type: String, maxlength: 2000 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    user_authorId: { type: Schema.Types.ObjectId, ref:'User' },
    post_categoryId: [{ type:Schema.Types.ObjectId, ref:"Post"},],
  });
  
  export const Post = mongoose.model('Post', PostSchema);
  
  // Modelo Category
  const CategorySchema = new Schema({
    category_name: { type: String },
  });
  
  export const Category = mongoose.model('Category', CategorySchema);