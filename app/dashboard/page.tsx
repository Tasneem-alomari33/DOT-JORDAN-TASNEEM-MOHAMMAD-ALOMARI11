import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My Next App </h1>
      <p>This project demonstrates routing in Next.js</p>

      <hr />

      <h3>Pages:</h3>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
        <li><Link href="/blog/1">Blog 1</Link></li>
      </ul>
    </div>
  );
}