"use client"
import React, { useState } from 'react';
import WireframeRenderer from '../../components/wireframe/renderer';
import {
  todoAppSchema,
  socialAppSchema,
  ecommerceAppSchema,
  newsAppSchema,
  weatherAppSchema
} from '../../schemas/WireframeSchema';

const templates = [
  { name: 'Todo App', schema: todoAppSchema },
  { name: 'Social App', schema: socialAppSchema },
  { name: 'E-commerce App', schema: ecommerceAppSchema },
  { name: 'News App', schema: newsAppSchema },
  { name: 'Weather App', schema: weatherAppSchema }
];

const TemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Wireframe Templates</h1>
        
        <div className="flex gap-4 mb-8">
          {templates.map(template => (
            <button
              key={template.name}
              onClick={() => setSelectedTemplate(template)}
              className={`px-4 py-2 rounded ${
                selectedTemplate.name === template.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {template.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">{selectedTemplate.name} Preview</h2>
          <WireframeRenderer schema={selectedTemplate.schema} />
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
