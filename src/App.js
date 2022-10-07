
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  var viewport = document.querySelector('meta[name=viewport]');
  var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
  
  if (viewport === null) {
    var head = document.getElementsByTagName('head')[0];
    viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    head.appendChild(viewport);
  }
  
  viewport.setAttribute('content', viewportContent);
  return (
 <div className='app'>
  <header>
 
  <div className='navmove'>
  <ul>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Home <i className="fa fa-angle-down"></i></a>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Post types <i class="fa fa-angle-down"></i></a>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li>
  <li><a href="#Fashion">Fashion</a></li>
  <li><a href="#Sports">Sports</a></li>
  <li><a href="#DIY">DIY</a></li>
 <i class="fa fa-search"></i>
</ul></div>


<hr/>
  </header>

  <div class="row">
   <div class="column">
    <img id= "imga" src="/images/wocar.jpg" alt="woman in car" style={{width:"98%", height:"70%"}} className="space"></img>
    <div class="vl" id= "imga" >
      </div><div className="captionp">
 <h id= "imga" className="head1">Lifestyle</h> 
      <p id= "imga" className="para1">LIVING ON A RIGHT PATH WITH A RIGHT STYLE</p></div>
      <div className="butM">
      <button id= "imga" className="but">View All Posts</button></div> <span className="bookm"><i id= "imga"  class="fa fa-bookmark" style={{color: "white", fontSize:"30px"}}></i></span>
      <div>
        <div class="rec1" id="arm2"></div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
        </div>
</div>

  <div class="column">
    <img id="imgb" src="/images/trav.jpg" alt="travel" className="space"></img>
    <div id="vlb" class="vl">
      </div><div id="cap" className="captionp">
 <h className="head1">Travel, DIY</h> 
      <p  className="para1">STAND OUT AND EXPRESS WHO YOU ARE IN REAL</p></div>
      <div className="butM">
      <button className="but" id="butb">View All Posts</button></div>
      <span id="bookma" className="bookm"><i class="fa fa-bookmark" style={{color: "white", fontSize:"30px"}}></i></span>
      
</div>

  <div class="column">
    <img id="imgc" src="/images/motor.jpg" alt="bike" style={{width:"98%", height:"70%"}} className="space"></img> 
    <div id="imgc" class="vl">
      </div><div className="captionp">
 <h id="imgc" className="head1">Sports</h> 
      <p id="imgc" className="para1">TAKING WRONG TURNS WILL MAKE YOU FALL FROM THE TOP</p></div>
      <div className="butM">
      <button id="imgc" className="but">View All Posts</button></div>
      <span  className="bookm"><i id="imgc" class="fa fa-bookmark" style={{color: "white", fontSize:"30px"}}></i></span>
      <div>
        <div class="rec" id="arm"></div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
        </div>
        </div>    
 </div>
 
 <div className="fhm"><h className="fh">EXPLORE WHAT'S TRENDING</h></div>
 <div class="row" style={{marginLeft:"-2%"}}>
  <div class="column">
    <img src="/images/couch.jpg" style={{width:"100%",height:"70%"}}></img>
    <div className="inter"><div className="view"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view" id="dis"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div></div>
  </div>
  <div class="column">
    <img src="/images/fash.jpg" style={{width:"100%",height:"70%"}}></img>
    <div className="inter"><div className="view"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view" id="dis"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div></div>
  </div>
  <div class="column">
    <img src="/images/roller.jpg" style={{width:"100%",height:"70%"}}></img>
    <div className="inter"><div className="view"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view" id="dis"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div></div>
  </div>
  <div class="column">
    <img src="/images/glass.jpg" style={{width:"100%", height:"70%"}}></img>
    <div className="inter"><div className="view"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view" id="dis"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div></div>
  </div>
</div>

<div class="row" style={{marginTop: "-8.5%", marginLeft:"-2.5%"}}>
  <div class="column">
  <div class="vl3" id="vl2b">
      </div><div className="captionp3">
 <h className="heada">Lifestyle</h> 
      <p className="paraa">Luxury life in Sydney</p></div>
  </div>
  
  <div class="column">
  <div class="vl2" id="vl2b">
      </div><div className="captionp2">
 <h className="heada">Lifestyle</h> 
      <p className="paraa">First new look at the fall collection</p></div>
    </div>

  <div class="column">
  <div class="vl2" id="vl2b">
      </div><div className="captionp2">
 <h className="heada">Lifestyle</h> 
      <p className="paraa">Classic view from the heart of Europe</p></div>
  </div>

  <div class="column">
      <div class="vl2" id="vl2b">
      </div><div className="captionp2">
 <h className="heada">Lifestyle</h> 
      <p className="paraa">Brattle announced shocking news about smart watch</p></div>
  </div>
</div>

<br></br>
<div>
  <div>
<hr className="hr4"></hr>
<div style={{marginTop:"195px", marginLeft:"71%"}}><span><svg xmlns="http://www.w3.org/2000/svg" style={{background:"white", marginLeft:"15%", width:"100px"}} width="30" height="30" fill="currentColor" id="ar2" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg"  style={{background:"white", width:"120px", marginLeft: "250px"}} width="30" height="30" fill="currentColor" id="ar2" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></span> </div>
</div>
<p id="pn" style={{marginLeft: "90.7%", marginTop:"-17%", position:"absolute", fontSize:"20px", fontWeight:"bold", fontFamily: "sans serif"}}> 1 <h style={{color:"grey"}}>/ 7</h></p>
  </div> 
   <div class="row">
   <div class="column">
    <img src="/images/sant.jpg" alt="woman in car" id="imgd" className="space"></img>
      </div>
    <div className="column" style={{ maxWidth: "20rem", marginTop:"-15.5%"}}>
        <div className="card-header" style={{fontWeight: "bold", paddingBottom:"5px"}}> <h className="pop" style={{  borderBottom: "1px solid gray", paddingBottom:"14px"}}>Popular </h>Categories</div><hr className="hrt" style={{ maxWidth: "20rem" }}></hr>
        <div className="card-body" style={{ maxWidth: "16rem", marginLeft:"20px" }}>



          <small className="textd" style={{ fontSize: "13px", display:"table-cell", paddingTop: "20px", color: "grey"}}>Funny</small><hr></hr>
          <small className="textd"  style={{ fontSize: "13px", display:"table-cell"}}>Sports</small><hr></hr>
          <small className="textd"  style={{ fontSize: "13px", display:"table-cell"}}>DIY</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px" , display:"table-cell"}}>Fashion</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px", display:"table-cell" }}>Travel</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px", display:"table-cell" }}>Lifestyle</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px", display:"table-cell" }}>Gifs</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px", display:"table-cell" }}>Video</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px", display:"table-cell" }}>Gadgets</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px" , display:"table-cell"}}>Audio</small><hr></hr>
          <small className="textd" style={{ fontSize: "13px" , display:"table-cell", paddingBottom:"10px"}}>All</small><hr></hr>
          
        </div>
        
      </div>
    </div>
    
    <div class="column" style={{marginTop: "188px", marginLeft:"-1.5%"}}>
  <div class="vl4">
      </div><div className="captionp9">
 <h className="ha">Sports</h> 
      <p className="parab">DIE HARD SURFING COMPETITION ON SUNSET BEACH</p></div>
  <div className="column">
  <p className="paraf">Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam qui norud exerciton ullamco laboris nisi ut aliquip ex ea commodo consequat reprehenderit.</p>
