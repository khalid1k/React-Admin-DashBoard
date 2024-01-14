import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div key={item.id} className="item">
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} className="listItem" to={listItem.url}>
              <img src={listItem.icon} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Menu;
