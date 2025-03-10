"use client"
import { useState } from 'react';
import WireframeEditor from '../components/wireframe/editor'

const HomePage = () => {
  const saveSchema = (schema: any) => {
    localStorage.setItem('current-schema', JSON.stringify(schema));
  };

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl mb-4">Wire Way</h1>
        <h2 className="text-center mb-4">Wireframe Builder</h2>
        <p className="text-center mb-8 max-w-[800px] mx-auto">
          Create custom wireframes for your applications using a simple schema.
          Edit the JSON on the left to see your wireframe update in real-time on the right.
        </p>
        <WireframeEditor onSave={saveSchema} />
      </div>
    </div>
  );
};

export default HomePage;
