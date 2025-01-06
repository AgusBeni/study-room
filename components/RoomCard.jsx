"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const RoomCard = ({ post, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="flex-1 border border-black bg-white/20 bg-clip-padding p-6 w-full h-fit">
     
      <h1>{post.room}</h1>

      <p className="my-4 text-sm">{post.desc}</p>

      {session?.user.id === post.creator._id && pathName === "/" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="button1_color"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="button1_color"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
