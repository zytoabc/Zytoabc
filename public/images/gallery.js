export default function Gallery() {
  const images = ['public/images/Messenger_creation_4F759699-F60C-4ABE-BE29-5C1532358AEB.jpeg', 'public/images/Messenger_creation_A5E20197-3662-47DE-821C-A8E698AF7431.jpeg', 'public/images/received_1224910739346831.jpeg', 'public/images/received_1457436602288731.jpeg'
                 'public/images/received_1934050417398656.jpeg', 'public/images/received_2214373082353312.jpeg', 'public/images/received_691148193771669.jpeg', 'public/images/received_710740961547251.jpeg', 'public/images/received_9828388613863441.jpeg'
                 ];

  return (
    <div style={{ padding: 40 }}>
      <h1>Image Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 20 }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', borderRadius: 8 }}
          />
        ))}
      </div>
    </div>
  );
  }
