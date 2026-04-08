import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-primary-600 p-2 rounded-xl">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                HEKA<span className="text-primary-500">Portal</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering HND students with the tools, resources, and verified past questions needed to achieve academic excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Download App</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Study Guides</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HEKA Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="block w-8 h-8 rounded-full bg-slate-800 hover:bg-primary-600 cursor-pointer transition-colors"></span>
            <span className="block w-8 h-8 rounded-full bg-slate-800 hover:bg-primary-600 cursor-pointer transition-colors"></span>
            <span className="block w-8 h-8 rounded-full bg-slate-800 hover:bg-primary-600 cursor-pointer transition-colors"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
