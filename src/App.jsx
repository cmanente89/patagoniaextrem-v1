
import './App.css'

function App() {

  const nombre = "Luis";
  const saludo = `Hola, ${nombre}`;

  console.log(saludo);
  

  return (
    <div>

      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">

              <div class="flex-shrink-0">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo"></img>

              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</a>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button type="button" class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu"
                aria-expanded="false">
                <span class="sr-only">Open main menu</span>

                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="md:hidden"
          id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Product</a>
          </div>
        </div>

      </nav>

      <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}>
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-black md:text-8xl relative" style={{ backgroundImage: "url('tu-imagen.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '2rem' }}>
          PatagoniaExtrem
        </h1>
        {/* Resto del contenido */}
      </div>
    </section>
      {/* <h2 className="text-3xl font-bold underline bg-orange-500">Patagoniaextrem</h2> */}

      <section className="h-auto w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
        {/* <h1 className="text-center font-bold text-2xl text-indigo-500">Responsive Grid Layout </h1> */}
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
          {/* Card 1 */}
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="p-3">
              <span className="text-sm text-primary">November 19, 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
              </h3>
              <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
              </p>
              <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="p-3">
              <span className="text-sm text-primary">November 19, 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
              </h3>
              <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
              </p>
              <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1637419450536-378d5457abb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="p-3">
              <span className="text-sm text-primary">November 19, 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
              </h3>
              <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
              </p>
              <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1621352404112-58e2468993a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="p-3">
              <span className="text-sm text-primary">November 19, 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
              </h3>
              <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
              </p>
              <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="p-3">
              <span className="text-sm text-primary">November 19, 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
              </h3>
              <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
              </p>
              <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1633329712176-4751f52ccc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="p-3">
              <span className="text-sm text-primary">November 19, 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                International Women's Day 2022: Date, history, significance, theme this year
              </h3>
              <p className="paragraph-normal text-gray-600">
                Happy Women's Day 2022: Read on to know all about the history and significance...
              </p>
              <a className="mt-3 block" href="#">Read More &gt;&gt;</a>
            </div>
          </div>
        </div>
        <section className="mt-4 text-center">Build with ❤️ by <a href="https://github.com/saadh393" target="_blank">Saad Hasan </a></section>
      </section>

      <footer class="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
        <div class="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
          <p class="text-sm/6 text-gray-600 max-md:text-center">© 2024
            <a href="https://learnwithsumit.com/">Learn with Sumit</a>. All rights reserved.
          </p>
          <div class="flex items-center justify-center space-x-4 text-sm/6 text-gray-500 md:justify-end">
            <a href="https://learnwithsumit.com/privacy-policy">Privacy policy</a>
            <div class="h-4 w-px bg-gray-200"></div>
            <a href="https://learnwithsumit.com/terms">Terms</a>
          </div>
        </div>
      </footer>


    </div>

    


    
  )
}

export default App
