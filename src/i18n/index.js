//import i18n from 'i18n-js';  
import i18n from 'react-native-i18n';
import es from './locales/es.json';
import en from './locales/en.json';

i18n.defaultLocale = 'es';
//i18n.locale =  'en';
i18n.fallbacks = true;
i18n.translations = { es, en };
i18n.currentLocale();

export default i18n;

/*
Examples
==========

With WildCards: {i18n.t('home.welcome', { appName: i18n.t('appName')})}
Simple Text: {i18n.t('home.start_practice')}
*/