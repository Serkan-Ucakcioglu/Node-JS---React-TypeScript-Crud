import useSWR from "swr";
import { getAllUser } from "../api/api";
import Card from "./Card";
import EditModal, { Inputs } from "./Modal/EditModal";

function Home() {
  const { data, error, isLoading } = useSWR<Inputs[]>("/users", getAllUser);
  return (
    <div>
      <EditModal />
      <div className="flex flex-wrap gap-4 mt-6">
        {data &&
          data?.map((user) => {
            return <Card key={user?._id} user={user} />;
          })}
      </div>
    </div>
  );
}

export default Home;
