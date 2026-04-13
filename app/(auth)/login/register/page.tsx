export default function Register() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Register Page</h1>

      <input placeholder="Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />

      <button>Create Account</button>
    </div>
  );
}