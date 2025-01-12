import { Suspense } from "react";
import UpdateRoom from "./updateRoom";

const Page = ({ searchParams }) => {
  return (
    <Suspense fallback={<div>Loaading.......</div>}>
      <UpdateRoom roomId={searchParams.id} />
    </Suspense>
  );
};

export default Page;