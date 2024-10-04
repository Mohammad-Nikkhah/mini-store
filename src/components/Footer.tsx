export default function Footer() {
  return (
    <footer className="bg-gray-100 h-full border">
      <div className="container mx-auto  justify-center  items-center">
        <div className="trust-list flex justify-center items-center my-8 gap-4">
          <img
            src="https://janebi.com/janebi/9fd2/uploads/theme/banner/enamad.png"
            alt=""
            className="h-28 border-gray-300 border-2 p-3 rounded-md"
          />
          <img
            src="https://janebi.com/janebi/9fd2/uploads/theme/banner/samandehi.webp"
            alt=""
            className="h-28 border-gray-300 border-2 p-3 rounded-md"
          />
        </div>
      </div>
      <span className=" py-3 text-gray-500 flex justify-center border-t-2 w-full">
        فروشگاه ساخته شده با نسل جدید{" "}
        <span className="text-blue-900 mx-1">شاپفا</span>
      </span>
    </footer>
  );
}
