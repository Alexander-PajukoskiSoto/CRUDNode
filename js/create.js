// const form = document.querySelector('#createForm');

// form.addEventListener("submit", async(event)=>{
 
//     const formData = new FormData(form);
//     console.debug(formData)
//     const data= event.formData;
//     for (const value of data.values()){
//         console.log(value)
//     }
//     await fetch("http://localhost:3000/create",{
//         mode: 'cors',
//         method:"POST",
//         headers: {
//             "Content-Type": "application/json",
//           },
//         body:data
//     }).then((res)=>{
//         console.log(`response from server: ${res}`)
//     }).catch((err)=>{
//         console.log(`Error in fetch function: ${err}`)
//     })
//     event.preventDefault();
// })
