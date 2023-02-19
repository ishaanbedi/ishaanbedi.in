import { useRouter } from "next/router";
import { useEffect } from "react";
const Posts = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <></>;
};
export default Posts;
