import PostForm from "../components/post/PostForm";

function Post() {
  return (
    <>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          marginBottom: 4,
        }}
      >
        Share food
      </div>

      <div
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          marginBottom: 16,
        }}
      >
        Fill in the details so someone nearby can pick it up.
      </div>

      <PostForm />
    </>
  );
}

export default Post;