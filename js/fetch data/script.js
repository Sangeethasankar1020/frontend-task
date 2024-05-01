
var datas=[]
let containerData=document.getElementById("container")

 const fetchData = fetch('https://663206efc51e14d69563217e.mockapi.io/users')
            .then(response => response.json()) 
            .then(data => {
                
                datas=data
                containerData.innerHTML = datas.map((d)=>{
                    return (`<div class="card">
                    <div>${d.name}</div>
                    <div>${d.password}</div>
                    <button>edit</button>
                    </div>`)
                })
                // document.getElementById('data-container').innerText = JSON.stringify(data);
            })
            .catch(error => console.error('Error fetching data:', error));
            
                

console.log(containerData)
console.log(datas)
