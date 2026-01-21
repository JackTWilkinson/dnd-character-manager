import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* TODO redirect to the login page if not authenticated */}
      {/* TODO if authenticated direct to the user homepage and protect this somehow */}
    </div>
  );
}
