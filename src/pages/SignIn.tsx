
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
        {/* Background decoration elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[70%] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-[60%] -left-[10%] w-[50%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <AuthForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
