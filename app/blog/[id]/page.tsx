export default function Blog({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Post</h1>
      <p>You are viewing post number: {params.id}</p>
    </div>
  );
}
