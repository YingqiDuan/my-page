// src/app/contact/page.tsx
'use client'

import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa6'

const Contact: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 地址 */}
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-2xl text-blue-600 mr-4 mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p>San Jose, CA 95110</p>
          </div>
        </div>
        
        {/* 手机号码 */}
        <div className="flex items-start">
          <FaPhoneAlt className="text-2xl text-blue-600 mr-4 mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p>+1 408 592 1101</p>
            <p>+86 19962653952</p>
          </div>
        </div>
        
        {/* 邮箱 */}
        <div className="flex items-start">
          <FaEnvelope className="text-2xl text-blue-600 mr-4 mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p>
              <a href="mailto:duanyingqi157@outlook.com" className="text-blue-600 hover:underline" aria-label="Send email to duanyingqi157@outlook.com">
                duanyingqi157@outlook.com
              </a>
            </p>
            <p>
              <a href="mailto:duan.yingq@northeastern.edu" className="text-blue-600 hover:underline" aria-label="Send email to duan.yingq@northeastern.edu">
                duan.yingq@northeastern.edu
              </a>
            </p>
          </div>
        </div>
        
        {/* 社交媒体 */}
        <div className="flex items-start">
          <FaComment className="text-2xl text-blue-600 mr-4 mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold">Social Media</h3>
            <div className="mt-2 space-y-2">
              <a
                href="https://github.com/YingqiDuan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
                aria-label="Visit GitHub Profile"
              >
                <FaGithub className="mr-2" aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yingqi-duan-a3777428a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
                aria-label="Visit LinkedIn Profile"
              >
                <FaLinkedin className="mr-2" aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
