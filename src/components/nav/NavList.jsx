const NavList = ({ lists, onClikFunction, ulClass, liClass }) => {
  return (
    <ul className={ulClass}>
      {lists.map((item) => (
        <RenderList
          key={item.id}
          item={item.title}
          liClass={liClass}
          onClikFunction={onClikFunction}
        />
      ))}
    </ul>
  );
};

export default NavList;

function RenderList({ item, liClass, onClikFunction }) {
  return (
    <li className={liClass} onClick={onClikFunction}>
      {" "}
      {item}
    </li>
  );
}
