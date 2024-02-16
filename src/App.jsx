
const App = () =>{

  return(
    <section>
            <header className="home h-[100vh] w-full shadow-xl shadow-black z-10">
              <div className="bgImage h-[100vh] w-full opacity-30"> </div>
              <nav className="flex justify-between relative bottom-[95vh]">
                  <div className="border-4 border-double border-white px-3 py-1 text-xl ml-20 font-bold text-white"><i class="fa-brands fa-x-twitter"></i>CCompany</div>
                  <div>
                    <ul className="flex gap-6 mr-40 text-lg font-medium text-white">
                      <li className="border-2 border-white px-3 py-2 rounded-md">HOME</li>
                      <li className="px-3 py-2">ABOUT</li>
                      <li className="px-3 py-2">SERVICES</li>
                      <li className="px-3 py-2">BLOG</li>
                      <li className="px-3 py-2">CONTACTS</li>
                    </ul>
                  </div>
              </nav>
              <main className="flex justify-between items-center relative bottom-[60vh]">
                  <button className="text-white border-2 border-white h-10 w-10 shadow-md shadow-white ml-5">◁</button>
                  <div className="h-auto w-[60%] text-center">
                    <p className="text-6xl font-bold text-white">GOOD SOLUTIONS FOR YOUR</p>
                    <p className="text-6xl font-bold text-white">BUSINESS!</p>
                    <p className="text-center text-white text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugiat quod reiciendis doloribus quisquam corrupti est? Voluptatibus excepturi tempore nobis.</p>
                  </div>
                  <button className="text-white border-2 border-white h-10 w-10 shadow-white shadow-md mr-5">▷</button>
              </main>
            
            </header>

            <section className="h-[100vh] w-full bg-slate-200 flex flex-col justify-center items-center gap-20 z-0">
                  
                    <h1 className="text-3xl font-medium text-blue-900 ">What We Offer</h1>
                    <div className="h-auto w-fit flex flex-wrap gap-6 justify-center">
                        <div className="flex gap-6 h-48 w-[35%] bg-white rounded-lg ">
                           <img src="https://th.bing.com/th/id/OIP.tL_5tOBhS4xmDECdNax-ZgHaE8?rs=1&pid=ImgDetMain" alt="" className="m-1"/>
                           <div className="mt-6">
                              <h1 className="text-lg font-medium">Finance</h1>
                              <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae ad, nam excepturi inventore est autem fuga.</p>
                           </div>
                        </div>
                        <div className="flex gap-6 h-48 w-[35%] bg-white rounded-lg ">
                           <img src="https://th.bing.com/th/id/OIP.LSGvShjUYcrWiLR-c1QX3AAAAA?rs=1&pid=ImgDetMain" alt="" className="m-1"/>
                           <div className="mt-6">
                              <h1 className="text-lg font-medium">Planning</h1>
                              <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae ad, nam excepturi inventore est autem fuga.</p>
                           </div>
                        </div>
                        <div className="flex gap-6 h-48 w-[35%] bg-white rounded-lg ">
                           <img src="https://th.bing.com/th/id/OIP.ftnKjWzQDO-9kUK5nRtyUQHaD4?rs=1&pid=ImgDetMain" alt="" className="m-1 w-[280px]"/>
                           <div className="mt-6">
                              <h1 className="text-lg font-medium">Designing</h1>
                              <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae ad, nam excepturi inventore est autem fuga.</p>
                           </div>
                        </div>
                        <div className="flex gap-28 h-48 w-[35%] bg-white rounded-lg ">
                           <img src="https://th.bing.com/th/id/OIP.Ny7uLEqMqQfMXYcfjz7Y_gHaHa?w=600&h=600&rs=1&pid=ImgDetMain" alt="" className="m-1 w-[280px]"/>
                           <div className="mt-6">
                              <h1 className="text-lg font-medium">Money Management</h1>
                              <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae ad, nam excepturi inventore est autem fuga.</p>
                           </div>
                        </div>
                    </div>
            </section>

            <section className="h-[100vh] w-full bg-blue-500 flex justify-center items-center shadow-md shadow-black z-10">
                  <div className="h-auto w-full flex flex-col gap-20 items-center">
                      <h1 className="text-4xl font-medium text-white text-center">Our Capabilities <br />----x----</h1>
                      <div className="flex gap-16 h-[60%] w-auto">
                        <img src="https://th.bing.com/th/id/R.894829ee2bdefafa1d3a6661b57a9db9?rik=KiAHh76kgcAsFw&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f653afd5b-1b4e-4014-990c-6cfee093d2a4%2fede2e4b2-7b6d-47ab-8393-0ad7d20b221f.jpg&ehk=X0yvEzlJuJhPz6Pi0EQDUEAPbWM6O66SOuxbOq8MKCs%3d&risl=&pid=ImgRaw&r=0" alt="" className=" h-64 m-auto"/>
                        <div>
                            <div className="h-28 w-[600px] flex gap-7 ">
                                <div><img src="https://cdn-icons-png.flaticon.com/512/8765/8765849.png" alt="" className="w-28"/></div>
                                <div className="text-white border-b mt-2">
                                    <h1 className="text-xl font-medium">Market</h1>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequatur minima deleniti ratione quasi ad porro rerum repellendus, quidem iure maxime corrupti.</p>
                                </div>
                            </div>
                            <div className="h-28 w-[600px] flex gap-7 ">
                                <div><img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/30-1024.png" alt="" className="w-28"/></div>
                                <div className="text-white border-b mt-2">
                                    <h1 className="text-xl font-medium">Market</h1>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequatur minima deleniti ratione quasi ad porro rerum repellendus, quidem iure maxime corrupti.</p>
                                </div>
                            </div>
                            <div className="h-28 w-[600px] flex gap-7 mt-2">
                                <div><img src="https://cdn2.iconfinder.com/data/icons/business-241/256/business_seo_calculation-512.png" alt="" className="w-28"/></div>
                                <div className="text-white ">
                                    <h1 className="text-xl font-medium">Market</h1>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequatur minima deleniti ratione quasi ad porro rerum repellendus, quidem iure maxime corrupti.</p>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
            </section>

            <section className="h-[100vh] w-full bg-slate-200 flex items-center">
                <div className=" w-[80%] flxe flex-col m-auto">
                    <h1 className="text-center text-3xl font-medium text-blue-900 mb-20">Our Team</h1>
                    <div className="flex flex-wrap gap-10 justify-center ">
                        <div className="h-auto w-fit">
                          <img src="https://thumbs.dreamstime.com/b/mature-businessman-classic-suit-using-laptop-working-his-office-handsome-mature-businessman-classic-suit-using-141008309.jpg" alt="" className="h-52"/>
                          <h1 className="text-center text-mg font-medium">Company CEO</h1>
                        </div>
                        <div className="h-auto w-fit">
                          <img src="https://th.bing.com/th/id/OIP.A5uUeLCZ4Up66WHn_r86QAAAAA?w=474&h=318&rs=1&pid=ImgDetMain" alt="" className="h-52"/>
                          <h1 className="text-center text-mg font-medium">Senior Manager</h1>
                        </div>
                        <div className="h-auto w-fit">
                          <img src="https://jooinn.com/images/office-worker-3.jpg" alt="" className="h-52"/>
                          <h1 className="text-center text-mg font-medium">Team Leader</h1>
                        </div>

                        <div className="h-auto w-fit">
                          <img src="https://media.licdn.com/dms/image/C5612AQEQCQGevlyf-g/article-cover_image-shrink_720_1280/0/1624319087092?e=2147483647&v=beta&t=CAYDIAdOGcaDNzUSqOU1fiWTW-rJL7IDpjrJ52bj8TQ" alt="" className="h-52"/>
                          <h1 className="text-center text-mg font-medium">Employee</h1>
                        </div>
                        <div className="h-auto w-fit">
                          <img src="https://www.vistable.com/wp-content/uploads/young-businessmen-successful-presentation-1-1024x688.jpg" alt="" className="h-52"/>
                          <h1 className="text-center text-mg font-medium">Employee</h1>
                        </div>
                        <div className="h-auto w-fit">
                          <img src="https://freerangestock.com/sample/147512/portrait-of-female-employee-smiling-at-the-camera.jpg" alt="" className="h-52"/>
                          <h1 className="text-center text-mg font-medium">Employee</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="customer h-[70vh] w-full flex items-center text-white">
                  <div className="flex flex-col items-center gap-20">
                      <h1 className="text-3xl font-medium text-center">Satisfed Customer <br />----x----</h1>
                      <div className="flex justify-around">
                        <button className="h-10 w-10 border-2">◁</button>
                        <div className="w-[50%] space-y-6">
                          <div className="flex justify-center items-center flex-col">
                            <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="" className="h-20"/>
                            <h1 className="text-xs">Harry Johns</h1>
                          </div>
                          <p className="text-center font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A inventore ex culpa debitis doloribus necessitatibus. Commodi ut necessitatibus, dolores debitis voluptatem ducimus tempora deserunt non suscipit dicta blanditiis, voluptate quo repellendus ipsa eius maiores eligendi minus quos consequuntur voluptatum.</p>
                        </div>
                        <button className="h-10 w-10 border-2 ">▷</button>
                      </div>
                  </div>
            </section>

            <section className="h-[50vh]">
              <div className="flex flex-col items-center gap-16 flex-wrap">
                  <h1 className="text-3xl font-medium mt-20">Our Clients</h1>
                  <div className="flex justify-center items-center gap-20">
                      <div className="h-40 w-fit flex flex-col justify-center items-center">
                        <img src="https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgAAAA?rs=1&pid=ImgDetMain" alt="" className="h-20"/>
                        <h1 className="font-medium">Business Icon</h1>
                      </div>
                      <div className="h-40 w-fit flex flex-col justify-center items-center">
                        <img src="https://th.bing.com/th/id/OIP.rqnUH6C5FoxJl9oN33TEpgHaI2?rs=1&pid=ImgDetMain" alt="" className="h-20"/>
                        <h1 className="font-medium">Digital One Box</h1>
                      </div>
                      <div className="h-40 w-fit flex flex-col justify-center items-center">
                        <img src="https://th.bing.com/th/id/OIP.GW9UNQ6SneWwsUpwJiTxSQHaF7?rs=1&pid=ImgDetMain" alt="" className="h-20"/>
                        <h1 className="font-medium">Digital Cube</h1>
                      </div>
                      <div className="h-40 w-fit flex flex-col justify-center items-center">
                        <img src="https://fcibuckt.s3.amazonaws.com/gppune/uploads/2018/11/logo5.png" alt="" className="h-20"/>
                        <h1 className="font-medium">Wipro</h1>
                      </div>
                      <div className="h-40 w-fit flex flex-col justify-center items-center">
                        <img src="https://logosmarcas.net/wp-content/uploads/2020/09/IBM-Simbolo.png" alt="" className="h-20"/>
                        <h1 className="font-medium">IBM</h1>
                      </div>
                  </div>
              </div>
            </section>

            <footer className="h-[46vh] w-full bg-gray-900 flex justify-center">
              <div className="h-full w-[30%] flex flex-col items-center gap-5 border-r border-gray-500">
                  <div className=" w-fit border-4 border-double border-white px-3 py-1 text-xl font-bold text-white mt-20"><i class="fa-brands fa-x-twitter"></i>CCompany</div>
                  <p className="text-white mx-20 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit inventore odio temporibus debitis vitae repudiandae et sunt illo quae exercitationem?</p>
              </div>
              <div className="h-full w-[30%] flex flex-col items-center gap-5 border-r border-gray-500 text-white">
                  <h1 className="text-2xl mt-20 ">Send your profile</h1>
                  <p className=" mx-20 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sit fuga veniam accusamus dolores. Rem in eum tempora animi? Consectetur fugiat laudantium.</p>
              </div>
              <div className="h-full w-[30%] flex flex-col items-center gap-5 text-white">
                  <h1 className="text-2xl mt-20 ">Contact us</h1>
                  <p className=" mx-20 text-center">Lorem ipsum dolor, sit amet consectetur.<h1 className="text-blue-600">Eveniet sit fuga</h1> veniam accusamus dolores. Rem in eum tempora animi? Consectetur </p>
                  <div className="w-fit flex gap-2">
                      <div className="text-gray-500 text-3xl px-2 py-1 rounded-full border-transparent bg-gray-800"><i class="fa-brands fa-facebook"></i></div>
                      <div className="text-gray-500 text-2xl px-2 py-1 rounded-full border-transparent bg-gray-800"><i class="fa-brands fa-twitter"></i></div>
                      <div className="text-gray-500 text-2xl px-3 py-1 rounded-full border-transparent bg-gray-800"><i class="fa-brands fa-instagram"></i></div>
                      <div className="text-gray-500 text-2xl px-3 py-1 rounded-full border-transparent bg-gray-800"><i class="fa-brands fa-linkedin"></i></div>
                  </div>
              </div>
            </footer>

    </section>
  )
}
export default App
