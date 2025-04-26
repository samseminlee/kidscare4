
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { "welcome": "Welcome!", "parent": "Parent Request", "sitter": "Sitter Register", "reviews": "Reviews" } },
    ko: { translation: { "welcome": "환영합니다!", "parent": "부모 신청", "sitter": "시터 등록", "reviews": "리뷰" } }
  },
  lng: "ko",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
