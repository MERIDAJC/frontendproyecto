
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const PPK='AT5GwK38lOG9ZCRCe6qcIbd4Bxk0KXu9sOGJi02aUzeLsWo693f_t3UTWhLM1z6ZLwv8VCFjlB3jDDk4'



function PaypalButton({value}) {
  return (

  <PayPalScriptProvider  options= {{ 'client-id': PPK }}>
    <PayPalButtons
    style={{ layout:'horizontal'}}
    createOrder={(data, actions)=>{
      return actions.order.create({
        purchase_units:[
          {
            amount:{
              value: value,
            },
          },
        ],
      })
    }}
    onApprove={(data,actions)=>{
      return actions.order.capture().then((details)=>{
        const name = details.payer.name.given_name
        alert(`Transaction complet by ${name}`)
      })

    }}
    
    />

  </PayPalScriptProvider>
  )
}

export default PaypalButton