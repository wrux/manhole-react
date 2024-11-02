export type OGProps = {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | null | undefined;
};

export default function OG(props: OGProps) {
  const title = props?.ogTitle || 'Manhole Gallery';
  const description = props?.ogDescription;
  const image = props?.ogImage;

  return (
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
          width: 'auto',
          padding: '40px',
          color: 'white',
        }}
      >
        <div
          style={{
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'red',
          flex: 1,
          width: 'auto',
          padding: '32px',
          aspectRatio: '1/1',
          backgroundColor: '#040A1A',
        }}
      >
        {image && (
          /* eslint-disable @next/next/no-img-element */
          <img
            style={{
              aspectRatio: '1/1',
              width: '100%',
              height: '100%',
              borderRadius: '10px',
            }}
            src={image}
            alt={`Image for: ${title}`}
          />
        )}
      </div>
    </div>
  );
}
