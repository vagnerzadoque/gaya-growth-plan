import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { getIconNames } from './Utils/getOptions';
import { ThemeProvider } from './theme/ThemeContext';
import { ThemeGroup } from './GrowthPlanColors/growthPlanColors';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: getIconNames(),
      control: { type: 'select'}
    },
    size: { control: { type: 'number', min: 16, max: 64, step: 4 }, description: 'Tamanho do ícone em pixels' },
    color: { control: 'color', description: 'Cor do ícone (ignorada quando themeColor=true)' },
    className: { control: 'text', description: 'Classes CSS adicionais' },
    themeColor: { control: 'boolean', description: 'Usar cor do tema' },
    theme: {
      options: ['crystal', 'bronze', 'silver', 'gold', 'sapphire', 'diamond', 'diamondPlus'],
      control: { type: 'select' },
      description: 'Grupo de cores do tema'
    },
    themeVariant: { 
      options: [
        'primary', 'primaryLight', 'primaryLightest', 'primaryDark', 'primaryDarkest'
      ],
      control: { type: 'select' },
      description: 'Variante de cor do tema (usado quando themeColor=true)'
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const theme = context.args.theme || 'crystal';
      return (
        <ThemeProvider defaultTheme={theme as ThemeGroup}>
          <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'filled-action-add',
    size: 32,
    color: '#007bff',
    themeColor: false,
    theme: 'crystal',
    themeVariant: 'primary',
  },
};

export const WithTheme: Story = {
  args: {
    name: 'filled-content-trophystar',
    size: 32,
    themeColor: true,
    theme: 'crystal',
    themeVariant: 'primary',
  },
  argTypes: {
    color: { table: { disable: true } }, // Desabilita o controle de cor quando usando tema
  },
};

export const ThemeVariants: Story = {
  args: {
    name: 'filled-action-love',
    size: 32,
    themeColor: true,
    theme: 'crystal',
    themeVariant: 'primaryLight',
  },
  argTypes: {
    color: { table: { disable: true } },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Icon {...args} themeVariant="primary" />
        <Icon {...args} themeVariant="primaryLight" />
        <Icon {...args} themeVariant="primaryLightest" />
        <Icon {...args} themeVariant="primaryDark" />
        <Icon {...args} themeVariant="primaryDarkest" />
      </div>
      <div style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
        Diferentes variantes do tema
      </div>
    </div>
  ),
};

export const ThemeGroups: Story = {
  args: {
    name: 'filled-content-trophystar',
    size: 32,
    themeColor: true,
    theme: 'crystal',
    themeVariant: 'primary',
  },
  argTypes: {
    color: { table: { disable: true } },
    themeVariant: { table: { disable: true } },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Icon {...args} theme="crystal" />
        <Icon {...args} theme="bronze" />
        <Icon {...args} theme="silver" />
        <Icon {...args} theme="gold" />
        <Icon {...args} theme="sapphire" />
        <Icon {...args} theme="diamond" />
        <Icon {...args} theme="diamondPlus" />
      </div>
      <div style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
        Diferentes grupos de cores do tema
      </div>
    </div>
  ),
};

export const InteractiveTheme: Story = {
  args: {
    name: 'filled-action-love',
    size: 48,
    themeColor: true,
    theme: 'crystal',
    themeVariant: 'primary',
  },
  argTypes: {
    color: { table: { disable: true } },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1rem' }}>
        Use os controles abaixo para testar diferentes temas e variantes
      </div>
      <Icon {...args} />
      <div style={{ fontSize: '12px', color: '#666', textAlign: 'center', maxWidth: '300px' }}>
        Este ícone usa as cores do tema selecionado. Ative "themeColor" e escolha um tema e variante para ver as cores mudarem automaticamente.
      </div>
    </div>
  ),
};
