import { useRouter } from "next/router";
import Header from "@/components/Header";
const RoomPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Header title={"RoomPage"} />
      {pid}
    </>
  );
};

export default RoomPage;
