import mongoose from "mongoose";

export const connectToDatabase = (uri: string) => {
  mongoose
    .connect(uri, {
      dbName: "cipher_safe",
    })
    .then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
