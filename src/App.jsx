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
      <nav className="flex items-center justify-between px-4 md:px-8 py-6 md:pl-15">
        {/* Logo */}
        <img src="/logo.png" alt="FIZZPOP" className="h-16 md:h-32 align-top" />
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-25 pl-35 px-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Home</a>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>About</a>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Our Products</a>
          <a href="#" className="font-medium hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Contact Us</a>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 pr-2 md:pr-5">
          <button className="hover:opacity-70 transition-colors" style={{ color: '#251296' }}>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="hover:opacity-70 transition-colors" style={{ color: '#251296' }}>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-0 max-w-7xl mx-auto min-h-[70vh] md:min-h-[80vh] md:pl-5">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center md:text-left mb-0 md:mb-0">
          <div className="mb-6 md:mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p className="text-base md:text-xl font-semibold -mb-2 md:-mb-4 tracking-widest" style={{ color: '#251296' }}>MONSTROUSLY</p>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wider" style={{ color: '#251296' }}>
              DELICIOUS!
            </h1>
          </div>
          
          <p className="text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-sm md:max-w-md mx-auto md:mx-0" style={{ fontFamily: 'Poppins, sans-serif', color: '#69525d' }}>
            Start your day with a delightful burst of flavour. Fizzy, 
            fruity & perfectly fun. Trust me, we are made with real 
            monster magic!
          </p>
          
          <button className="text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-colors shadow-lg" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#251296' }}>
            Shop Now
          </button>
        </div>

        {/* Right Content - Spline 3D Can */}
        <div className="flex-1 flex justify-center items-center relative md:pr-5">
          {/* Sparkle Effects */}
          <img src="/star.png" alt="star" className="absolute top-1 right-4 md:right-12 w-12 md:w-25" />
          <img src="/star.png" alt="star" className="absolute bottom-1 left-2 md:left-7 w-16 md:w-45" />
          <img src="/star.png" alt="star" className="absolute top-16 md:top-32 left-2 md:left-8 w-8 md:w-20" />
          
          {/* Spline 3D Model Container */}
          <div className="relative">
            {/* Badge */}
            <img src="/banner.png" alt="Zimbabwe's Favourite Soda" className="absolute -bottom-16 md:-bottom-35 -right-12 md:-right-26 w-32 md:w-75 transform z-15" />
            
            {/* Spline 3D Can */}
            <div className="w-[450px] h-[450px] md:w-[450px] md:h-[450px] overflow-visible">
              <Spline 
                scene="https://prod.spline.design/m17FLQMCvSnG9wzh/scene.splinecode" 
                className="spline-mobile"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  background: 'transparent',
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