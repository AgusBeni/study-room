import { connectToDB } from "@database/database";
import Room from "@models/room";

export const GET = async (request) => {
  try {
    await connectToDB();
    const rooms = await Room.find({}).populate("creator");

    return new Response(JSON.stringify(rooms), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch all rooms"), {
      status: 500,
    });
  }
};
