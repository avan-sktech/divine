import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ViewMode = 'technical' | 'executive';

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isTechnical: boolean;
  isExecutive: boolean;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dlw-view-mode') as ViewMode;
      return saved || 'technical';
    }
    return 'technical';
  });

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    localStorage.setItem('dlw-view-mode', mode);
  };

  useEffect(() => {
    const saved = localStorage.getItem('dlw-view-mode') as ViewMode;
    if (saved && saved !== viewMode) {
      setViewModeState(saved);
    }
  }, []);

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        setViewMode,
        isTechnical: viewMode === 'technical',
        isExecutive: viewMode === 'executive',
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within ViewModeProvider');
  }
  return context;
};
