import { Suspense } from "react";
import UpdateRoom from "./UpdateRoom";

const Page = ({ searchParams }) => {
  return (
    <Suspense fallback={<div>Loaading.......</div>}>
      <UpdateRoom roomId={searchParams.id} />
    </Suspense>
  );
};

export default Page;