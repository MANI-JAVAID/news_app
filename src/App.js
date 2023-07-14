import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./Components/News";
import About from "./Components/About";
import Footer from "./Components/Footer";
// import Header from "./Components/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Faqs from "./Components/Faqs";
import TermsOfUse from "./Components/TermsOfUse";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
// import LoadingBar from 'react-top-loading-bar'
// import { useState,Component } from "react"

 export default function App() {
   const apiKey = process.env.REACT_APP_NEWS_API;
  

   return (
     <BrowserRouter>
       <Navbar />
       {/* <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      /> */}
 
       <Routes>
         <Route
           path="/"
           element={<News apiKey={apiKey}    />}
         />
         <Route path="about" element={<About />} />
         <Route path="privacypolicy" element={<PrivacyPolicy />} />
         <Route path="faq" element={<Faqs />} />
         <Route path="termsOfUse" element={<TermsOfUse />} />
         <Route path="contact" element={<Contact />} />
       </Routes>
       <Footer />
     </BrowserRouter>
   );
 }

//  export default class App extends Component{
//    apiKey =process.env.REACT_APP_NEWS_API
//    state = {
//      progress:10
//    }
//    setProgress = (progress) => {
//      this.setState({progress:progress});
//    };
//    render(){
//    return (
  
//      <BrowserRouter>
//        <Navbar />
    
//        <LoadingBar
//          color='#f11946'
//          progress={this.state.progress}
//        />
//        <Routes>
//          <Route index element={<News apiKey={this.apiKey}  setProgress = {this.setProgress} />} />
//          <Route path="about" element={<About />} />
     
//          <Route path="privacypolicy" element={<PrivacyPolicy />} />
//          <Route path="faq" element={<Faqs />} />
//          <Route path="termsOfUse" element={<TermsOfUse />} />
//          <Route path="contact" element={<Contact />} />
//        </Routes>
//        <Footer />
//      </BrowserRouter>
//    );
//  }
//  }
