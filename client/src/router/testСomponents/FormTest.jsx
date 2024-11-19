import { Form } from '@components/form-components/Form/Form';
import { Input } from '@components/form-components/Input/Input';
import { Select } from '@components/form-components/Select/Select';

const FormExample = () => {
  const onSubmit = (data) => alert('good' + data.sex);
  return (
    <>
      <h1 style={{ color: 'black' }}>Smart Form Component</h1>
      <Form onSubmit={onSubmit}>
        <Input name="firstName" />
        <Input name="lastName" />
        <Select name="sex" options={['female', 'male']} />

        <button>Submit</button>
      </Form>
    </>
  );
};

const FormTest = () => {
  return (
    <>
      <FormExample />
      <FormExample />
    </>
  );
};

export default FormTest;
