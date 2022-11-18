import Form from '../common/ToolBarForm/ToolBarForm'
import Input from '../common/Input/Input';
import Button from '../common/Button/Button'

export default function CustomCircleForm() {
  return <Form>
    <Input label="diameter (m):" value={3} type="number" width="50px" id="custom-circle-diameter" />
    <Input label="label:" value={"calendula"} type="text" id="custom-circle-label" />
    <Button>Add</Button>
  </Form>
}

