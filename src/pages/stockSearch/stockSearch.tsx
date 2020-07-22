import React, { useEffect } from 'react'
import { Field, FormInstance } from 'rc-field-form'
import { TextField, PrimaryButton } from '@fluentui/react'
import { MyForm } from '../../components/FormWarpper'


/**
 * 监控字段变化后，改变另一个字段
 * 例如 模拟一个出价系统，页面上可以填写预算和数量
 * 填写预算后会返回一个建议数量，填写到数量字段中。
 * 
 * 这个异步逻辑用空field实现，保证不侵入到字段本身中，只是监听变化/触发修改
 * 这里的触发修改是静默的
 * 
 */

export const StockSearchPage: React.FC = () => {
  return <React.Fragment>
    <MyForm>
      <Field name="price">
        <TextField placeholder="价格" />
      </Field>
      <StockSearch />
      <Field name="quantity">
        <TextField placeholder="数量" />
      </Field>
      <PrimaryButton text="sub" type="submit" />
    </MyForm>
  </React.Fragment>
}


export const StockSearch: React.FC = () => {
  const InQuantity: React.FC<{ form: FormInstance }> = (props) => {
    const { form } = props;
    useEffect(() => {
      const price = form.getFieldValue('price');
      const timeout = setTimeout(() => {
        
        form.setFields([{
          name: 'quantity',
          value: price + '元'
        }])
        form.validateFields([['quantity']])
      }, 1000)
      return () => clearTimeout(timeout)
    })
    return <div>zzz</div>
  }
  return <React.Fragment>
    <Field name="" dependencies={[['price']]}>
      {(c, m, f) => { console.log('rd'); return <InQuantity form={f} />}}
    </Field>
  </React.Fragment>
}