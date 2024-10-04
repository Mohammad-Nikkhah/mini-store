import Link from "next/link";
import { Button } from "../components/ui/button";
import { FaArrowCircleDown } from "react-icons/fa";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <div className="box-hero">
        <img
          src="https://janebi.com/janebi/9fd2/files/normal/438065.jpg"
          className="rounded-lg mt-10"
        />
      </div>
      <div className="mx-auto w-full flex justify-center my-10">
        <Link href="/products">
          <FaArrowCircleDown className="animate-bounce mx-auto text-4xl mb-4 text-blue-900" />
          <Button> مشاهده لیست محصولات</Button>
        </Link>
      </div>
    </div>
  );
}
