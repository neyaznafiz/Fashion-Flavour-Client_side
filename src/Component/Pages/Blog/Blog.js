import React from 'react';

const Blog = () => {
  return (
    <div className='mt-16 bg-yellow-600 w-screen'>

      <div className='form-shadow mx-3 lg:mx-20 mt-10 lg:mt-28 lg:mb-36 lg:p-20 grid grid-cols-1'>

        <div className="accordion " id="accordionExample">
          <div className="accordion-item form-shadow">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
              >
               <span className='text-zinc-800 text-xl font-semibold'> Difference between javascript and nodejs.</span>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
              <strong>JavaScript is a programming language</strong> which runs in web browsers. JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). Mainly use for any client-side activity for a web application. <br /> 
              Whereas <strong>Node.js is an interpreter or running environment for JavaScript,</strong> it's a useful library that JavaScript programs can use separately. It's mainly used for, like creating or executing a shell script or accessing any hardware-specific information, or running any backend job. Node JS only runs in a V8 engine and a javascript program is written under this Node JS.
              </div>
            </div>
          </div>
          <div className="accordion-item form-shadow">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              >
               <span className='text-zinc-800 text-xl font-semibold'>Differences between sql and nosql databases.</span>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
                <strong>This is the second item's accordion body.</strong> It is hidden by
                default, until the collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of this with custom CSS
                or overriding our default variables. It's also worth noting that just about any
                HTML can go within the <strong>.accordion-body</strong>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item form-shadow">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              >
                <span className='text-zinc-800 text-xl font-semibold'>What is the purpose of jwt and how does it work ?</span>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just about any HTML
                can go within the <strong>.accordion-body</strong>, though the transition does
                limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item form-shadow">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed text-xl font-semibold text-zinc-800" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              >
                <span className='text-zinc-800 text-xl font-semibold'>When should you use nodejs and when should you use mongodb ?</span>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
              <div className="accordion-body text-xl text-gray-700">
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just about any HTML
                can go within the <strong>.accordion-body</strong>, though the transition does
                limit overflow.
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Blog;




/*

*/