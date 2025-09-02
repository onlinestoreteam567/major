const FormExample = () => {
  const onSubmit = (data) => alert('good' + data.sex);
  return (
    <>
      <h1 style={{ color: 'black' }}>Smart Form Component</h1>
      {/* <Form onSubmit={onSubmit} schema={reviewSchema}>
        <FormGroup name="rating">
          <Input name="rating" />
          <ErrorMessage name="rating" />
        </FormGroup>

        <Input name="comment" />
        <Select name="sex" options={['female', 'male']} />

        <button>Submit</button>
      </Form> */}
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
