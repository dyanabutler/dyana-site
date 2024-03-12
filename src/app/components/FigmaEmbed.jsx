import React from 'react'

const FigmaEmbed = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-[50vw] md:w-[40vw] h-[20vw] md:h-[40vh] overflow-hidden" style={{ maxWidth: '800px', maxHeight: '450px' }}>
        <iframe
          className="w-full h-full border border-gray-200"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FR7v6avf1VILuFqpAjt6U07%2FBest-Floating-Label-Input%3Fnode-id%3D0%253A1"
          allowFullScreen
        ></iframe>
      </div>
      <div className="max-w-md p-4  shadow-md rounded-lg">
        <h2 className="text-lg font-semibold">How to Use the Figma Embed</h2>
        <p>1. Click the button to expand the prototype.</p>
        <p>2. Interact with the prototype as you please to explore the design.</p>
        <p>Feel free to play around with the interactive elements within the Figma prototype!</p>
      </div>
    </div>
  );
}
    

export default FigmaEmbed