import trandingData from "./data/img.json";

function Tranding() {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      {trandingData.img.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
          <img 
            src={item.src} 
            alt={`Manga Frame ${item.id}`} 
            style={{ width: '250px', height: 'auto', borderRadius: '8px' }} 
          />
        </div>
      ))}
    </div>
  );
}

export default Tranding;