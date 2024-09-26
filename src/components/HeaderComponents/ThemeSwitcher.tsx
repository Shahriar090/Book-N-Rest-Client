import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
import {
  getCurrentTheme,
  toggleTheme,
} from "@/redux/features/theme/themeSlice";
import { CiCloudMoon, CiCloudSun } from "react-icons/ci";
const ThemeSwitcher = () => {
  const theme = useAppSelector(getCurrentTheme);
  const dispatch = useAppDispatch();
  return (
    <div>
      {theme === "light" ? (
        <Button
          onClick={() => dispatch(toggleTheme())}
          variant="secondary"
          className="rounded-full text-lg"
          size="sm"
        >
          <CiCloudMoon />
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(toggleTheme())}
          variant="secondary"
          className="rounded-full text-lg"
        >
          <CiCloudSun />
        </Button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
