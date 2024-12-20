import { useState } from "react";
import Alert from "./alert";
import Button from "./Button";
import ListGroup from "./ListGroup";

function Playground() {
  var items = ["London", "New yprk", "San francisco", "New delhi"];
  const hadleSelectedItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={hadleSelectedItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <span>My alert message!</span>
        </Alert>
      )}
    </div>
  );
}

export default Playground;
