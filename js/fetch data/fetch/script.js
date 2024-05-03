
var datas=[]
let containerData=document.getElementById("container")

 const fetchData = fetch('https://663206efc51e14d69563217e.mockapi.io/users')
            .then(response => response.json()) 
            .then(data => {
                
                datas=data
                containerData.innerHTML = datas.map((d)=>{
                    return (` <section class="card">
                    <div class="profile-box">
                        <img src="../src/profile.png" class="profile-img">
                    </div>
                    <div class="card-text">
                        <h5>${d.name}</h5>
                        <p>${d.password}</p>
                        <div class="social-media-icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                        <div class="button">
                            <button class="Subscribe-btn">Edit</button>
                            <button class="Message-btn">Message</button>
                        </div>
                        <div class="views">
                            <div>
                                <i class="fa-regular fa-heart"></i>
                                <span>60.4k</span>
                            </div>
                           <div>
                                <i class="fa-regular fa-comment"></i>
                                <span>20k</span>
                           </div>
                           <div>
                                <i class="fa-solid fa-share"></i>
                                <span>12.4k</span>
                           </div>
                        </div>
                    </div>
                </section>`)
                })
                // document.getElementById('data-container').innerText = JSON.stringify(data);
            })
            .catch(error => console.error('Error fetching data:', error));
            
                

console.log(containerData)
console.log(datas)
