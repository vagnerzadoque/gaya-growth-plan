import { grouwthPlanColors } from '../../GrowthPlanColors/growthPlanColors';
import { ThemeGroup, ColorVariant } from '../types';

/**
 * Verifica se uma cor existe no tema
 */
export const isValidThemeColor = (group: ThemeGroup, variant: string): boolean => {
  const colorGroup = grouwthPlanColors.color[group];
  if (!colorGroup) return false;
  
  return variant in colorGroup;
};

/**
 * Obtém todas as cores de um grupo específico
 */
export const getThemeGroupColors = (group: ThemeGroup) => {
  return grouwthPlanColors.color[group] || {};
};

/**
 * Obtém a cor de contraste automática baseada na luminosidade
 */
export const getAutoContrastColor = (hexColor: string): string => {
  // Remove o # se presente
  const hex = hexColor.replace('#', '');
  
  // Converte para RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calcula luminosidade usando fórmula padrão
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Retorna branco para cores escuras, preto para cores claras
  return luminance > 0.5 ? '#111111' : '#FFFFFF';
};

/**
 * Obtém todas as cores disponíveis do tema
 */
export const getAllThemeColors = () => {
  return grouwthPlanColors.color;
};

/**
 * Obtém lista de grupos de cores disponíveis
 */
export const getAvailableThemeGroups = (): ThemeGroup[] => {
  return Object.keys(grouwthPlanColors.color) as ThemeGroup[];
};

/**
 * Obtém informações sobre uma cor específica
 */
export const getColorInfo = (group: ThemeGroup, variant: string) => {
  const colorGroup = grouwthPlanColors.color[group];
  if (!colorGroup) return null;
  
  const color = (colorGroup as any)[variant];
  const contrastKey = `on${variant.charAt(0).toUpperCase()}${variant.slice(1)}`;
  const contrastColor = (colorGroup as any)[contrastKey];
  
  return {
    color,
    contrastColor,
    hex: color,
    hasContrast: !!contrastColor
  };
};
