import { model, Schema, Types } from "mongoose";

const orderSchema = new Schema(
  {
    user_id: {
      type: Types.ObjectId,
      required: true,
    },
    items: {
      type: [{ product: String, qty: Number, price: Number }],
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("Order", orderSchema);
