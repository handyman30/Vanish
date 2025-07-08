import { LanguageProvider } from "../../contexts/LanguageContext";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
