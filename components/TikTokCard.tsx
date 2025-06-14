type Props = {
  title: string;
  username: string;
  videoId: string;
  thumbnail?: string;
};

export default function TikTokCard({ title, username, videoId, thumbnail }: Props) {
  const link = `https://www.tiktok.com/@${username}/video/${videoId}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        paddingTop: '177%', // 9:16
        backgroundColor: '#000',
        borderRadius: 12,
        overflow: 'hidden'
      }}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          ▶ Watch TikTok
        </div>
      )}
    </a>
  );
}
