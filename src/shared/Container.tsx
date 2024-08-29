import { ReactNode } from "react";

type TChildrenProps = {
  children: ReactNode;
};

const Container = ({ children }: TChildrenProps) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 py-24">{children}</div>
  );
};

export default Container;
