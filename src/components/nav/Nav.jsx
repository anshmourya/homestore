import Btns from "../generalComponents/btns/Btns";
import { IoIosArrowDown } from "react-icons/io";
import NavList from "./NavList";
import Inputs from "../generalComponents/Inputs/Inputs";

const Nav = ({ search }) => {
  const NavData = [
    { title: "Home", link: "/", id: 1 },
    { title: "sell", link: "/seller", id: 2 },
    { title: "request", link: "/request", id: 3 },
    { title: "profile", link: "/profile", id: 4 },
  ];

  const IconWithTitle = ({ icon, title }) => (
    <>
      {title}
      {icon}
    </>
  );

  return (
    <>
      <nav className="flex items-center justify-between w-full p-3 border-b">
        <h1>Logo</h1>
        <Btns
          title={
            <IconWithTitle icon={<IoIosArrowDown />} title="Mumbai,India" />
          }
          btnStyle={"w-1/12 border flex items-center justify-between p-2"}
        />
        <Inputs
          style={"outline-none border p-2 w-2/6 rounded-md"}
          type={"text"}
          placeholder={"Search For Any Product"}
          onChangeFunction={(e) => search(e.target.value)}
        />
        <NavList
          lists={NavData}
          ulClass={"flex justify-end gap-16 capitalize "}
          liClass={"cursor-pointer hover:text-red-400 transition-all"}
        />
      </nav>
    </>
  );
};

export default Nav;
