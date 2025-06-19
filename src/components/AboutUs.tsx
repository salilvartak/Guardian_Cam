import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const WhoWeAreCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center p-6 bg-white rounded-2xl shadow-md">
      {/* Left Image Box */}
      <Card className="w-full lg:w-1/3 rounded-2xl overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1719538017/photo/home-care-healthcare-professional-hugging-senior-patient.jpg?s=612x612&w=0&k=20&c=DTQwVD1DTH0CMQ78aox8-cVKg8Nl-wCkSwY-S072M4E="
          alt="Brand Logo and Stats"
          className="object-cover w-full h-full"
        />
      </Card>

      {/* Right Content */}
      <Card className="bg-[#f9f6f1] w-full lg:w-2/3 rounded-2xl p-6 flex flex-col lg:flex-row items-center">
        <CardContent className="flex flex-col lg:flex-row items-center w-full">
          {/* Text Section */}
          <div className="flex-1 text-left pr-6">
            <h2 className="text-4xl font-semibold mb-4">
              Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">We Are</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              At Guardian Angle, we are committed to safeguarding the lives of those who matter most. Born from a deep sense of responsibility and powered by cutting-edge technology, our fall detection system is designed to deliver real-time alerts, local data security, and seamless cross-platform performance.
            </p>
            <p className="text-lg text-gray-600">
              We believe elderly care deserves smarter solutions, ones that don’t compromise on privacy, speed, or usability. That’s why our system runs entirely on your local device, ensuring full control over your data while delivering instant protection with minimal setup.
            </p>
          </div>

          {/* Image Section */}
          
        </CardContent>
      </Card>
    </div>
  );
};

export default WhoWeAreCard;
