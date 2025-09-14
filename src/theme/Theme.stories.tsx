/* eslint-disable max-len */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { useThemeColor } from './hooks/useThemeColor';
import { Icon } from '../Icon';

const componentStatus = `
> 🎨 **Sistema de Tema GrowthPlan**

> Sistema simplificado para gerenciar cores do GrowthPlan com componentes de ícones.

Este sistema permite usar as cores do GrowthPlan de forma contextual e consistente com os componentes de ícones.

🔧 **Modo de uso**:

\`\`\`tsx
import { ThemeProvider, useTheme, useThemeColor, Icon } from '@naturacosmeticos/natds-react';

// Envolver a aplicação
<ThemeProvider defaultTheme="crystal">
  <App />
</ThemeProvider>

// Usar com ícones
<Icon name="star" themeColor />
<Icon name="heart" themeColor themeVariant="gold" />
\`\`\`

🎨 **Exemplo de uso com hooks**:

\`\`\`tsx
const { currentTheme, setTheme, getColor } = useTheme();
const { color, contrastColor } = useThemeColor('crystal', 'crystalLight');
\`\`\`

Utilize esta visualização para verificar o funcionamento do sistema de tema com diferentes grupos de cores.
`;

export default {
  title: 'Theme/GrowthPlan Theme System',
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta;

// Componente de demonstração
const ThemeDemo: React.FC = () => {
  const { currentTheme, setTheme, colors } = useTheme();
  const { color: crystalColor } = useThemeColor('crystal');
  const { color: bronzeColor } = useThemeColor('bronze');
  const { color: goldColor } = useThemeColor('gold');

  const themeGroups = Object.keys(colors) as Array<keyof typeof colors>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Sistema de Tema GrowthPlan</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Tema Atual: {currentTheme}</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          {themeGroups.map((group) => (
            <button
              key={group}
              onClick={() => setTheme(group)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: group === currentTheme ? '#007bff' : '#f8f9fa',
                color: group === currentTheme ? 'white' : 'black',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Ícones com Cores do Tema</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Icon name="filled-content-trophystar" themeColor size={32} />
            <div style={{ fontSize: '12px', marginTop: '4px' }}>Tema Atual</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Icon name="filled-action-love" themeColor themeVariant="bronze" size={32} />
            <div style={{ fontSize: '12px', marginTop: '4px' }}>Bronze</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Icon name="filled-content-trophystar" themeColor themeVariant="gold" size={32} />
            <div style={{ fontSize: '12px', marginTop: '4px' }}>Gold</div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Cores do Tema Atual</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {Object.entries(colors[currentTheme]).map(([key, value]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: value,
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  marginBottom: '4px'
                }}
              />
              <div style={{ fontSize: '10px', maxWidth: '60px', wordBreak: 'break-all' }}>
                {key}
              </div>
              <div style={{ fontSize: '8px', color: '#666' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ThemeSystem: StoryFn = () => (
  <ThemeProvider defaultTheme="crystal">
    <ThemeDemo />
  </ThemeProvider>
);

export const WithDifferentThemes: StoryFn = () => {
  const themes = ['crystal', 'bronze', 'silver', 'gold', 'sapphire', 'diamond', 'diamondPlus'] as const;
  
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Demonstração com Diferentes Temas</h2>
      {themes.map((theme) => (
        <div key={theme} style={{ marginBottom: '2rem' }}>
          <h3>Tema: {theme}</h3>
          <ThemeProvider defaultTheme={theme}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Icon name="filled-content-trophystar" themeColor size={24} />
              <Icon name="filled-action-love" themeColor size={24} />
              <Icon name="filled-content-trophystar" themeColor size={24} />
              <span style={{ marginLeft: '1rem' }}>
                Ícones usando cor do tema {theme}
              </span>
            </div>
          </ThemeProvider>
        </div>
      ))}
    </div>
  );
};
