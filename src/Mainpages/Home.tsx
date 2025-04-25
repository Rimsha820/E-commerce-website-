import React from 'react';
import LeftSidebar from '../Mainpages/homeleft';
import MainContent from '../Mainpages/mainhomecontent';
import RightSidebar from '../Mainpages/homeright';

const Home: React.FC = () => {
  return (
    <div className="px-8 py-8">
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto h-[calc(230vh-4rem)] scrollbar-hidden"> 
          <MainContent />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
