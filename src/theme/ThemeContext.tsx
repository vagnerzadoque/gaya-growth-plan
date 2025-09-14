import React, { createContext, useContext, useState, useCallback } from 'react';
import { grouwthPlanColors } from '../GrowthPlanColors/growthPlanColors';
import { ThemeContextType, ThemeGroup, ThemeProviderProps } from './types';

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
    const colorGroup = grouwthPlanColors.color[group];
    if (!colorGroup) return '#000000';
    
    if (variant) {
      return (colorGroup as any)[variant] || colorGroup[group as keyof typeof colorGroup];
    }
    
    return colorGroup[group as keyof typeof colorGroup];
  }, []);

  const getContrastColor = useCallback((group: ThemeGroup, variant?: string) => {
    const colorGroup = grouwthPlanColors.color[group];
    if (!colorGroup) return '#FFFFFF';
    
    const baseVariant = variant || group;
    const contrastKey = `on${baseVariant.charAt(0).toUpperCase()}${baseVariant.slice(1)}` as keyof typeof colorGroup;
    
    return (colorGroup as any)[contrastKey] || colorGroup[`on${group.charAt(0).toUpperCase()}${group.slice(1)}` as keyof typeof colorGroup];
  }, []);

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    getColor,
    getContrastColor,
    colors: grouwthPlanColors.color
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
