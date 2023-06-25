const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full p-4 m-auto mt-16 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Netflix
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mr-4 hover:underline md:mr-6 ">About</li>
            <li className="mr-4 hover:underline md:mr-6 ">Privacy Policy</li>
            <li className="mr-4 hover:underline md:mr-6 ">Licensing</li>
            <li className="mr-4 hover:underline md:mr-6 ">Contact</li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Ansh Mourya™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;
