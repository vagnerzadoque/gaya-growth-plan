# 🎨 Sistema de Tema GrowthPlan

Sistema simplificado para gerenciar cores do GrowthPlan com componentes de ícones.

## 📋 Visão Geral

Este sistema permite usar as cores do GrowthPlan de forma contextual e consistente com os componentes de ícones, sem complexidade de modo escuro ou acessibilidade por enquanto.

## 🚀 Instalação e Uso

### 1. Envolver a Aplicação com ThemeProvider

```tsx
import { ThemeProvider } from '@naturacosmeticos/natds-react';

function App() {
  return (
    <ThemeProvider defaultTheme="crystal">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Usar Ícones com Cores do Tema

```tsx
import { Icon } from '@naturacosmeticos/natds-react';

// Ícone usando cor do tema atual
<Icon name="star" themeColor />

// Ícone usando cor específica do tema
<Icon name="heart" themeColor themeVariant="gold" />

// Ícone com cor customizada (ignora o tema)
<Icon name="star" color="#ff0000" />
```

### 3. Usar Hooks para Acessar Cores

```tsx
import { useTheme, useThemeColor } from '@naturacosmeticos/natds-react';

function MyComponent() {
  const { currentTheme, setTheme, getColor } = useTheme();
  const { color, contrastColor } = useThemeColor('crystal', 'crystalLight');
  
  return (
    <div>
      <p>Tema atual: {currentTheme}</p>
      <button onClick={() => setTheme('bronze')}>
        Mudar para Bronze
      </button>
      <div style={{ backgroundColor: color, color: contrastColor }}>
        Texto com cores do tema
      </div>
    </div>
  );
}
```

## 🎨 Grupos de Cores Disponíveis

- **crystal** - Azul cristal
- **bronze** - Bronze/laranja
- **silver** - Prata/cinza
- **gold** - Dourado
- **sapphire** - Safira/azul
- **diamond** - Diamante/roxo
- **diamondPlus** - Diamante Plus/azul escuro

## 🔧 API Reference

### ThemeProvider Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Componentes filhos |
| `defaultTheme` | `ThemeGroup` | `'crystal'` | Tema padrão |

### Icon Props (Adicionais)

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `themeColor` | `boolean` | `false` | Usar cor do tema |
| `themeVariant` | `string` | - | Variante específica da cor |

### Hooks

#### `useTheme()`
Retorna o contexto completo do tema:
- `currentTheme`: Tema atual
- `setTheme(theme)`: Função para mudar tema
- `getColor(group, variant)`: Função para obter cor
- `getContrastColor(group, variant)`: Função para obter cor de contraste
- `colors`: Todas as cores disponíveis

#### `useThemeColor(group, variant)`
Retorna cores específicas de um grupo:
- `color`: Cor principal
- `contrastColor`: Cor de contraste
- `getColor(variant)`: Função para obter cor específica
- `getContrastColor(variant)`: Função para obter contraste específico

## 🛠️ Utilitários

```tsx
import { 
  isValidThemeColor, 
  getThemeGroupColors, 
  getAutoContrastColor,
  getAllThemeColors,
  getAvailableThemeGroups,
  getColorInfo 
} from '@naturacosmeticos/natds-react';

// Verificar se cor existe
const isValid = isValidThemeColor('crystal', 'crystalLight');

// Obter todas as cores de um grupo
const crystalColors = getThemeGroupColors('crystal');

// Obter contraste automático
const contrast = getAutoContrastColor('#75B7F0');

// Obter todos os grupos disponíveis
const groups = getAvailableThemeGroups();
```

## 📝 Exemplos

### Exemplo Completo

```tsx
import React from 'react';
import { 
  ThemeProvider, 
  useTheme, 
  useThemeColor, 
  Icon 
} from '@naturacosmeticos/natds-react';

function ThemeDemo() {
  const { currentTheme, setTheme } = useTheme();
  const { color: crystalColor } = useThemeColor('crystal');
  const { color: bronzeColor } = useThemeColor('bronze');

  return (
    <div>
      <h2>Tema Atual: {currentTheme}</h2>
      
      <div>
        <button onClick={() => setTheme('crystal')}>Crystal</button>
        <button onClick={() => setTheme('bronze')}>Bronze</button>
        <button onClick={() => setTheme('gold')}>Gold</button>
      </div>

      <div>
        <Icon name="star" themeColor size={32} />
        <Icon name="heart" themeColor themeVariant="bronze" size={32} />
        <Icon name="star" themeColor themeVariant="gold" size={32} />
      </div>

      <div style={{ backgroundColor: crystalColor, padding: '1rem' }}>
        <p>Área com cor do tema Crystal</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="crystal">
      <ThemeDemo />
    </ThemeProvider>
  );
}
```

## 🎯 Benefícios

- **Simplicidade**: Foco apenas em cores, sem complexidade desnecessária
- **Flexibilidade**: Permite troca fácil entre grupos de cores
- **Consistência**: Garante uso padronizado das cores
- **Compatibilidade**: Mantém API existente do Icon
- **Extensibilidade**: Base sólida para futuras funcionalidades

## 🔮 Próximos Passos

- Suporte a modo escuro
- Melhorias de acessibilidade
- Temas customizados
- Animações de transição entre temas
