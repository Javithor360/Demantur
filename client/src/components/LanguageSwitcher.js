import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <select
      id="language"
      value={i18n.language}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
        window.scrollTo(0, 0);
      }}
      className="select-item"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};
