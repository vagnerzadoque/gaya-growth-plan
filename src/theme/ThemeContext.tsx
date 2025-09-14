import React, { createContext, useContext, useState, useCallback } from 'react';
import { growthPlanColors } from '../GrowthPlanColors/growthPlanColors';
import { ThemeContextType, ThemeProviderProps } from './types';
import { ThemeGroup } from '../GrowthPlanColors/growthPlanColors';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'crystal' 
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeGroup>(defaultTheme);

  const setTheme = useCallback((theme: ThemeGroup) => {
    setCurrentTheme(theme);
  }, []);

  const getColor = useCallback((group: ThemeGroup, variant?: string) => {
    const colorGroup = growthPlanColors.color[group];
    if (!colorGroup) return '#000000';
    
    if (variant) {
      return (colorGroup as any)[variant] || colorGroup.primary;
    }
    
    return colorGroup.primary;
  }, []);

  const getContrastColor = useCallback((group: ThemeGroup, variant?: string) => {
    const colorGroup = growthPlanColors.color[group];
    if (!colorGroup) return '#FFFFFF';
    
    if (variant) {
      const contrastKey = `on${variant.charAt(0).toUpperCase()}${variant.slice(1)}` as keyof typeof colorGroup;
      return (colorGroup as any)[contrastKey] || colorGroup.onPrimary;
    }
    
    return colorGroup.onPrimary;
  }, []);

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    getColor,
    getContrastColor,
    colors: growthPlanColors.color
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};
