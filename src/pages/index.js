import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const session = useSession();
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
      <div>Hello {session?.data?.user?.name}</div>
      <button className="border bg-gray-300 " onClick={signOut}>
        Logout
      </button>
    </>
  );
};

export default Home;
