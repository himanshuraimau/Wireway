"use client"
import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import WireframeRenderer from '../renderer';
import { WireframeSchema, todoAppSchema } from '../../../schemas/wireframe';

const WireframeEditor: React.FC = () => {
  const [schemaCode, setSchemaCode] = useState<string>(JSON.stringify(todoAppSchema, null, 2));
  const [schema, setSchema] = useState<WireframeSchema>(todoAppSchema);
  const [error, setError] = useState<string | null>(null);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setSchemaCode(newCode);
    
    try {
      const parsedSchema = JSON.parse(newCode) as WireframeSchema;
      setSchema(parsedSchema);
      setError(null);
    } catch (err) {
      setError(`Invalid JSON: ${(err as Error).message}`);
    }
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden bg-background text-foreground">
      <div className="flex-1 p-4 bg-background border-r-2 border-foreground overflow-auto">
        <h2>Wireframe Schema Editor</h2>
        <textarea 
          className="w-full h-full font-mono text-sm p-2 border-2 border-foreground resize-none bg-background text-foreground"
          value={schemaCode}
          onChange={handleCodeChange}
        />
        {error && <div className="text-red-500 mt-2 p-2 border border-red-500 bg-red-50">{error}</div>}
      </div>
      <div className="flex-1 p-4 flex flex-col items-center overflow-auto">
        <h2>Wireframe Preview</h2>
        {!error && <WireframeRenderer schema={schema} />}
      </div>
    </div>
  );
};

// MDX components for wireframe definition
const components = {
  wireframe: WireframeRenderer
};

export const MDXWireframeEditor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
};

export default WireframeEditor;