import React from 'react';
import { PrimaryButton, TextField } from '@fluentui/react';
import { MyForm } from '../../components/FormWarpper';
import { Field } from 'rc-field-form';

export const LoopDepPage: React.FC = (props) => {
    return <React.Fragment>
        <MyForm>
            <Field name="a">
                <TextField />
            </Field>
            <Field name="b">
                {(c, m, f) => {
                    return <TextField {...c} onBlur={() => {
                        f.setFields([{
                            name: 'a',
                            value: Math.random()
                        }])
                    }} />
                }}
            </Field>
            <Field name="" dependencies={['a']}>
                {(c) => {
                    console.log('cccc');
                    return null;
                }}
            </Field>
            <Field name="c" dependencies={['a']}>
                {(c) => {
                    console.log(c);
                    return <TextField {...c} />
                }}
            </Field>
            <PrimaryButton text="sub" type="submit" />
        </MyForm>
    </React.Fragment>
}