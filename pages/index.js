
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
      <Link href="/parent"><button className="block mb-2">{t('parent')}</button></Link>
      <Link href="/sitter"><button>{t('sitter')}</button></Link>
      <div className="mt-6">
        <button onClick={() => i18n.changeLanguage('ko')}>🇰🇷 한국어</button>
        <button onClick={() => i18n.changeLanguage('en')} className="ml-4">🇺🇸 English</button>
      </div>
    </div>
  );
}
