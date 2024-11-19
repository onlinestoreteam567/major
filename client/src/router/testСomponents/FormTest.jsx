import { Form, ErrorMessage, Input, FormGroup } from '@components/form-components';
import { reviewSchema } from '@validations/reviewSchema';

// import { Select } from '@components/form-components/Select/Select';

const FormExample = () => {
  const onSubmit = (data) => alert('good' + data.sex);
  return (
    <>
      <h1 style={{ color: 'black' }}>Smart Form Component</h1>
      <Form onSubmit={onSubmit} schema={reviewSchema}>
        <FormGroup>
          <Input name="rating" />
          <ErrorMessage name="rating" />
        </FormGroup>

        <Input name="comment" />
        {/* <Select name="sex" options={['female', 'male']} /> */}

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
