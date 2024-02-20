import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
  // return (
  //   <div className="text-center">
  //     <h1>{session?.user?.name}</h1>
  //     <img src={session?.user?.image!} alt="profile" className="w-32 h-32 rounded-full mx-auto" />
  //     <Button>
  //       <h1 className="p-4 text-center font-bold text-lg text-pink-400">
  //         Button
  //       </h1>
  //     </Button>
  //   </div>
  // );
}
