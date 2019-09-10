import axios from 'axios';

export const sendGetRequest = (customer_name, customer_email, customer_text, customer_phone, customer_task, customer_address) => {
axios.get("http://localhost:3000/sendmail/", {params: {
    customer_name: customer_name,
    customer_email: customer_email,
    customer_text: customer_text,
    customer_phone: customer_phone,
    customer_task: customer_task,
    customer_address: customer_address
}})
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)

    })
}