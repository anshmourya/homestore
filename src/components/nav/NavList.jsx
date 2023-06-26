import { Link } from "react-router-dom";

const NavList = ({ lists, onClikFunction, ulClass, liClass }) => {
  return (
    <ul className={ulClass}>
      {lists.map((item) => (
        <RenderList
          key={item.id}
          item={item.title}
          liClass={liClass}
          onClikFunction={onClikFunction}
          link={item.link}
        />
      ))}
    </ul>
  );
};

export default NavList;

function RenderList({ item, liClass, onClikFunction, link }) {
  return (
    <Link to={link}>
      {" "}
      <li className={liClass} onClick={onClikFunction}>
        {" "}
        {item}
      </li>
    </Link>
  );
}
