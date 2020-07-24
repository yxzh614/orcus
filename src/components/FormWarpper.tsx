import React, { useState } from 'react'
import Form, { useForm } from 'rc-field-form'
import { AutoScroll } from '@fluentui/react';



export const MyForm: React.FC<{
  initialValues?: any
}> = (props): JSX.Element => {
  const { children, initialValues } = props;
  const [data, setData] = useState<any>();
  const [form] = useForm();
  return <React.Fragment>
    <Form
    style={{
      width: 1000,
      margin: 'auto',
      marginTop: 100
    }}
      form={form}
      initialValues={initialValues}
      onFinish={(v) => {
        setData(v);
      }}
    >
      {children}
      <div>
        {JSON.stringify(data)}
      </div>
    </Form>
  </React.Fragment>
}