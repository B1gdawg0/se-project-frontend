'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const go = useRouter()

  go.push("/auth")
  
  return (
    <div>
      <h1>Hello World?</h1>
    </div>
  );
}
