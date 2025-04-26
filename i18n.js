
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { "welcome": "Welcome!", "login": "Login", "logout": "Logout", "parent": "Parent Request", "sitter": "Sitter Register" } },
    ko: { translation: { "welcome": "환영합니다!", "login": "로그인", "logout": "로그아웃", "parent": "부모 신청", "sitter": "시터 등록" } }
  },
  lng: "ko",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
