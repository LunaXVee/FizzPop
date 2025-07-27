import React from 'react';
import Spline from '@splinetool/react-spline';

const FizzPopLanding = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/yellow-texture.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#251296' }}>
          FIZZPOP
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="#" className="font-semibold hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Home</a>
          <a href="#" className="font-semibold hover:opacity-70 transition-colors" style={{ color: '#251296' }}>About</a>
          <a href="#" className="font-semibold hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Service</a>
          <a href="#" className="font-semibold hover:opacity-70 transition-colors" style={{ color: '#251296' }}>Contact</a>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
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
      <div className="flex items-center justify-between px-8 py-8 max-w-7xl mx-auto min-h-[80vh]">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p className="text-xl font-medium mb-4" style={{ color: '#251296' }}>MONSTROUSLY</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight" style={{ color: '#251296' }}>
              DELICIOUS!
            </h1>
          </div>
          
          <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'Poppins, sans-serif', color: '#9b3200' }}>
            Start your day with a delightful burst of flavour. Fizzy, 
            fruity & perfectly fun. Trust me, we are made with real 
            monster magic!
          </p>
          
          <button className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-colors shadow-lg" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#251296' }}>
            Shop Now
          </button>
        </div>

        {/* Right Content - Spline 3D Can */}
        <div className="flex-1 flex justify-center items-center relative pr-8">
          {/* Sparkle Effects */}
          <div className="absolute top-16 right-24 text-white text-4xl animate-pulse">✦</div>
          <div className="absolute bottom-24 left-16 text-white text-3xl animate-pulse delay-300">✦</div>
          <div className="absolute top-32 left-8 text-white text-2xl animate-pulse delay-700">✦</div>
          
          {/* Spline 3D Model Container */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-2 -right-12 bg-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg transform rotate-12 z-10" style={{ fontFamily: 'Poppins, sans-serif', color: '#251296' }}>
              Zimbabwe's<br />Favourite Soda
            </div>
            
            {/* Spline 3D Can */}
            <div className="w-[450px] h-[450px] overflow-visible">
              <Spline 
                scene="https://prod.spline.design/m17FLQMCvSnG9wzh/scene.splinecode" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  background: 'transparent'
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