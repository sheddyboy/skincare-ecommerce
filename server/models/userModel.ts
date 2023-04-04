import { Document, model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    orders: {
      type: [Types.ObjectId],
      required: false,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
