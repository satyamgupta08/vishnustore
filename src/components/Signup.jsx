import React from 'react';
import loginji from "../images/loginji.png";
const Signup = () => {
  return (
    <div id="loginfull" className='flex lg:h-[90.5vh] md:h-[93vh] h-[80vh] bg-blue-100 lg:text-2xl md:text-2xl text-sm font-semibold'>
      <div id="loginleft" className='md:w-[45vw] w-[100vw] md:text-left text-left mx-2 md:mx-auto'>
        <div id="loginmainleft" >
          <form id="myloginForm">
            <img src="medlink-PhotoRoom-removebg-preview.png" alt="" id="loginmedlink" className="loginimage" />
            <br />
            <h2 id="loginsignup" className='text-3xl  md:mx-0 mx-[25vw] '>Sign Up</h2>
            <br />
            <label htmlFor="loginuserid" className="loginlabel  lg:mr-40 md:mr-32 mr-[110px]">Enter Name</label>
           
            <input type="text" id="loginuserid" placeholder="Name" className="logininput" />
            <br /><br/>
            <label htmlFor="loginuseri" className="loginlabel md:mr-5 mr-3 ">Enter Mobile no or Email Id</label>
            
            <input type="text" id="loginuseri" placeholder="Mobile No or Email Id" className="logininput " />
            <br /><br />
            <label htmlFor="logindate" className="loginlabel lg:inline md:block mr-[100px]  md:mr-[150px]">Date Of Birth</label>
           
            <input type="date" name="date" id="logindate" placeholder="Date of birth" className="logininput" />
            <br /><br />
            <label htmlFor="logingender" className="loginlabel md:block lg:inline lg:mr-52 mr-[137px]">Gender</label>
            
            <p className="logingen 
             inline">Male :</p> <input type="radio" name="gender" id="logingenderMale" className="logininput" />  <p className="logingen inline">Female :</p> <input type="radio" name="gender" id="logingenderFemale" className="logininput" />
            <br /><br />
            <label htmlFor="loginpassword" className="loginlabel mr-[60px] lg:mr-[118px] lg:inline md:block">Create Password</label>
          
            <div className="loginlabel inline" id="loginshowLabel">
              <input type="password" id="loginpassword" placeholder="Password" className="logininput" />
              <label htmlFor="loginshow" id="loginshowLabel" className="loginlabel">
                <input type="checkbox" id="loginshow" className="logininput" />
              </label>
            </div><br />
            <br/>
            <label htmlFor="loginCpassword" className="loginlabel mr-12 lg:mr-[103px] lg:inline md:block">Confirm Password</label>
            <div id="loginshowLabel" className='inline'>
              <input type="password" id="loginCpassword" placeholder="Confirm Password" className="logininput" />
              <label htmlFor="loginshowC" id="loginshowLabel"  className="loginlabel">
                <input type="checkbox" id="loginshowC" className="logininput" />
              </label>
            </div><br />
            <br/>
<label htmlFor='file' className='lg:mr-[90px] mr-[1.39rem]'>Enter profile picture</label>
            <input type='file' id='file'></input>
            <br/><br/>
            <br/>
            <br/>
            
            <div id="loginbut" className='ml-[10vw]'>
              <button className="btn text-3xl bg-green-500 px-6 pt-1 pb-2 rounded-full" id="loginbutton">Sign Up</button>
            </div>
            <p id="loginmessage"></p>
          </form>
        </div>
      </div>
      <div id="loginright" className='lg:w-[45vw] md:w-[48vw] w-[0vw] lg:h-[90vh] md:h-[93vh]'>
        <img  src={loginji} alt="" id="login" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Signup;
