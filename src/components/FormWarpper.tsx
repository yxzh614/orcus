import React from 'react'
import Form, { useForm } from 'rc-field-form'



export const MyForm: React.FC<{
  initialValues?: any
}> = (props): JSX.Element => {
  const { children, initialValues } = props;
  const [form] = useForm();
  return <React.Fragment>
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={(v) => {
        console.log('finish', v);
      }}
    >
      {children}
    </Form>
  </React.Fragment>
}