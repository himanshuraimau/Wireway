"use client"
import WireframeEditor from '../../wireframe/editor';

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-center mb-4">Wireframe Builder</h1>
      <p className="text-center mb-8 max-w-[800px] mx-auto">
        Create custom wireframes for your applications using a simple schema.
        Edit the JSON on the left to see your wireframe update in real-time on the right.
      </p>
      <WireframeEditor />
    </div>
  );
};

export default HomePage;
