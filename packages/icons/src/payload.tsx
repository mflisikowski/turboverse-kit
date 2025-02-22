import { House } from 'lucide-react';

export const Logo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>MFD</div>
      <p style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>Content Management System</p>
    </div>
  );
};

export const Icon = () => <House style={{ width: '100%', height: '100%' }} />;
