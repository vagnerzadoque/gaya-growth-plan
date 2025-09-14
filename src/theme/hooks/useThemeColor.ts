import { useTheme } from './useTheme';
import { ThemeGroup } from '../../GrowthPlanColors/growthPlanColors';

export const useThemeColor = (group: ThemeGroup, variant?: string) => {
  const { getColor, getContrastColor } = useTheme();
  
  return {
    color: getColor(group, variant),
    contrastColor: getContrastColor(group, variant),
    getColor: (variantName?: string) => getColor(group, variantName),
    getContrastColor: (variantName?: string) => getContrastColor(group, variantName)
  };
};
