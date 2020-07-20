import React, { FormEvent } from 'react'
import { MyForm } from '../../components/FormWarpper'
import { Field } from 'rc-field-form'
import { TextField, PrimaryButton, ITextFieldProps } from '@fluentui/react'
import { UnionOmit } from '../../utils'


export const SelfChangePage: React.FC = (props) => {
  return <React.Fragment>
    <MyForm>
      <Field name="self" dependencies={['depend']}>
        {(c, _m, form) => {
          const depend = form.getFieldValue(['depend']);
          return <React.Fragment>
            <TextField {...c}/>
          </React.Fragment>
        }}
      </Field>
      <Field name="depend">
        <TextField />
      </Field>
      <PrimaryButton text="提交" type="submit" />
    </MyForm>
  </React.Fragment>
}

export const StockSearch: React.FC<UnionOmit<ITextFieldProps, {dependValue?: string}>> = (props) => {
  const { dependValue, onChange, ...extra } = props;
  return <React.Fragment>
    <TextField {...extra} />
  </React.Fragment>
}