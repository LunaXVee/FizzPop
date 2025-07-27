import React from 'react';
import Spline from '@splinetool/react-spline';

const FizzPopLanding = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      
      style={{
        background: 'linear-gradient(135deg, #e5d9f2, #f4f1e8)'
      }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 pl-15">
        {/* Logo */}
        <img src="/logo.png" alt="FIZZPOP" className="h-32 align-top"
/>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-25 pl-35 px-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Home</a>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>About</a>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Our Products</a>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Contact Us</a>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-6 pr-5 ">
          <button className="hover:opacity-70 transition-colors" style={{ color: '#251296' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="hover:opacity-70 transition-colors" style={{ color: '#251296' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-between px-8 py-0 max-w-7xl mx-auto min-h-[80vh] pl-5">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl ">
          <div className="mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p className="text-xl font-semibold -mb-4 tracking-widest" style={{ color: '#251296' }}> MONSTROUSLY</p>
            <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-wider" style={{ color: '#251296' }}>
              DELICIOUS!
            </h1>
          </div>
          
          <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'Poppins, sans-serif', color: '#69525d' }}>
            Start your day with a delightful burst of flavour. Fizzy, 
            fruity & perfectly fun. Trust me, we are made with real 
            monster magic!
          </p>
          
          <button className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-colors shadow-lg" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#251296' }}>
            Shop Now
          </button>
        </div>

        {/* Right Content - Spline 3D Can */}
        <div className="flex-1 flex justify-center items-center relative pr-5">
          {/* Sparkle Effects */}
          <img src="/star.png" alt="star" className="absolute top-1 right-12 w-25 "/>
          <img src="/star.png" alt="star" className="absolute bottom-1 left-7 w-45  "/>
          <img src="/star.png" alt="star" className="absolute top-32 left-8 w-20 "/>

          
          {/* Spline 3D Model Container */}
          <div className="relative">
            {/* Badge */}
            <img src="/banner.png" alt="Zimbabwe's Favourite Soda" className="absolute -bottom-35 -right-26 w-75  transform  z-15"/>
            
            {/* Spline 3D Can */}
            <div className="w-[450px] h-[450px] overflow-visible">
              <Spline 
                scene="https://prod.spline.design/m17FLQMCvSnG9wzh/scene.splinecode" 
                style={{ 
                 width: '100%', 
                  height: '100%',
                  background: 'transparent',
                  transform: 'scale(1.2)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default FizzPopLanding;