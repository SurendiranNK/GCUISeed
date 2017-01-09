/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {
            CONTROL_PANEL: 'Control Panel',
           
            LANGUAJES: {
                LANGUAJE: 'Languaje',
                SPANISH: 'Spanish',
                ENGLISH: 'English'
            },

            // MENUES
            MENU: {
                CALLS: 'CALLS',
                CALLS_HISTORY: 'History',
                CALLS_PRICES: 'Rates',
                CALLS_STATISTICS: 'Statistics',

                CONFIG: 'CONFIG',
                CONFIG_ACCOUNTS: 'Accounts',
                CONFIG_IVRS: 'IVRs',
                CONFIG_QUEUE: 'Queues',
                CONFIG_DROPBOX: 'Dropbox',
                CONFIG_NOGEO: 'NoGeo Services',
                CONFIG_GENERAL: 'General',
                CONFIG_TERMINALS: 'Termianl Status',
                CONFIG_PROFILE: 'Profile',
                CONFIG_APHONE: 'aPhone Activation',

                BILLING: 'BILLING',
                BILLING_HISTORY: 'History',
                BILLING_PAY: 'Pay',

                LOGOUT: 'Logout'
            }, 

            // BUTTONS Actions
            BUTTON: {
                ADD: "Add New",
                DEL: "Del",
                EDIT: "Edit"
            },

            SEARCH: 'Search for something...',
            CREDIT: 'Credit',

            // Define all menu elements
            DASHBOARD: 'Dashboard',
            GRAPHS: 'Graphs',
            MAILBOX: 'Mailbox',
            WIDGETS: 'Widgets',
            METRICS: 'Metrics',
            FORMS: 'Forms',
            APPVIEWS: 'App views',
            OTHERPAGES: 'Other pages',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Miscellaneous',
            GRIDOPTIONS: 'Grid options',
            TABLES: 'Tables',
            COMMERCE: 'E-commerce',
            GALLERY: 'Gallery',
            MENULEVELS: 'Menu levels',
            ANIMATIONS: 'Animations',
            LANDING: 'Landing page',
            LAYOUTS: 'Layouts',

            // Define some custom text
            WELCOME: 'Welcome Amelia',
            MESSAGEINFO: 'You have 42 messages and 6 notifications.',
            DEMO: 'Internationalization (sometimes shortened to \"I18N , meaning \"I - eighteen letters -N\") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization . The internationalization process is sometimes called translation or localization enablement .'

        })
        .translations('es', {
            CONTROL_PANEL: 'Panel de Control',

            LANGUAJES: {
                LANGUAJE: 'Idioma',
                SPANISH: 'Español',
                ENGLISH: 'Ingles'                
            },

            MENU: {
                CALLS: 'LLAMADAS',
                CALLS_HISTORY: 'Historial',
                CALLS_PRICES: 'Precios',
                CALLS_STATISTICS: 'Estadísticas',

                CONFIG: 'CONFIGURACIÓN',
                CONFIG_ACCOUNTS: 'Cuentas',
                CONFIG_IVRS: 'Pre-atendedores / IVRs',
                CONFIG_QUEUE: 'Colas de Espera',
                CONFIG_DROPBOX: 'Dropbox',
                CONFIG_NOGEO: 'Servicios 08xx',
                CONFIG_GENERAL: 'General',
                CONFIG_TERMINALS: 'Estado Terminales',
                CONFIG_PROFILE: 'Preferencias Usuario',
                CONFIG_APHONE: 'Activar aPhone',

                BILLING: 'MIS CONSUMOS',
                BILLING_HISTORY: 'Historial',
                BILLING_PAY: 'Pagar',

                LOGOUT: 'Salir'
            },            
            
            // BUTTONS Actions
            BUTTON: {
                ADD: "Agregar Nueva",
                DEL: "Borrar",
                EDIT: "Modificar"
            },

            SEARCH: 'Busca algo ...',
            CREDIT: 'Crédito',
   

            // Define all menu elements
            DASHBOARD: 'Salpicadero',
            GRAPHS: 'Gráficos',
            MAILBOX: 'El correo',
            WIDGETS: 'Widgets',
            METRICS: 'Métrica',
            FORMS: 'Formas',
            APPVIEWS: 'Vistas app',
            OTHERPAGES: 'Otras páginas',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Misceláneo',
            GRIDOPTIONS: 'Cuadrícula',
            TABLES: 'Tablas',
            COMMERCE: 'E-comercio',
            GALLERY: 'Galería',
            MENULEVELS: 'Niveles de menú',
            ANIMATIONS: 'Animaciones',
            LANDING: 'Página de destino',
            LAYOUTS: 'Esquemas',

            // Define some custom text
            WELCOME: 'Bienvenido Amelia',
            MESSAGEINFO: 'Usted tiene 42 mensajes y 6 notificaciones.',
            DEMO: 'Internacionalización (a veces abreviado como \"I18N, que significa\" I - dieciocho letras N \") es el proceso de planificación e implementación de productos y servicios de manera que se pueden adaptar fácilmente a las lenguas y culturas locales específicas, un proceso llamado localización El proceso de internacionalización. a veces se llama la traducción o la habilitación de localización.'
        });

    $translateProvider.preferredLanguage('es');
    // security: https://angular-translate.github.io/docs/#/guide/19_security
    $translateProvider.useSanitizeValueStrategy('escape');

}

angular
    .module('inspinia')
    .config(config)
