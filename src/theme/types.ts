import { GrowthPlanColors, ThemeGroup } from '../GrowthPlanColors/growthPlanColors';

export interface ThemeContextType {
  currentTheme: ThemeGroup;
  setTheme: (theme: ThemeGroup) => void;
  getColor: (group: ThemeGroup, variant?: string) => string;
  getContrastColor: (group: ThemeGroup, variant?: string) => string;
  colors: GrowthPlanColors['color'];
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeGroup;
}

// ColorVariant is now exported from growthPlanColors.ts to avoid conflicts