<hr style={{marginLeft:"2%", width: "35%"}}></hr>
<div className="inter1"><div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div>
<div className="view1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" id="eye" fill="rgb(54, 53, 53)" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <div className="view2"style={{width:"200px", marginLeft:"-25.9%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>July 30, 2022</div></div>
<div className="view1" style={{marginLeft:"-68%"}}><svg className="v2" id="v10" style={{marginTop:"-2.5%"}} xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="rgb(54, 53, 53)" class="bi bi-person" viewBox="0 0 16 16">
  <path    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> <div className="view2"  id="v10" style={{width:"200px", paddingLeft: "11px",marginLeft:"-18%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>By: Josephine Shelby</div></div></div>
</div></div>
<div className="but1">
      <button className="but"  id="bute">View All Posts</button></div> 
      <div>

 </div>

 <div class="row1" >
  <div class="column2" id="cold" style={{ paddingRight:"20px"}}> 
   <div style={{fontWeight: "bold", paddingBottom:"5px", fontSize:"120%"}}> <h className="pop1" style={{ borderBottom: "1px solid black", paddingBottom:"6px",borderBottomWidth:"2px"}}>WHAT'S</h> NEW</div><hr style={{ maxWidth: "18rem", marginTop:"2px" }}></hr>
   <img src="/images/clo1.jpg" alt="woman in car"  style={{paddingTop: "14px", width:"100%", height: "300px"}} className="space"></img>
   <div class="column">
  <div class="vl6">
      </div><div className="captionp5">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Lifestyle</h> 
      <p style={{marginTop: "5px",fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"25px", color: "rgb(54, 53, 53)"}}>Top 10 luxury positions for adults</p></div>
  </div>

   <img src="/images/cloth.jpg" alt="woman in car"  style={{paddingTop: "14px", width:"100%", height:"260px"}} className="space"></img>
   <div class="column">
  <div class="vl6">
      </div><div className="captionp5">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Lifestyle</h> 
      <p style={{marginTop: "5px", fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"25px", color: "rgb(54, 53, 53)"}}>2022 fashion collection</p></div>
  </div>

   <img src="/images/a4.jpg" alt="woman in car"  style={{paddingTop: "14px", width:"100%", height: "200px"}} className="space"></img>
   <div class="column">
  <div class="vl7">
      </div><div className="captionp8">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Travel, Space</h> 
      <p style={{marginTop: "0px",fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"20px", color: "rgb(54, 53, 53)"}}>Going out of the world is not easy!</p></div>
  </div>

   <img src="/images/motor.jpg" alt="woman in car"  style={{paddingTop: "14px", width:"100%", height:"300px"}} className="space"></img>
   <div class="column">
  <div class="vl6">
      </div><div className="captionp5">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Lifestyle</h> 
      <p style={{marginTop: "5px",fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"25px", color: "rgb(54, 53, 53)"}}>YRB Concept Motor Bike</p></div>
  </div>

   <img src="/images/f3.jpg" alt="woman in car"  style={{paddingTop: "14px", width:"100%", height:"300px"}} className="space"></img>
   <div class="column">
  <div class="vl6">
      </div><div className="captionp5">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Lifestyle</h> 
      <p style={{marginTop: "5px",fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"25px", color: "rgb(54, 53, 53)"}}>Do It Yourself </p></div>
  </div>

   <img src="/images/roller.jpg" alt="woman in car"  style={{paddingTop: "14px", width:"100%", height:"200px"}} className="space"></img>
   <div class="column">
  <div class="vl6">
      </div><div className="captionp5">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Lifestyle</h> 
      <p style={{marginTop: "5px",fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"25px", color: "rgb(54, 53, 53)"}}>Luxury life in Sydney</p></div>
  </div>

  <img src="/images/b1.jpg" alt="woman in car"  style={{paddingTop: "14px", width:"100%", height:"250px"}} className="space"></img>
   <div class="column">
  <div class="vl6">
      </div><div className="captionp5">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Lifestyle</h> 
      <p style={{marginTop: "5px",fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"25px", color: "rgb(54, 53, 53)"}}>Luxury life in Sydney</p></div>
  </div>
  </div>

  <div class="column3" style={{paddingLeft:"20px", paddingRight: "20px"}}>
  <div id="popm" style={{fontWeight: "bold", paddingBottom:"5px", fontSize:"120%", }}> <h className="pop1" style={{  borderBottom: "1px solid black", paddingBottom:"6px" ,borderBottomWidth:"2px"}}>WHAT'S</h> POPULAR</div><hr style={{ marginTop:"2px" }}></hr>
  <img className="imgq" src="/images/carcl.jpg" alt="woman in car" ></img>
  <div class="column3" style={{marginTop: "25%", marginLeft:"-1%"}}>
  <div class="vl5">
      </div><div className="captionp4">
 <h style={{paddingLeft: "15px", color: "darkgrey", fontSize:"92%"}}>Travel</h> 
      <p className="title1">10 BEST THINGS TO TAKE WITH YOU ON TOUR</p></div>
  <div className="column">
  <p className="para2" style={{width:"200%", fontSize:"13.5px", paddingLeft:"10px", marginBottom:"10px"}}>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam qui norud exerciton ullamco laboris nisi ut aliquip ex ea commodo consequat reprehenderit.</p>
<hr style={{marginLeft:"1%", width:"206%"}}></hr>
<div style={{marginLeft: "-0.3%"}} className="inter1"><div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div>
<div className="view1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" id="eye" fill="rgb(54, 53, 53)" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <div className="view2" style={{width:"200px", marginLeft:"-25.9%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>July 30, 2022</div></div>
<div className="view1" style={{marginLeft:"-68%"}}><svg id= "disi" style={{marginTop:"-2.5%"}} xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="rgb(54, 53, 53)" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> <div className="view2" id= "disi" style={{width:"200px", paddingLeft: "11px",marginLeft:"-18%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>By: Josephine Shelby</div></div></div>
</div></div>
<div style={{marginTop:"-48%"}}>
      <button className="but" id="butf">View All Posts</button></div> 
 

      <img src="/images/carcm.jpg" alt="woman in car"  className="imgq" ></img>
  <div class="column3" style={{marginTop: "25%", marginLeft:"-1%"}}>
  <div class="vl5">
      </div><div className="captionp4">
 <h style={{paddingLeft: "15px", color: "darkgrey", fontSize:"92%"}}>Travel</h> 
      <p className="title1">10 BEST THINGS TO TAKE WITH YOU ON TOUR</p></div>
  <div className="column">
  <p className="para2" style={{width:"200%", fontSize:"13.5px", paddingLeft:"10px", marginBottom:"10px"}}>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam qui norud exerciton ullamco laboris nisi ut aliquip ex ea commodo consequat reprehenderit.</p>
<hr style={{marginLeft:"1%", width:"206%"}}></hr>
<div style={{marginLeft: "-0.3%"}} className="inter1"><div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div>
<div className="view1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" id="eye" fill="rgb(54, 53, 53)" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <div className="view2" style={{width:"200px", marginLeft:"-25.9%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>July 30, 2022</div></div>
<div className="view1" style={{marginLeft:"-68%"}}><svg id= "disi" style={{marginTop:"-2.5%"}} xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="rgb(54, 53, 53)" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> <div className="view2" id= "disi" style={{width:"200px", paddingLeft: "11px",marginLeft:"-18%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>By: Josephine Shelby</div></div></div>
</div></div>
<div style={{marginTop:"-48%"}}>
      <button className="but" id="butf">View All Posts</button></div> 
      <div>

      <img src="/images/carcn.jpg" alt="woman in car"  className="imgq" ></img>
  <div class="column3" style={{marginTop: "25%", marginLeft:"-1%"}}>
  <div class="vl5">
      </div><div className="captionp4">
 <h style={{paddingLeft: "15px", color: "darkgrey", fontSize:"92%"}}>Travel</h> 
      <p className="title1">10 BEST THINGS TO TAKE WITH YOU ON TOUR</p></div>
  <div className="column">
  <p className="para2" style={{width:"200%", fontSize:"13.5px", paddingLeft:"10px", marginBottom:"10px"}}>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam qui norud exerciton ullamco laboris nisi ut aliquip ex ea commodo consequat reprehenderit.</p>
<hr style={{marginLeft:"1%", width:"206%"}}></hr>
<div style={{marginLeft: "-0.3%"}} className="inter1"><div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div>
<div className="view1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" id="eye" fill="rgb(54, 53, 53)" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <div className="view2" style={{width:"200px", marginLeft:"-25.9%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>July 30, 2022</div></div>
<div className="view1" style={{marginLeft:"-68%"}}><svg id= "disi" style={{marginTop:"-2.5%"}} xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="rgb(54, 53, 53)" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> <div className="view2" id= "disi" style={{width:"200px", paddingLeft: "11px",marginLeft:"-18%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>By: Josephine Shelby</div></div></div>
</div></div>
<div style={{marginTop:"-48%"}}>
      <button className="but" id="butf">View All Posts</button></div> 
      <div>

      <img src="/images/carco.jpg" alt="woman in car"  className="imgq"></img>
  <div class="column3" style={{marginTop: "25%", marginLeft:"-1%"}}>
  <div class="vl5">
      </div><div className="captionp4">
 <h style={{paddingLeft: "15px", color: "darkgrey", fontSize:"92%"}}>Travel</h> 
      <p className="title1">10 BEST THINGS TO TAKE WITH YOU ON TOUR</p></div>
  <div className="column">
  <p className="para2" style={{width:"200%", fontSize:"13.5px", paddingLeft:"10px", marginBottom:"10px"}}>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam qui norud exerciton ullamco laboris nisi ut aliquip ex ea commodo consequat reprehenderit.</p>
<hr style={{marginLeft:"1%", width:"206%"}}></hr>
<div style={{marginLeft: "-0.3%"}} className="inter1"><div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" id="eye" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 2.47K</div>
<div className="view1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" id="eye" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg> 17.47K</div>
<div className="view1" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" id="eye" fill="rgb(54, 53, 53)" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <div className="view2" style={{width:"200px", marginLeft:"-25.9%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>July 30, 2022</div></div>
<div className="view1" style={{marginLeft:"-68%"}}><svg id= "disi" style={{marginTop:"-2.5%"}} xmlns="http://www.w3.org/2000/svg" width="18" height="25" fill="rgb(54, 53, 53)" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg> <div className="view2" id= "disi" style={{width:"200px", paddingLeft: "11px",marginLeft:"-18%", color:"rgb(54, 53, 53)",  fontSize: "14px"}}>By: Josephine Shelby</div></div></div>
</div></div>
<div style={{marginTop:"-48%"}}>
      <button className="but" id="butf">View All Posts</button></div> 
      <div>
   <div className="nxtb"> 
<a href="#" class="next round">&#8249;</a>
<a href="#" class="previous round">1</a>
<a href="#" class="previous round">2</a>
<a href="#" class="previous round" id="hd">3</a>
<a href="#" class="previous round" id="hd">4</a>
<a href="#" class="next round" id="hd">5</a>
<a href="#" class="previous round">...</a>
<a href="#" class="previous round">10</a>
<a href="#" class="next round">&#8250;</a></div>  
 </div>

 </div>

 </div>
  </div>
  <div class="column4" style={{paddingLeft:"25px", marginTop:"2px"}} id="cola">
  <div id="com" style={{fontWeight: "bold", paddingBottom:"5px", fontSize:"120%"}}> <h className="pop1" style={{ borderBottom: "1px solid black", paddingBottom:"6px",borderBottomWidth:"2px"}}>WHAT'S</h> TRENDING</div><hr style={{ maxWidth: "18rem", marginTop:"2px" }}></hr> 
  <img src="/images/a2.jpg" alt="woman in car" style={{width:"50%", height:"120px", paddingTop:"13px"}}></img>
  <div style={{marginLeft: "50%", marginTop:"-33%"}}>
  <div class="column">
      <div>
      <p style={{fontWeight: "bold", fontSize: "96%", maxWidth:"340px", lineHeight:"0px", color: "rgb(54, 53, 53)"}}>Buckle Up For Y...</p></div></div>
    <div style={{marginTop: "-5px"}}> <p style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>30th July 2022</p> 
<h style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>2.4K Views</h> </div> 
 </div>
 <img src="/images/a2.jpg" alt="woman in car"  style={{width:"50%", height:"120px", paddingTop:"13px"}} ></img>
  <div style={{marginLeft: "50%", marginTop:"-33%"}}>
  <div class="column">
      <div>
      <p style={{fontWeight: "bold", fontSize: "96%", maxWidth:"340px", lineHeight:"0px", color: "rgb(54, 53, 53)"}}>Buckle Up For Y...</p></div></div>
    <div style={{marginTop: "-5px"}}> <p style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>30th July 2022</p> 
<h style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>2.4K Views</h> </div> 
 </div>
 <img src="/images/a2.jpg" alt="woman in car" style={{width:"50%", height:"120px", paddingTop:"13px"}} ></img>
  <div style={{marginLeft: "50%", marginTop:"-33%"}}>
  <div class="column">
      <div>
      <p style={{fontWeight: "bold", fontSize: "96%", maxWidth:"340px", lineHeight:"0px", color: "rgb(54, 53, 53)"}}>Buckle Up For Y...</p></div></div>
    <div style={{marginTop: "-5px"}}> <p style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>30th July 2022</p> 
<h style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>2.4K Views</h> </div> 
 </div>
 <img src="/images/a2.jpg" alt="woman in car" style={{width:"50%", height:"120px", paddingTop:"13px"}}  ></img>
  <div style={{marginLeft: "50%", marginTop:"-33%"}}>
  <div class="column">
      <div>
      <p style={{fontWeight: "bold", fontSize: "96%", maxWidth:"340px", lineHeight:"0px", color: "rgb(54, 53, 53)"}}>Buckle Up For Y...</p></div></div>
    <div style={{marginTop: "-5px"}}> <p style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>30th July 2022</p> 
<h style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "5px", lineHeight: "0px"}}>2.4K Views</h> </div> 
 </div>

 <div class="column4" style={{ marginTop:"2px"}}>
  <div style={{fontWeight: "bolder", paddingBottom:"5px", fontSize:"112%", paddingTop:"15px"}}> <h className="pop1" style={{ borderBottom: "1px solid black", paddingBottom:"7.5px",borderBottomWidth:"1px"}}>INSTA</h>GRAM</div><hr style={{ maxWidth: "18rem", marginTop:"2px" }}></hr> 
 <div className="row" style={{marginLeft:"-10px", marginTop:"-10px"}}>
 <div className="column">
  <img src="/images/carcl.jpg" alt="woman in car"   style={{width:"100%", height: "58px", paddingTop:"13px"}} ></img>
  <img src="/images/carcm.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}}></img>
  <img src="/images/carcl.jpg" alt="woman in car"style={{width:"100%", height: "58px", paddingTop:"13px"}} ></img>
  <img src="/images/carcm.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}} ></img></div>

  <div className="column">
  <img src="/images/carcl.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}}  ></img>
  <img src="/images/carcm.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}}></img>
  <img src="/images/carcl.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}} ></img>
  <img src="/images/carcm.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}}></img></div>

  <div className="column">
  <img src="/images/carcl.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}}  ></img>
  <img src="/images/carcm.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}}></img>
  <img src="/images/carcl.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}} ></img>
  <img src="/images/carcm.jpg" alt="woman in car" style={{width:"100%", height: "58px", paddingTop:"13px"}}></img></div>


  </div>   
  
 <div style={{fontWeight: "bold", paddingBottom:"5px", fontSize:"112%", paddingTop:"15px"}}> <h className="pop1" style={{ borderBottom: "1px solid black", paddingBottom:"7.5px",borderBottomWidth:"1px"}}>TWIT</h>TER</div><hr style={{ maxWidth: "18rem", marginTop:"2px" }}></hr> 
<div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", marginTop: "20px"}}>
 <img src="/images/fash.jpg" alt="woman in car"  style={{ width:"100%", height: "200px"}} className="space"></img>
   <div class="column">
 <div className="captionp6">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Travel, Space</h> 
      <p style={{fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"5px", color: "rgb(54, 53, 53)"}}>Going out of the world is not easy!</p></div>
  </div></div>


  <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" , marginTop: "20px"}}>
 <img src="/images/couch.jpg" alt="woman in car"  style={{ width:"100%", height: "200px"}} className="space"></img>
   <div class="column">
 <div className="captionp6">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Travel, Space</h> 
      <p style={{fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"5px", color: "rgb(54, 53, 53)"}}>Going out of the world is not easy!</p></div>
  </div></div>

  <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", marginTop: "20px"}}>
 <img src="/images/glass.jpg" alt="woman in car"  style={{ width:"100%", height: "200px"}} className="space"></img>
   <div class="column">
 <div className="captionp6">
 <h style={{paddingLeft: "5px", color: "darkgrey", fontSize:"94%"}}>Travel, Space</h> 
      <p style={{fontWeight: "bold", paddingLeft: "5px", fontSize: "96%", maxWidth:"340px", lineHeight:"5px", color: "rgb(54, 53, 53)"}}>Going out of the world is not easy!</p></div>
  </div></div>
  

  <div class="column4" style={{ marginTop:"2px"}}>
  <div style={{fontWeight: "bold", paddingBottom:"5px", fontSize:"112%", paddingTop:"15px"}}> <h className="pop1" style={{ borderBottom: "1px solid black", paddingBottom:"7.5px",borderBottomWidth:"1px"}}>STAY C</h>ONNECTED</div><hr style={{ maxWidth: "18rem", marginTop:"2px" }}></hr> </div>
 
<div id="social-platforms">

<a class="btn btn-icon btn-facebook" href="#"><i class="fa fa-facebook"></i><span className="social f">2.5K Fans</span> <em>LIKE</em></a>
<a class="btn btn-icon btn-twitter" href="#"><i class="fa fa-twitter"></i><span className="social t">2.5K Followers</span> <em>FOLLOW</em></a>
<a class="btn btn-icon btn-pinterest" href="#"><i class="fa fa-instagram"></i><span className="social p">2.5K Followers</span> <em>FOLLOW</em></a>
<a class="btn btn-icon btn-googleplus" href="#"><i class="fa fa-youtube"></i><span className="social y">2.5K Subscribers</span> <em>SUBSCRIBE</em></a>
<a class="btn btn-icon btn-linkedin" href="#"><i class="fa fa-linkedin"></i><span className="social l">2.5K Subscribers</span> <em>SUBSCRIBE</em></a>
</div>
 </div>



 <div class="column4" style={{ marginTop:"2px"}}>
  <div style={{fontWeight: "bold", paddingBottom:"5px", fontSize:"112%", paddingTop:"15px"}}> <h className="pop1" style={{ borderBottom: "1px solid black", paddingBottom:"7.5px",borderBottomWidth:"1px"}}>SUBSC</h>RIBE NEWSLETTER</div><hr style={{ maxWidth: "18rem", marginTop:"2px" }}></hr> </div>

    
      <div>
      <form>
<p style={{color: "grey", fontSize: "13px", paddingLeft: "10px"}}>  Consectetur adipisicing elit sed eiusmod tempor incididunt labore.</p>
    <div className="col3">
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <div className="col3">
      <input type="text" class="form-control" placeholder="Last name"></input>
  </div>
</form>
<div className="col3">
<button style={{width: "200px", color: "white",  background: "rgb(54, 53, 53)",  borderColor: "rgb(54, 53, 53)", padding: "10px" }}>send</button></div></div>
 

  
  </div>

</div>

<div class="rowt">
   <div class="columnt">
    <img src="/images/wocar.jpg" alt="woman in car" style={{paddingLeft:"0px", width:"100%", height:"85%"}}></img>
    </div>
    <div class="columnt">
    <img src="/images/wocar.jpg" alt="woman in car" style={{width:"100%", height:"85%"}} ></img>
    </div>   <div class="columnt">
    <img src="/images/wocar.jpg" alt="woman in car" style={{width:"100%", height:"85%"}}></img>
    </div>   <div class="columnt">
    <img src="/images/wocar.jpg" alt="woman in car" style={{width:"100%", height:"85%"}}></img>
    </div>   <div class="columnt">
    <img src="/images/wocar.jpg" alt="woman in car" style={{width:"100%", height:"85%"}} ></img>
    </div>   <div class="columnt">
    <img src="/images/wocar.jpg" alt="woman in car" style={{width:"100%", height:"85%"}}></img>
    </div>  </div>
 
    <img src="/images/art.jpg" className="imgp" alt="woman in car" >
 </img>

    <form>
  <div class="rowd">
  
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"></input>
    </div>
    <div class="col">
    <button style={{position: "absolute", width: "200px", color: "white",  background: "rgb(54, 53, 53)",  borderColor: "rgb(54, 53, 53)", padding: "10px" , fontWeight: "bold"}}>SIGNUP NOW</button>
</div>
  </div>
</form>

<div class="vld">
      </div><div className="titled">
 <h style={{ color: "darkgrey", fontSize:"92%", paddingLeft: "38px"}}>Signup for free</h> 
      <p className="titlef">GET AMAZING & NEW INFORMATION</p></div>
 
 
 
 </div>
  
 

  );
}

export default App;
