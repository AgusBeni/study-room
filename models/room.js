import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  room: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Room = models.Room || model("Room", RoomSchema);

export default Room;
