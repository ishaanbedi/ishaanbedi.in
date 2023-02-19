import { useRouter } from "next/router";
import { useEffect } from "react";
const Uses = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <></>;
};
export default Uses;
