"use client"
import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import WireframeRenderer from '../renderer';
import { WireframeSchema, todoAppSchema } from '../../../schemas/wireframe';

interface WireframeEditorProps {
  onSave?: (schema: WireframeSchema) => void;
}

const validateSchema = (schema: any): schema is WireframeSchema => {
  if (!schema?.screens || !Array.isArray(schema.screens)) {
    throw new Error('Schema must have a screens array');
  }
  
  if (schema.screens.length === 0) {
    throw new Error('Schema must have at least one screen');
  }

  for (const screen of schema.screens) {
    if (!screen.id || !screen.elements || !Array.isArray(screen.elements)) {
      throw new Error('Each screen must have an id and elements array');
    }
  }
  
  return true;
};

const WireframeEditor: React.FC<WireframeEditorProps> = ({ onSave }) => {
  const [schemaCode, setSchemaCode] = useState<string>(JSON.stringify(todoAppSchema, null, 2));
  const [schema, setSchema] = useState<WireframeSchema>(todoAppSchema);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [schema]);

  const handleSave = () => {
    if (!error && onSave) {
      onSave(schema);
      setSaved(true);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setSchemaCode(newCode);
    setSaved(false);
    
    try {
      const parsedSchema = JSON.parse(newCode);
      if (validateSchema(parsedSchema)) {
        setSchema(parsedSchema);
        setError(null);
      }
    } catch (err) {
      setError(`Schema Error: ${(err as Error).message}`);
    }
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden bg-background text-foreground">
      <div className="flex-1 p-4 bg-background border-r-2 border-foreground overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2>Wireframe Schema Editor</h2>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${saved ? 'text-green-500' : 'text-gray-500'}`}>
              {saved ? 'Saved' : 'Unsaved changes'}
            </span>
            <button
              onClick={handleSave}
              disabled={!!error || saved}
              className={`px-3 py-1 rounded ${error || saved ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              Save (⌘S)
            </button>
          </div>
        </div>
        <textarea 
          spellCheck={false}
          className="w-full h-full font-mono text-sm p-2 border-2 border-foreground resize-none bg-background text-foreground focus:outline-none focus:border-blue-500"
          value={schemaCode}
          onChange={handleCodeChange}
        />
        {error && (
          <div className="text-red-500 mt-2 p-2 border border-red-500 bg-red-50 rounded">
            {error}
          </div>
        )}
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