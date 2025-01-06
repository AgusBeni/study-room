const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full fkex-start flex-col">
      <p className="desc text-left max-w-md">{type} Room</p>
      <form
        onSubmit={handleSubmit}
        className="flex-1 border border-black bg-white/20 bg-clip-padding p-6 w-full h-fit"
      >
        <label>
          <span className="font-bold text-base">Room name</span>
          <input
            value={post.room}
            onChange={(e) => setPost({ ...post, room: e.target.value })}
            placeholder="Room name..."
            required
            className="w-full flex mt-2 p-3 text-sm"
          />
        </label>

        <label>
          <span className="font-bold text-base">Description</span>
          <input
            value={post.desc}
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
            placeholder="Desc..."
            required
            className="w-full flex mt-2 p-3 text-sm"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">

          <button href="/" className="button_white">
            Cancel
          </button>

          <button type="submit" disabled={submitting} className="button1_color">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
