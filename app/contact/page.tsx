import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link href="/about">Go to About</Link>
      <Link href="/">Go to Home</Link>
    </div>
  );
}
