"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateRoom = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const roomId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    room: "",
    desc: "",
  });
  console.log("CHECKKKK " + roomId);
  useEffect(() => {
    const getRoomDetails = async () => {
      const response = await fetch(`/api/room/${roomId}`);
      const data = await response.json();

      setPost({
        room: data.room,
        desc: data.desc,
      });
    };

    if (roomId) getRoomDetails();
  }, [roomId]);

  const UpdateRoom = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!roomId) return alert("Room ID not found!");

    try {
      const response = await fetch(`/api/room/${roomId}`, {
        method: "PATCH",
        body: JSON.stringify({
          room: post.room,
          desc: post.desc,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={UpdateRoom}
    />
  );
};

export default UpdateRoom;
