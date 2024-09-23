import { getCurrentTheme } from "@/redux/features/theme/themeSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(getCurrentTheme);
  return (
    <div className={theme}>
      <div className="bg-white text-primary-text dark:text-primary-text dark:bg-dark-theme">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
