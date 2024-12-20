import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <>
      <h1>List Group</h1>
      {props.items.length == 0 && <h1>No list found</h1>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
