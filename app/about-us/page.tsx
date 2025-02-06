"use client";

import AboutBanner from '@/components/About/aboutBanner';
import ImageText from '@/components/About/ImageText';
import MissionVision from '@/components/About/MissionVision';
import React from 'react';

const page = () => {
  return (
    <>
      <AboutBanner />
      <ImageText />
      <MissionVision/>
    </>
  );
};

export default page;
