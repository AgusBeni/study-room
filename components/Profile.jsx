import RoomCard from "./RoomCard";

const Profile = ({ desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
  
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 room_layout">
        {data.map((post) => (
          <RoomCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
