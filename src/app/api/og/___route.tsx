import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'New post on Manhole Gallery';
  const description = searchParams.get('description');
  const image = searchParams.get('image') || '/cover.webp';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
            gap: 10,
            width: '50%',
            padding: '40px',
            color: 'white',
          }}
        >
          <div
            style={{
              aspectRatio: 1,
              height: '48px',
              width: '48px',
              flexShrink: 0,
              borderRadius: '100%',
              borderWidth: '8px',
              borderColor: 'currentColor',
            }}
          ></div>

          <h1 style={{ fontSize: 48 }}>{title}</h1>

          {description && (
            <p style={{ marginTop: 'auto', fontSize: 20 }}>{description}</p>
          )}
        </div>

        <div
          style={{
            background: 'red',
            flex: 1,
            width: '50%',
          }}
        >
          <img src={image} alt="Image for post" />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
