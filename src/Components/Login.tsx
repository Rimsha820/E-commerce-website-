import React, { useState } from 'react';
import bannerImage from '../webassets/5.png'; 
import shopBackground from '../webassets/image-4-1.jpg'; 

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'login') {
      console.log('Logging in with:', { email, password });
    } else {
      console.log('Signing up with:', { email, password, confirmPassword });
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 ">
      <div
        className="relative h-[300px] sm:h-[400px] bg-black opacity-70 bg-cover bg-center flex items-center justify-center text-white mb-10 w-full"
        style={{ backgroundImage: `url(${shopBackground})` }}
      >
      </div>
         <div className="flex justify-center items-start pt-10 pb-14 sm:pt-16 sm:pb-20 md:pt-24 md:pb-32">
        <div className="bg-white py-10 px-6 sm:py-12 sm:px-10 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl">
          
          {/* Responsive Banner Image inside card */}
          <div className="w-full aspect-[3/1] sm:aspect-[3.5/1] overflow-hidden rounded-md mb-6">
            <img
              src={bannerImage}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Toggle Buttons */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`w-1/2 py-3 text-sm sm:text-base font-semibold rounded-l-md transition ${
                activeTab === 'login'
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`w-1/2 py-3 text-sm sm:text-base font-semibold rounded-r-md transition ${
                activeTab === 'signup'
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username or email address *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#3b2322] focus:border-[#3b2322]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#3b2322] focus:border-[#3b2322]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="********"
              />
            </div>

            {activeTab === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#3b2322] focus:border-[#3b2322]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="********"
                />
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 px-6 bg-black text-white rounded-md hover:bg-[#291614] transition"
            >
              {activeTab === 'login' ? 'Log In' : 'Sign Up'}
            </button>

            <div className="text-sm text-right text-[#3b2322] mt-2 hover:underline cursor-pointer">
              Lost your password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
