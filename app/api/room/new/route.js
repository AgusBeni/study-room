import { connectToDB } from "@utils/database";
import Room from "@models/room";

export const POST = async (req) => {
  const { userId, room, desc } = await req.json();

  try {
    await connectToDB();

    const newRoom = new Room({
      creator: userId,
      room,
      desc,
    });

    await newRoom.save();

    return new Response(JSON.stringify(newRoom), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new room", { status: 500 });
  }
};
