import { Suspense } from "react";

const Loading = () => {
  return (
    <div className="loader flex flex-col items-center justify-center m-auto mt-[300px]"></div>
  );
};

const SuspenseComponent = ({ children }: { children: JSX.Element }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export { Loading, SuspenseComponent };
