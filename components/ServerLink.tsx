
// The server link typescript 

export default function serverLink(){

const icxUrl = "https://icx.vercel.app/api/data/pabnaBloodFind/dataServerlonk.json";


   return fetch(icxUrl)
     .then(response => response.json())
     .then(data =>{
        return data;
     })
      .catch(error => {
      return null;
    });
}