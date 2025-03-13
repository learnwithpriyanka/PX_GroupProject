import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
         <div className='row style={{backgroundColor:"black"}}'>
            <div className='col-1'>
                  {/* <img src='media/image/newlogo.png' alt='logo' style={{width:"80%",height:"45vh"}} className='img'></img> */}
            </div>
         <div className='col-10 d-flex justify-content-center align-items-center m-4'>
         <h5 style={{textAlign:"center", textSizeAdjust:"auto"}}>PadhaixPress is an innovative educational platform designed to provide high-quality study materials, workbooks, and print-ready PDFs. Our mission is to make learning accessible, engaging, and affordable for everyone. Whether you are a school student, a college student, or a lifelong learner, PadhaixPress has something to offer you.</h5>
         <br></br>
        </div>
        <hr style={{color:"black"}}></hr>

        <div className='col-1'></div>
        </div>
        <div className="row text-center mt-5 mb-5 ">





         {/* //adding key feature of this website */}
        <h2 className='mt-5 p-2'>Key Features</h2>
        <div className='col-3'>
         <h3>Comprehensive Study Materials</h3>
         <p>Access a wide range of study materials across various subjects, including science, mathematics, literature, and more. Our resources are meticulously curated to ensure they meet the highest educational standards.</p>
        </div>
        <div className='col-3'>
         <h3>Printable Workbooks</h3>
         <p>Our platform offers printable workbooks that are designed to enhance the learning experience. These workbooks include exercises, quizzes, and practice problems that help reinforce the material covered in the study guides.
         </p>
        </div>
        <div className='col-3'>
         <h3>Print-Ready PDFs</h3>
         <p>We provide print-ready PDFs that can be downloaded and printed with ease. These PDFs are formatted for quick and efficient printing, ensuring that you receive your materials in the shortest time possible.

         </p>
        </div>
         <div className='col-3'>
          <h3>Cost-Effective Solutions</h3>
          <p>At PadhaixPress, we believe that education should be affordable. We offer our study materials and printing services at competitive prices, making it accessible to a wider audience.</p>
        </div>
        </div>


        </div>
     );
}

export default Hero;
