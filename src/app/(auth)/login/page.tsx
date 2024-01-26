import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";

export default function Login() {
    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Log In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            variant="destructive"
            type="submit"
            className="w-full bg-[#e50914]"
          >
            Log In
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-white hover:underline">
          Sign Up
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
      <GithubSigninButton />

        <GoogleSigninButton />
      </div>
    </div>
    );
}