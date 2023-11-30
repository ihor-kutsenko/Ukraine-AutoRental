import wait from '../images/wait.jpg';

export const App = () => {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        fontSize: 32,
        color: '#58ec13d9',
      }}
    >
      Ukraine Auto rental service
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          backgroundImage: `url(${wait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};
