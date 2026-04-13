import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>

      <Link href="/dashboard/settings">Go to Settings</Link>
    </div>
  );
}