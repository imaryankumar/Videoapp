import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Header from "@/components/Header";

const Home = () => {
  const session = useSession();
  const [text, setText] = useState("");

  // console.log(session);
  if (session.data === null) {
    return (
      <button className="border bg-gray-300 " onClick={signIn}>
        Login
      </button>
    );
  }
  return (
    <>
      <Header title={"HomePage"} />
      <div className="w-full h-screen px-10 py-5 ">
        <div>Hello {session?.data?.user?.name}</div>
        <div>Hello {session?.data?.user?.email}</div>
        <div>
          <input
            type="text"
            className="bg-gray-200 "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="border bg-gray-300 my-3 " onClick={signOut}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
