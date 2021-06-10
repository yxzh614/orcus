import React, { useEffect, useState } from 'react';
import './App.css';
import { bindCallback, Observable, Subject } from 'rxjs';
import { setInterval, setTimeout } from 'timers';
import Form, { Field } from 'rc-field-form';

import { RecoilRoot } from 'recoil';

const observable = new Observable<string>(subscriber => {
  subscriber.next('1');
  subscriber.next('2');
  subscriber.next('3');
  setTimeout(() => {
    subscriber.next('4');
    subscriber.complete();
  }, 1000);
});

const formJson = {
  type: 'input'
}
/**
 * 
 * stream
 * 
 * userInput
 * newChangedFields
 * getPrice
 * getPolicy
 * getStock
 * 
 */

const useGetPrice = (getPriceClicked: boolean, callback: (number: number) => void) => {
  setInterval(() => {
    if (!getPriceClicked) {
      return;
    }
    callback(Math.random())
  }, 1000)
  return () => {
    callback(Math.random())
  }
}


function App() {
  const handleFormChange = (formValue: any, callback: (formValue: any) => void) => {
    callback(formValue)
  }
  const $callback = bindCallback(handleFormChange)
  const handleValue = (v: any) => {
    console.log(v)
  }
  const [getPriceClicked, setGetPriceClicked] = useState(false);
  const getPrice = useGetPrice(getPriceClicked, (newPrice) => { // 控制剥离，hook只关心业务逻辑，不关心渲染
    if (newPrice > 0.5) {
      console.log(newPrice)
    }
  })
  return (
    <div className="App">
      <RecoilRoot>
        <Form
          onValuesChange={(v) => {
            $callback(v).subscribe({
              next: handleValue
            })
          }}
        >
          <Field name={'price'}>
            <input />
          </Field>
          <button onClick={() => {
            if (!getPriceClicked) {
              setGetPriceClicked(true)
            }
            getPrice();
          }} >getPrice</button>
        </Form>
      </RecoilRoot>
    </div>
  );
}

export default App;
