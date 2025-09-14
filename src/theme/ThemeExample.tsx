import React from 'react';
import { ThemeProvider, useTheme, useThemeColor, Icon } from '../index';

const ThemeExample: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const { color: crystalColor } = useThemeColor('crystal');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Exemplo de Uso do Tema</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Tema Atual: {currentTheme}</h3>
        <button onClick={() => setTheme('bronze')}>
          Mudar para Bronze
        </button>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Ícones com Tema</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Icon name="filled-content-trophystar" themeColor size={32} />
          <Icon name="filled-action-love" themeColor size={32} />
          <Icon name="filled-content-trophystar" themeColor size={32} />
        </div>
      </div>

      <div style={{ 
        backgroundColor: crystalColor, 
        color: '#FFFFFF', 
        padding: '1rem', 
        borderRadius: '4px' 
      }}>
        <p>Área com cor do tema Crystal: {crystalColor}</p>
      </div>
    </div>
  );
};

export const ThemeExampleWithProvider: React.FC = () => (
  <ThemeProvider defaultTheme="crystal">
    <ThemeExample />
  </ThemeProvider>
);
