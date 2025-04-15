import React from 'react';

const footerStyle = {
  width: "100%",
  backgroundColor: "#f1f1f1",
  color: "black",
  textAlign: "center"
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
       <div style={{ 
    backgroundColor: "#e0f7fa", 
    padding: "1rem", 
    textAlign: "center" 
  }}>
    <div>© Pokémon Inc 2025</div>
    <div>Contact: info@pokemon.com</div>
  </div>


    </footer>
  );
}

