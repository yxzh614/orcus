import React from 'react'
import { PrimaryButton, TextField } from '@fluentui/react'
import { Field } from 'rc-field-form'
import { MyForm } from '../../components/FormWarpper'

export const HomePage = () => {
  return <React.Fragment>
    <MyForm
    >
      <Field name="username">
        <TextField />
      </Field>
      <PrimaryButton text="submit" type="submit" disabled={false} checked={false} />
    </MyForm>
  </React.Fragment>
}