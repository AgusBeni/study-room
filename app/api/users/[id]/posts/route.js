import { connectToDB } from "@utils/database";
import Room from "@models/room";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const awaitedParams = await params;

    const rooms = await Room.find({
      creator: awaitedParams.id
    }).populate("creator");

    return new Response(JSON.stringify(rooms), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch all rooms"), {
      status: 500,
    });
  }
};
