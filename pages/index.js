
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Home() {
  const { data: session } = useSession();
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
      {session ? (
        <>
          <button onClick={() => signOut()} className="mb-4">{t('logout')}</button>
          <Link href="/parent"><button className="block mb-2">{t('parent')}</button></Link>
          <Link href="/sitter"><button>{t('sitter')}</button></Link>
        </>
      ) : (
        <button onClick={() => signIn('google')}>{t('login')}</button>
      )}
      <div className="mt-6">
        <button onClick={() => i18n.changeLanguage('ko')}>🇰🇷 한국어</button>
        <button onClick={() => i18n.changeLanguage('en')} className="ml-4">🇺🇸 English</button>
      </div>
    </div>
  );
}
