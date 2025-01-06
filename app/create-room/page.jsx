"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateRoomn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    room: "",
    desc: "",
  });

  const CreateRoom = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/room/new", {
        method: "POST",
        body: JSON.stringify({
          room: post.room,
          userId: session?.user.id,
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
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={CreateRoom}
    />
  );
};

export default CreateRoomn;
