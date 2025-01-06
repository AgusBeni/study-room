import Room from "@models/room";
import { connectToDB } from "@database/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const awaitedParams = await params;
    console.log(awaitedParams.id);
    const room = await Room.findById(awaitedParams.id).populate("creator");

    if (!room) return new Response("Room not found!", { status: 404 });

    return new Response(JSON.stringify(room), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Unable fetrch room"), {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  const { room, desc } = await request.json();

  try {
    await connectToDB();

    const awaitedParams = await params;
    const Room = await Room.findById(awaitedParams.id);

    if (!Room) return new Response("Room not found", { status: 404 });

    Room.room = room;
    Room.desc = desc;

    await Room.save();

    return new Response(JSON.stringify(Room), { status: 200 });
  } catch (error) {
    return new Response("Unable to update room", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const awaitedParams = await params;

    await Room.findByIdAndDelete(awaitedParams.id);

    return new Response("Room deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Unable to delete room", { status: 500 });
  }
};
