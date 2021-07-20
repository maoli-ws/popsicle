import { InputGroup, Button, FormControl } from "react-bootstrap";

export default function Item(props) {
  return (
    <InputGroup className="mb-3">
      {props.order && (
        <Button variant="outline-secondary" id="button-addon1">
          {props.flavor}
        </Button>
      )}
      {props.stock && (
        <InputGroup.Text className="mb-6">{props.flavor}</InputGroup.Text>
      )}
      <FormControl
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        value={props.value}
      />
    </InputGroup>
  );
}
