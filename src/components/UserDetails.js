import { useParams } from "react-router-dom";

export const UserDetails = () => {
  // const params = useParams();
  // const id = params.userId;
  const { userId } = useParams();
  return <div>Details aout user {userId}...</div>;
};
