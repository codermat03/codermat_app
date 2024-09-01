import Image from "next/image";
import Services from "./components/shared/services/services";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold ">Welcome to CoderMat world!!</h1>
      <Services />
    </main>
  );
}
