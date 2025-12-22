let Fetchdata =async()=>{
    let api = 'https://jsonplaceholder.typicode.com/posts'

  let res = await fetch(api ,{method:'GET'})

  let data = await res.json()

  console.log(data);
  let show = document.querySelector("#datashow")

  data.map((e)=>{
    show.innerHTML+=`
    <tr>
       <td> ${e.id}</td>
       <td> ${e.title}</td>
       <td> ${e.body}</td>

    </tr>`


  })



}
Fetchdata()
