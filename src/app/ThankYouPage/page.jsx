"use client";
import { CheckCircle, Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <CheckCircle className="mx-auto text-green-500 w-16 h-16" />
        </div>
        
        {/* Main Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Thank You!
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your details are saved. Our team will contact you shortly.
        </p>
        
        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 mb-4">
            We'll reach out via:
          </p>
          <div className="flex justify-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">Email</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">Phone</span>
            </div>
          </div>
        </div>
        
        {/* Optional Action Button */}
        <div className="mt-8">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            onClick={() =>router.push("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default page