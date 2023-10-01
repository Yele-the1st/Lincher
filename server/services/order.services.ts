import orderModel from "../models/order.model";

// create new order
export const newOrder = async (data: any) => {
  const order = await orderModel.create(data);
  return order;
};
