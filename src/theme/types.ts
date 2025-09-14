import { GrowthPlanColorsTypes } from '../GrowthPlanColors/growthPlanColors';

export type ThemeGroup = keyof GrowthPlanColorsTypes['color'];

export interface ThemeContextType {
  currentTheme: ThemeGroup;
  setTheme: (theme: ThemeGroup) => void;
  getColor: (group: ThemeGroup, variant?: string) => string;
  getContrastColor: (group: ThemeGroup, variant?: string) => string;
  colors: GrowthPlanColorsTypes['color'];
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeGroup;
}

export type ColorVariant = 
  | 'crystal' | 'crystalLight' | 'crystalLightest' | 'crystalDark' | 'crystalDarkest'
  | 'bronze' | 'bronzeLight' | 'bronzeLightest' | 'bronzeDark' | 'bronzeDarkest'
  | 'silver' | 'silverLight' | 'silverLightest' | 'silverDark' | 'silverDarkest'
  | 'gold' | 'goldLight' | 'goldLightest' | 'goldDark' | 'goldDarkest'
  | 'sapphire' | 'sapphireLight' | 'sapphireLightest' | 'sapphireDark' | 'sapphireDarkest'
  | 'diamond' | 'diamondLight' | 'diamondLightest' | 'diamondDark' | 'diamondDarkest'
  | 'diamondPlus' | 'diamondPlusLight' | 'diamondPlusLightest' | 'diamondPlusDark' | 'diamondPlusDarkest';
