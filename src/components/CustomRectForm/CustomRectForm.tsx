import Form from '../common/ToolBarForm/ToolBarForm'
import Input from '../common/Input/Input';
import Button from '../common/Button/Button'

export default function CustomRectForm() {
  return <Form>
    <Input label="length (m):" value={3} type="number" width="50px" id="custom-rect-length" />
    <Input label="width (m):" value={3} type="number" width="50px" id="custom-rect-width" />
    <Input label="label:" value={"shed"} type="text" id="custom-rect-label" />
    <Button>Add</Button>
  </Form>
}

