function Footer() {

    const year = new Date().getFullYear()
    
  return (
    <>
      <footer className="flex flex-col w-full justify-center items-center border-white border-2 mb-5">
        <div className="flex justify-evenly w-full items-center bg-white bg-opacity-70 backdrop-blur-md  border-b py-4 px-[30rem] border-white">
          <div className="w-[40px] mx-5 hover:brightness-125 cursor-pointer">
            <img src="src/assets/fb2.png" alt="" />
          </div>
          <div className="w-[40px] mx-5 hover:brightness-125 cursor-pointer">
            <img src="src/assets/wa2.png" alt="" />
          </div>
          <div className="w-[40px] mx-5 hover:brightness-125 cursor-pointer">
            <img src="src/assets/instagram.png" alt="" />
          </div>
          <div className="w-[40px] mx-5 hover:brightness-125 cursor-pointer">
            <img src="src/assets/x2.png" alt="" />
          </div>
          <div className="w-[40px] mx-5 hover:brightness-125 cursor-pointer">
            <img src="src/assets/snap.png" alt="" />
          </div>
        </div>
        <div className="bg-white bg-opacity-65 w-full backdrop-blur-md px-10 py-5">
          <div className="flex justify-center">
            <div className="basis-1/3 text-center">
                <h1 className="text-2xl mb-5">Contact Us</h1>
               <div className="text-start">
               <p> <span className="font-semibold ">Address:</span> Nagla Bhagat, Dhanauli, Jagner Road, Agra,  Uttar Pradesh, India - 282001</p>
                <p><span className="font-semibold ">Phone:</span> +91-123456789</p>
                <p><span className="font-semibold ">Email:</span> lizzard@gmail.com</p>
               </div>
            </div>
            <div className="basis-1/3 text-center">
              <h1 className="text-2xl mb-5">Terms & Conditions</h1>
              <p className=" cursor-pointer">Privacy Policy</p>
              <p className=" cursor-pointer">Return & Refund</p>
            </div>
            <div className="basis-1/3 text-center	">
              <h1 className="text-2xl mb-5">Subscribe</h1>
              <form>
                <input type="email" className="text-lg px-2 py-2 mr-3 outline-none ring-2 text-center" />
                <button className="px-4 py-2 ring-2  bg-white text-lg">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-white bg-opacity-70 w-full backdrop-blur-md px-10 py-1">
          <h1>	&copy; {year} - LIZZARD</h1>
          <h1>Privacy & Cookies</h1>
        </div>
      </footer>
    </>
  );
}
export default Footer;
