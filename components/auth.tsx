import {signIn, signOut } from "@/auth";

export async function SignInButton() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github");
            }}
        >
        <button className="inline-flex items-center gap-2 bg-[#24292F] hover:bg-[#24292F]/90 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
            </svg>
        </button>
        </form>
    );
}

export async function SignOutButton() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
        <button className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2.5 rounded-lg font-medium transition-colors">
            Sign Out
        </button>
        </form>
    );
}