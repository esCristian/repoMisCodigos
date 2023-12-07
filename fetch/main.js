// import Card from "./card"

// const app = document.getElementById('app')
// const spinner = document.getElementById('spinner')
// spinner.innerHTML = `<div class="d-flex align-items-center">
//                     <strong>Loading...</strong>
//                     <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
//                     </div>`

// fetch("data.json")
//     .then((res) => {
//         if(!res.ok){
//             throw{ok: false, msg:"error 404"}
//         }
//         return res.json()
//     })
//     .then((data) =>{
//         data.forEach((item) => {
//             app.innerHTML += Card(item);
//         });
//     })
//     .catch((err) => console.log(err))
//     .finally(()=> (spinner.innerHTML=""));
 

// const getGames = async ()=>{
//     try{
//         const res = await fetch("data.json")
//         if(!res.ok){
//             throw{ok:false, msg:"error 404"}
//         }
//         const data = await res.json()
//         data.forEach((item) => {
//             app.innerHTML += Card(item)
//         });
//     }
//     catch(error){
//         console.log(error)
//     }
//     finally{
//         spinner.innerHTML = ""
//     }
// }
// getGames()

// const [gameOne,gameTwo,gameThree] = games



// app.innerHTML = Card(gameOne)
// app.innerHTML += Card(gameTwo)
// app.innerHTML += Card(gameThree)
//---LOGIN AUTH
// const formData = new FormData();
// formData.append("username", "cescudero");
// formData.append("password", 123456);

// var token = "";
// // Realiza una solicitud POST a la API
// const login = async()=>{
//   try{
//     const response = await fetch("https://fasttrack.applog.com.ar/ml/auth/login",{
//       method:"POST",
//       body: formData
//     });
//     if(response.status === 200){
//       var datos = await response.json()
//       token = datos.result.access_token
//       console.log("La solicitud fue exitosa"+ " "+token)
//       return token
//     }else if(response.status === 401){
//       console.log('stringo erroneo en la url')
//     }else if(response.status === 404){
//       console.log('no se encontro')
//     }
  
//   }catch(error){
//     console.log(error)
//   }
//   }
// const dato = login();
// dato.then((res)=>{
//   console.log(res) 
// })
//-----------FIN LOGIN     

const formData = new FormData();
formData.append("token", "9e2a3c38db4e7dcb578e9f5bef7a93320ff0e3e3");
formData.append("idDadorDeCarga", "5");
formData.append("referencia", 77389);

var token = "";
// Realiza una solicitud POST a la API
const consulta = async()=>{
  try{
    const response = await fetch("https://fasttrack.applog.com.ar/ml/wsApplog/consultaEntregas",{
      method:"POST",
      body: formData
    });
    if(response.status === 200){
      var datos = await response.json()
      // token = datos.result.access_token
      console.log("La solicitud fue exitosa"+ " "+ datos)
     
    }else if(response.status === 401){
      console.log('stringo erroneo en la url')
    }else if(response.status === 404){
      console.log('no se encontro')
    }
  
  }catch(error){
    console.log(error)
  }
}


consulta();
