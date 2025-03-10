import React from 'react';
import WireframeEditor from '../../components/wireframe/editor';
import { WireframeSchema } from '../../schemas/WireframeSchema';

const EditorPage = () => {
  const handleSave = (schema: WireframeSchema) => {
    console.log('Saving schema:', schema);
    // Implement save functionality (e.g., to localStorage or backend)
  };

  return (
    <div className="min-h-screen">
      <WireframeEditor onSave={handleSave} />
    </div>
  );
};

export default EditorPage;
