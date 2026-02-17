import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";

export const languageData = {
  1: "English",
  2: "हिन्दी",
  3: "Deutsch",      // German
  4: "Français",     // French
  5: "Español",      // Spanish
  6: "日本語",        // Japanese
};

export const navBarData = {
  1: {
    // English
    companyName: "Expense Tracker",

    dashboard: "Dashboard",
    transactions: "Transactions",
    budgets: "Budgets",
    savings: "Savings",
    goals: "Goals",
    settings: "Settings",
    create: 'Create',

    // settings page 
    profile: 'Profile',
    name: 'Name',
    gender: 'Gender',

    preference: 'Preference',
    preferredLanguage: 'Preferred Language',
    currency: 'Currency',
    timeZone: 'TimeZone',

    appearance: 'Appearance',
    lightDarkThemes: 'Light & Dark themes',

    export: 'Export',
    reset: 'Reset',

    //transaction page 
    all: 'All',
    income: 'Income',
    expense: 'Expense',
    // export already exist 

    date: 'Date',
    // name already 
    type: 'Type',
    amount: 'Amount',
    remarks: 'Remarks',

    // savings 
    totalSavings: 'Total Savings',
    thisMonthSaving: 'This Month Saving',

    //budgets 
    active: 'Active',
    completed: 'Completed',

    // goals 
    thisMonthContribution: 'This Month Contribution',
    noOfActiveGoals: 'No of Active Goals',
    noOfCompletedGoals: 'No of Completed Goals',

    // active exists 
    // completed exists

    // top nav drop down 
    transaction: 'Transaction',
    budget: 'Budget',
    saving: 'Saving',
    goal: 'Goal',

    // add transaction 
    //type: 'Type',
    category: 'Category',
    subCategory: 'Sub Category',
    // date 
    // amount 
    notes: 'Notes',
    cancel: 'Cancel',

    selectOption: 'Select option',
    enterAmount: 'Enter Amount',
    enterSomething: 'Enter Something...',

    typeValidationLabel: 'Please select Type',
    categoryValidationLabel: 'Please select Category',
    subCategoryValidationLabel: 'Please select Sub Category',
    dateValidationLabel: 'Please choose Date',
    amountValidationLabel: 'Please select Amount',

    // add saving 
    // name
    saving: 'Saving',
    nameValidtionLabel: 'Please enter name',
    enterName: 'Enter Name',

    // add budget 
    title: 'Title',
    titleValidationLabel: 'Please enter Title',

    //add goal 
    /// title
    // category 
    targetAmount: 'Target Amount',
    deadLine: 'DeadLine',
    remarks: 'Remarks',
    priority: 'Priority',
    priorityValidationLabel: 'Please select Priority',

    // add modal 
    savingData: 'Saving Data...',
    loading: 'Loading...',

    total: 'Total',

    // transaction delete conformation 
    confirmDeletionOfTransaction: 'Confirm Deletion of Transaction(s)',
    areYouSureWantToDeleteTheSelectedRows: 'Are you sure want to delete the selected row(s)?',
    thisActionCannotBeUnDone: 'This action cannot be undone.',

    // budgets 
    addExpense: 'Add Expense',
    edit: 'Edit',
    delete: 'Delete',

    // budgets delete conformation
    confirmDeletionOfBudget: 'Confirm Deletion of Budget',
    areYouSureWantToDeleteTheSelectedBudget: 'Are you sure want to delete the selected budget?',
    //thisActionCannotBeUnDone: 'This action cannot be undone.',
    selected: 'Selected',

    remainingFrom: 'Remaning from',
    createdOn: 'Created on',
    amountSpent: 'Amount spent',
    utilization: 'Utilization',


    deposit: 'Deposit',
    withdraw: 'Withdraw',

    areYouSureWantToDeleteTheSelectedGoal: 'Are you sure want to delete selected goal?',
    confirmDeletionOfGoal: 'Confirm deletion of Goal',

    addFund: 'Add fund',
    outOf: 'Out of',
    daysLeft: 'days left',
    priority: 'Priority',

    noRecords: 'No Records',
    nothingToShow: 'There is nothing to show right now',
    addTransactionToSeeData: 'Add new transaction to view here.',

    //settings 
    logout: 'Log out',
    confirmationForLogout: 'Confirmation for logout',
    areYouSureAboutLogout: 'Are you sure want to logout of this application',
    chooseYourResponse: 'Choose your response below',

    selectLanguage: 'Select Language',
    selectCurrency: 'Select Currency',


    personalize: 'Personalize',
    appearance: 'Appearance',
    selectTheme: 'Select Theme',


    noValues: 'No Values',
    chooseCategoryToSeeValuesHere: 'Select a category to view options',

    // settings 
    accountSettings: 'Account Settings',
    exportDesc: 'Export all your transaction and savings records for personal backup or reports',
    clickToExport: 'Click here to export',
    resetDesc: 'This will permanently delete all your data, including transactions, savings, budgets, and goals. This action cannot be undone.',
    clickToReset: 'Click here to reset all data',

    
    pages: 'pages',
    of: 'of',
    goToSettingsPage: 'Go to settings page',

    financialOverview: 'Financial Overview',
    recentTransaction: 'Recent Transaction',
    accountOverview: 'Account Overview',
    activeGoals: 'Active Goals',
    savingGrowth: 'Saving Growth',
    viewMore: 'View More',
    balance: 'Balance',
    
    // need translation 
    import: 'Import',
    toBegin : 'To begin using the app, you can start with sample data or opt out. We have also provided the option to reset the data anytime.',
    sampleData: 'Sample Data',
    finish: 'Finish',
    toBeginDesc: 'We recommend starting with sample data to get a better feel for the app’s structure and functionality.',
    continueWithSampleData: 'Continue with Sample Data',
    finovex: 'Finovex',
    


  },







  2: {
    // Hindi

    loading: 'लोड हो रहा है...',

    companyName: "खर्च ट्रैकर",

    dashboard: "डैशबोर्ड",
    transactions: "लेन-देन",
    budgets: "बजट",
    savings: "बचत",
    goals: "लक्ष्य",
    settings: "सेटिंग्स",
    create: 'बनाएँ',

    // setings page 
    profile: 'प्रोफ़ाइल',
    name: 'नाम',
    gender: 'लिंग',

    preference: 'पसंद',
    preferredLanguage: 'पसंदीदा भाषा',
    currency: 'मुद्रा',
    timeZone: 'समय क्षेत्र',

    appearance: 'दिखावट',
    lightDarkThemes: 'लाइट और डार्क थीम',

    export: 'निर्यात',
    reset: 'रीसेट',

    // transaction 
    all: 'सभी',
    income: 'आय',
    expense: 'खर्च',
    // export already exist 

    date: 'तारीख',
    // name already 
    type: 'प्रकार',
    amount: 'राशि',
    remarks: 'टिप्पणियाँ',

    // savings 
    totalSavings: 'कुल बचत',
    thisMonthSaving: 'इस महीने की बचत',

    //budgets 
    active: 'सक्रिय',
    completed: 'पूर्ण',

    // goals 
    thisMonthContribution: 'इस महीने का योगदान',
    noOfActiveGoals: 'सक्रिय लक्ष्यों की संख्या',
    noOfCompletedGoals: 'पूर्ण किए गए लक्ष्यों की संख्या',

    // active exists 
    // completed exists

    // top nav drop down 
    transaction: 'लेन-देन',
    budget: 'बजट',
    saving: 'बचत',
    goal: 'लक्ष्य',

    // add transaction 
    //type: 'Type',
    category: 'श्रेणी',
    subCategory: 'उप-श्रेणी',
    // date 
    // amount 
    notes: 'टिप्पणियाँ',
    cancel: 'रद्द करें',

    selectOption: 'विकल्प चुनें',
    enterAmount: 'राशि दर्ज करें',
    enterSomething: 'कुछ दर्ज करें...',

    typeValidationLabel: 'कृपया प्रकार चुनें',
    categoryValidationLabel: 'कृपया श्रेणी चुनें',
    subCategoryValidationLabel: 'कृपया उप-श्रेणी चुनें',
    dateValidationLabel: 'कृपया तिथि चुनें',
    amountValidationLabel: 'कृपया राशि चुनें',

    // add saving 
    // name
    saving: 'बचत',
    nameValidtionLabel: 'कृपया नाम दर्ज करें',
    enterName: 'नाम दर्ज करें',

    // add budget 
    title: 'शीर्षक',
    titleValidationLabel: 'कृपया शीर्षक दर्ज करें',

    //add goal 
    /// title
    // category 
    targetAmount: 'लक्षित राशि',
    deadLine: 'अंतिम तिथि',
    remarks: 'टिप्पणियाँ',
    priority: 'Priority',
    priorityValidationLabel: 'कृपया प्राथमिकता चुनें',


    // add modal 
    savingData: 'डेटा सहेजा जा रहा है...',
    total: 'कुल',

    // transaction delete conformation 
    confirmDeletionOfTransaction: 'लेन-देन हटाने की पुष्टि',
    areYouSureWantToDeleteTheSelectedRows: 'क्या आप चयनित पंक्तियों को हटाना चाहते हैं?',
    thisActionCannotBeUnDone: 'यह कार्रवाई पूर्ववत नहीं की जा सकती।',

    // budgets 
    addExpense: 'खर्च जोड़ें',
    edit: 'संपादित करें',
    delete: 'हटाएं',

    // budgets delete conformation
    confirmDeletionOfBudget: 'बजट हटाने की पुष्टि',
    areYouSureWantToDeleteTheSelectedBudget: 'क्या आप चयनित बजट को हटाना चाहते हैं?',
    thisActionCannotBeUnDone: 'यह कार्रवाई पूर्ववत नहीं की जा सकती।',

    selected: 'चयनित',

    remainingFrom: 'से शेष राशि',
    createdOn: 'निर्माण तिथि',
    amountSpent: 'खर्च की गई राशि',
    utilization: 'उपयोग',

    deposit: 'जमा',
    withdraw: 'निकासी',

    areYouSureWantToDeleteTheSelectedGoal: 'क्या आप चयनित लक्ष्य को हटाना चाहते हैं?',
    confirmDeletionOfGoal: 'लक्ष्य हटाने की पुष्टि करें',

    addFund: 'फंड जोड़ें',
    outOf: 'में से',
    daysLeft: 'दिन शेष',
    priority: 'प्राथमिकता',

    noRecords: 'कोई रिकॉर्ड नहीं',
    nothingToShow: 'इस समय दिखाने के लिए कुछ नहीं है',
    addTransactionToSeeData: 'यहाँ डेटा देखने के लिए नया लेन-देन जोड़ें।',

    logout: 'लॉग आउट',
    confirmationForLogout: 'लॉग आउट की पुष्टि',
    areYouSureAboutLogout: 'क्या आप इस एप्लिकेशन से लॉग आउट करना चाहते हैं?',
    chooseYourResponse: 'नीचे अपना विकल्प चुनें',

    selectLanguage: 'भाषा चुनें',
    selectCurrency: 'मुद्रा चुनें',
    personalize: 'व्यक्तिगत करें',
    appearance: 'दिखावट',
    selectTheme: 'थीम चुनें',
    noValues: 'कोई मान नहीं',
    chooseCategoryToSeeValuesHere: 'विकल्प देखने के लिए श्रेणी चुनें',

    accountSettings: 'खाता सेटिंग्स',
    exportDesc: 'अपने लेन-देन और बचत रिकॉर्ड को बैकअप या रिपोर्ट के लिए निर्यात करें।',
    clickToExport: 'निर्यात करने के लिए यहाँ क्लिक करें',
    resetDesc: 'यह आपकी सभी जानकारी को स्थायी रूप से हटा देगा, जिसमें लेन-देन, बचत, बजट और लक्ष्य शामिल हैं। यह क्रिया वापस नहीं की जा सकती।',
    clickToReset: 'सभी डेटा रीसेट करने के लिए यहाँ क्लिक करें',

    pages: 'पेज',
    of: 'का',
    goToSettingsPage: 'सेटिंग्स पेज पर जाएँ',

    financialOverview: 'वित्तीय अवलोकन',
    recentTransaction: 'हाल की लेन-देन',
    accountOverview: 'खाता अवलोकन',
    activeGoals: 'सक्रिय लक्ष्य',
    savingGrowth: 'बचत वृद्धि',
    viewMore: 'और देखें',
    balance: 'शेष राशि'

  },











  3: {
    // German



    // add modal 
    savingData: 'Daten werden gespeichert...',
    loading: 'Wird geladen...',


    companyName: "Ausgabenverfolger",

    dashboard: "Dashboard",
    transactions: "Transaktionen",
    budgets: "Budgets",
    savings: "Ersparnisse",
    goals: "Ziele",
    settings: "Einstellungen",
    create: 'Erstellen',

    // settings page 
    profile: 'Profil',
    name: 'Name',
    gender: 'Geschlecht',

    preference: 'Einstellung',
    preferredLanguage: 'Bevorzugte Sprache',
    currency: 'Währung',
    timeZone: 'Zeitzone',

    appearance: 'Erscheinungsbild',
    lightDarkThemes: 'Helle & dunkle Themen',

    export: 'Exportieren',
    reset: 'Zurücksetzen',

    // transactions 
    all: 'Alle',
    income: 'Einnahmen',
    expense: 'Ausgaben',
    // export already exist 

    date: 'Datum',
    // name already 
    type: 'Typ',
    amount: 'Betrag',
    remarks: 'Bemerkungen',

    // savings 
    totalSavings: 'Gesamtersparnisse',
    thisMonthSaving: 'Ersparnisse dieses Monats',

    //budgets 
    active: 'Aktiv',
    completed: 'Abgeschlossen',

    // goals 
    thisMonthContribution: 'Beitrag dieses Monats',
    noOfActiveGoals: 'Anzahl aktiver Ziele',
    noOfCompletedGoals: 'Anzahl abgeschlossener Ziele',

    // active exists 
    // completed exists

    // top nav drop
    transaction: 'Transaktion',
    budget: 'Budget',
    saving: 'Ersparnis',
    goal: 'Ziel',

    // add transaction 
    //type: 'Type',
    category: 'Kategorie',
    subCategory: 'Unterkategorie',
    // date 
    // amount 
    notes: 'Notizen',
    create: 'Erstellen',
    cancel: 'Abbrechen',

    selectOption: 'Option auswählen',
    enterAmount: 'Betrag eingeben',
    enterSomething: 'Etwas eingeben...',

    typeValidationLabel: 'Bitte Typ auswählen',
    categoryValidationLabel: 'Bitte Kategorie auswählen',
    subCategoryValidationLabel: 'Bitte Unterkategorie auswählen',
    dateValidationLabel: 'Bitte Datum auswählen',
    amountValidationLabel: 'Bitte Betrag auswählen',

    // add saving 
    // name
    saving: 'Sparen',
    nameValidtionLabel: 'Bitte Namen eingeben',
    enterName: 'Name eingeben',

    // add budget 
    title: 'Titel',
    titleValidationLabel: 'Bitte Titel eingeben',

    //add goal 
    /// title
    // category 
    targetAmount: 'Zielbetrag',
    deadLine: 'Frist',
    remarks: 'Bemerkungen',
    priority: 'Priorität',
    priorityValidationLabel: 'Bitte Priorität auswählen',

    total: 'Gesamt',

    // transaction delete conformation 
    confirmDeletionOfTransaction: 'Löschen der Transaktion bestätigen',
    areYouSureWantToDeleteTheSelectedRows: 'Möchten Sie die ausgewählten Zeilen wirklich löschen?',
    thisActionCannotBeUnDone: 'Diese Aktion kann nicht rückgängig gemacht werden.',

    // budgets 
    addExpense: 'Ausgabe hinzufügen',
    edit: 'Bearbeiten',
    delete: 'Löschen',

    // budgets delete conformation
    confirmDeletionOfBudget: 'Löschen des Budgets bestätigen',
    areYouSureWantToDeleteTheSelectedBudget: 'Möchten Sie das ausgewählte Budget wirklich löschen?',
    //thisActionCannotBeUnDone: 'Diese Aktion kann nicht rückgängig gemacht werden.',

    selected: 'Ausgewählt',
    remainingFrom: 'Verbleibend von',
    createdOn: 'Erstellt am',
    amountSpent: 'Ausgegebener Betrag',
    utilization: 'Auslastung',

    deposit: 'Einzahlung',
    withdraw: 'Abhebung',

    areYouSureWantToDeleteTheSelectedGoal: 'Möchten Sie das ausgewählte Ziel wirklich löschen?',
    confirmDeletionOfGoal: 'Löschen des Ziels bestätigen',

    addFund: 'Geld hinzufügen',
    outOf: 'von',
    daysLeft: 'Tage übrig',
    priority: 'Priorität',

    noRecords: 'Keine Einträge',
    nothingToShow: 'Zurzeit gibt es nichts anzuzeigen',
    addTransactionToSeeData: 'Fügen Sie eine neue Transaktion hinzu, um Daten anzuzeigen.',

    logout: 'Abmelden',
    confirmationForLogout: 'Abmeldebestätigung',
    areYouSureAboutLogout: 'Möchten Sie sich wirklich von dieser Anwendung abmelden?',
    chooseYourResponse: 'Wählen Sie unten Ihre Option',

    selectLanguage: 'Sprache auswählen',
    selectCurrency: 'Währung auswählen',
    personalize: 'Personalisieren',
    appearance: 'Erscheinungsbild',
    selectTheme: 'Thema auswählen',

    noValues: 'Keine Werte',
    chooseCategoryToSeeValuesHere: 'Kategorie auswählen, um Optionen anzuzeigen',

    accountSettings: 'Kontoeinstellungen',
    exportDesc: 'Exportieren Sie alle Transaktions- und Sparaufzeichnungen für Backups oder Berichte.',
    clickToExport: 'Hier klicken zum Exportieren',
    resetDesc: 'Alle Ihre Daten, einschließlich Transaktionen, Ersparnisse, Budgets und Ziele, werden dauerhaft gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.',
    clickToReset: 'Hier klicken, um alle Daten zurückzusetzen',

    pages: 'Seiten',
    of: 'von',
    goToSettingsPage: 'Zur Einstellungsseite gehen',

    financialOverview: 'Finanzübersicht',
    recentTransaction: 'Letzte Transaktionen',
    accountOverview: 'Kontoübersicht',
    activeGoals: 'Aktive Ziele',
    savingGrowth: 'Sparwachstum',
    viewMore: 'Mehr anzeigen',
    balance: 'Kontostand'
  },












  4: {
    // French

    // add modal 
    savingData: 'Enregistrement des données...',
    loading: 'Chargement...',


    companyName: "Suivi des Dépenses",

    dashboard: "Tableau de bord",
    transactions: "Transactions",
    budgets: "Budgets",
    savings: "Économies",
    goals: "Objectifs",
    settings: "Paramètres",
    create: 'Créer',

    //settings page 
    profile: 'Profil',
    name: 'Nom',
    gender: 'Genre',

    preference: 'Préférence',
    preferredLanguage: 'Langue préférée',
    currency: 'Devise',
    timeZone: 'Fuseau horaire',

    appearance: 'Apparence',
    lightDarkThemes: 'Thèmes clair et sombre',

    export: 'Exporter',
    reset: 'Réinitialiser',

    // transactions 
    all: 'Tous',
    income: 'Revenu',
    expense: 'Dépense',
    // export already exist 

    date: 'Date',
    // name already 
    type: 'Type',
    amount: 'Montant',
    remarks: 'Remarques',

    // savings 
    totalSavings: 'Économies totales',
    thisMonthSaving: 'Économies de ce mois',

    //budgets 
    active: 'Actif',
    completed: 'Terminé',

    // goals 
    thisMonthContribution: 'Contribution de ce mois',
    noOfActiveGoals: 'Nombre d’objectifs actifs',
    noOfCompletedGoals: 'Nombre d’objectifs terminés',

    // active exists 
    // completed exists

    // French
    transaction: 'Transaction',
    budget: 'Budget',
    saving: 'Épargne',
    goal: 'Objectif',

    // add transaction 
    //type: 'Type',
    category: 'Catégorie',
    subCategory: 'Sous-catégorie',
    // date 
    // amount 
    notes: 'Notes',
    create: 'Créer',
    cancel: 'Annuler',

    selectOption: 'Sélectionner une option',
    enterAmount: 'Entrer le montant',
    enterSomething: 'Entrez quelque chose...',

    typeValidationLabel: 'Veuillez sélectionner le type',
    categoryValidationLabel: 'Veuillez sélectionner la catégorie',
    subCategoryValidationLabel: 'Veuillez sélectionner la sous-catégorie',
    dateValidationLabel: 'Veuillez choisir la date',
    amountValidationLabel: 'Veuillez sélectionner le montant',

    // add saving 
    // name
    saving: 'Épargne',
    nameValidtionLabel: 'Veuillez entrer le nom',
    enterName: 'Entrer le nom',

    // add budget 
    title: 'Titre',
    titleValidationLabel: 'Veuillez entrer le titre',

    //add goal 
    /// title
    // category 
    targetAmount: 'Montant cible',
    deadLine: 'Date limite',
    remarks: 'Remarques',

    priority: 'Priorité',
    priorityValidationLabel: 'Veuillez sélectionner la priorité',

    total: 'Total',

    // transaction delete conformation 
    confirmDeletionOfTransaction: 'Confirmer la suppression de la transaction',
    areYouSureWantToDeleteTheSelectedRows: 'Êtes-vous sûr de vouloir supprimer les lignes sélectionnées ?',
    thisActionCannotBeUnDone: 'Cette action ne peut pas être annulée.',

    // budgets 
    addExpense: 'Ajouter une dépense',
    edit: 'Modifier',
    delete: 'Supprimer',

    // budgets delete conformation
    confirmDeletionOfBudget: 'Confirmer la suppression du budget',
    areYouSureWantToDeleteTheSelectedBudget: 'Êtes-vous sûr de vouloir supprimer le budget sélectionné ?',
    //thisActionCannotBeUnDone: 'Cette action ne peut pas être annulée.',
    selected: 'Sélectionné',

    remainingFrom: 'Restant de',
    createdOn: 'Créé le',
    amountSpent: 'Montant dépensé',
    utilization: 'Utilisation',

    deposit: 'Dépôt',
    withdraw: 'Retrait',

    areYouSureWantToDeleteTheSelectedGoal: 'Êtes-vous sûr de vouloir supprimer l’objectif sélectionné ?',
    confirmDeletionOfGoal: 'Confirmer la suppression de l’objectif',

    addFund: 'Ajouter des fonds',
    outOf: 'sur',
    daysLeft: 'jours restants',
    priority: 'Priorité',

    noRecords: 'Aucun enregistrement',
    nothingToShow: "Il n'y a rien à afficher pour le moment",
    addTransactionToSeeData: 'Ajoutez une nouvelle transaction pour voir les données ici.',

    logout: 'Se déconnecter',
    confirmationForLogout: 'Confirmation de déconnexion',
    areYouSureAboutLogout: 'Êtes-vous sûr de vouloir vous déconnecter de cette application ?',
    chooseYourResponse: 'Choisissez votre réponse ci-dessous',

    selectLanguage: 'Sélectionner la langue',
    selectCurrency: 'Sélectionner la devise',

    personalize: 'Personnaliser',
    appearance: 'Apparence',
    selectTheme: 'Sélectionner le thème',

    noValues: 'Aucune valeur',
    chooseCategoryToSeeValuesHere: 'Sélectionnez une catégorie pour voir les options',

    accountSettings: 'Paramètres du compte',
    exportDesc: 'Exportez toutes vos transactions et économies pour sauvegarde ou rapports.',
    clickToExport: 'Cliquez ici pour exporter',
    resetDesc: 'Cela supprimera définitivement toutes vos données, y compris les transactions, économies, budgets et objectifs. Cette action est irréversible.',
    clickToReset: 'Cliquez ici pour tout réinitialiser',

    pages: 'pages',
    of: 'de',
    goToSettingsPage: 'Aller à la page des paramètres',

    financialOverview: 'Aperçu financier',
    recentTransaction: 'Transactions récentes',
    accountOverview: 'Aperçu du compte',
    activeGoals: 'Objectifs actifs',
    savingGrowth: 'Croissance de l’épargne',
    viewMore: 'Voir plus',
    balance: 'Solde'
  },













  5: {
    // Spanish

    // add modal 
    savingData: 'Guardando datos...',
    loading: 'Cargando...',



    companyName: "Control de Gastos",

    dashboard: "Panel",
    transactions: "Transacciones",
    budgets: "Presupuestos",
    savings: "Ahorros",
    goals: "Objetivos",
    settings: "Configuración",
    create: 'Crear',

    // settings page 
    profile: 'Perfil',
    name: 'Nombre',
    gender: 'Género',

    preference: 'Preferencia',
    preferredLanguage: 'Idioma preferido',
    currency: 'Moneda',
    timeZone: 'Zona horaria',

    appearance: 'Apariencia',
    lightDarkThemes: 'Temas claro y oscuro',

    export: 'Exportar',
    reset: 'Restablecer',

    // transactions 
    all: 'Todo',
    income: 'Ingreso',
    expense: 'Gasto',
    // export already exist 

    date: 'Fecha',
    // name already 
    type: 'Tipo',
    amount: 'Cantidad',
    remarks: 'Observaciones',

    // savings 
    totalSavings: 'Ahorros totales',
    thisMonthSaving: 'Ahorro de este mes',


    //budgets 
    active: 'Activo',
    completed: 'Completado',

    // goals 
    thisMonthContribution: 'Contribución de este mes',
    noOfActiveGoals: 'Número de objetivos activos',
    noOfCompletedGoals: 'Número de objetivos completados',

    // active exists 
    // completed exists

    // Spanish
    transaction: 'Transacción',
    budget: 'Presupuesto',
    saving: 'Ahorro',
    goal: 'Meta',

    // add transaction 
    //type: 'Type',
    category: 'Categoría',
    subCategory: 'Subcategoría',
    // date 
    // amount 
    notes: 'Notas',
    cancel: 'Cancelar',

    selectOption: 'Seleccionar opción',
    enterAmount: 'Ingresar monto',
    enterSomething: 'Ingrese algo...',

    typeValidationLabel: 'Por favor seleccione Tipo',
    categoryValidationLabel: 'Por favor seleccione Categoría',
    subCategoryValidationLabel: 'Por favor seleccione Subcategoría',
    dateValidationLabel: 'Por favor elija Fecha',
    amountValidationLabel: 'Por favor seleccione Monto',


    // add saving 
    // name
    saving: 'Ahorro',
    nameValidtionLabel: 'Por favor ingrese el nombre',
    enterName: 'Ingrese el nombre',

    // add budget 
    title: 'Título',
    titleValidationLabel: 'Por favor ingrese el título',

    //add goal 
    /// title
    // category 
    targetAmount: 'Monto objetivo',
    deadLine: 'Fecha límite',
    remarks: 'Observaciones',
    priority: 'Prioridad',
    priorityValidationLabel: 'Por favor seleccione la prioridad',

    total: 'Total',

    // transaction delete conformation 
    confirmDeletionOfTransaction: 'Confirmar eliminación de transacción',
    areYouSureWantToDeleteTheSelectedRows: '¿Está seguro de que desea eliminar las filas seleccionadas?',
    thisActionCannotBeUnDone: 'Esta acción no se puede deshacer.',

    // budgets 
    addExpense: 'Agregar gasto',
    edit: 'Editar',
    delete: 'Eliminar',

    // budgets delete conformation
    confirmDeletionOfBudget: 'Confirmar eliminación del presupuesto',
    areYouSureWantToDeleteTheSelectedBudget: '¿Está seguro de que desea eliminar el presupuesto seleccionado?',
    //thisActionCannotBeUnDone: 'Esta acción no se puede deshacer.',
    selected: 'Seleccionado',

    remainingFrom: 'Restante de',
    createdOn: 'Creado el',
    amountSpent: 'Cantidad gastada',
    utilization: 'Utilización',

    deposit: 'Depósito',
    withdraw: 'Retiro',

    areYouSureWantToDeleteTheSelectedGoal: '¿Estás seguro de que deseas eliminar el objetivo seleccionado?',
    confirmDeletionOfGoal: 'Confirmar eliminación del objetivo',

    addFund: 'Agregar fondos',
    outOf: 'de',
    daysLeft: 'días restantes',
    priority: 'Prioridad',

    noRecords: 'Sin registros',
    nothingToShow: 'No hay nada que mostrar en este momento',
    addTransactionToSeeData: 'Agrega una nueva transacción para ver los datos aquí.',

    logout: 'Cerrar sesión',
    confirmationForLogout: 'Confirmación de cierre de sesión',
    areYouSureAboutLogout: '¿Estás seguro de que deseas cerrar sesión de esta aplicación?',
    chooseYourResponse: 'Elige tu respuesta a continuación',

    selectLanguage: 'Seleccionar idioma',
    selectCurrency: 'Seleccionar moneda',
    personalize: 'Personalizar',
    appearance: 'Apariencia',
    selectTheme: 'Seleccionar tema',
    noValues: 'Sin valores',
    chooseCategoryToSeeValuesHere: 'Seleccione una categoría para ver opciones',

    accountSettings: 'Configuración de la cuenta',
    exportDesc: 'Exporte todos sus registros de transacciones y ahorros para copias de seguridad o informes.',
    clickToExport: 'Haga clic aquí para exportar',
    resetDesc: 'Esto eliminará permanentemente todos sus datos, incluidas transacciones, ahorros, presupuestos y objetivos. Esta acción no se puede deshacer.',
    clickToReset: 'Haga clic aquí para restablecer todos los datos',
    pages: 'páginas',
    of: 'de',
    goToSettingsPage: 'Ir a la página de configuración',

    financialOverview: 'Resumen financiero',
    recentTransaction: 'Transacciones recientes',
    accountOverview: 'Resumen de la cuenta',
    activeGoals: 'Metas activas',
    savingGrowth: 'Crecimiento de ahorros',
    viewMore: 'Ver más',
    balance: 'Saldo'
  },














  6: {
    // Japanese

    // add modal 
    savingData: 'データを保存しています...',
    loading: '読み込み中...',

    companyName: "支出トラッカー",

    dashboard: "ダッシュボード",
    transactions: "取引",
    budgets: "予算",
    savings: "貯蓄",
    goals: "目標",
    settings: "設定",
    create: '作成',

    // settings page 
    profile: 'プロフィール',
    name: '名前',
    gender: '性別',

    preference: '設定',
    preferredLanguage: '優先言語',
    currency: '通貨',
    timeZone: 'タイムゾーン',

    appearance: '外観',
    lightDarkThemes: 'ライト・ダークテーマ',

    export: 'エクスポート',
    reset: 'リセット',

    // transactiosn 
    all: 'すべて',
    income: '収入',
    expense: '支出',
    // export already exist 

    date: '日付',
    // name already 
    type: '種類',
    amount: '金額',
    remarks: '備考',

    // savings 
    totalSavings: '総貯蓄',
    thisMonthSaving: '今月の貯蓄',

    //budgets 
    active: 'アクティブ',
    completed: '完了',

    // goals 
    thisMonthContribution: '今月の貢献額',
    noOfActiveGoals: 'アクティブな目標数',
    noOfCompletedGoals: '完了した目標数',

    // active exists 
    // completed exists

    // top nav drop down 
    transaction: '取引',
    budget: '予算',
    saving: '貯蓄',
    goal: '目標',

    // add transaction 
    //type: 'Type',
    category: 'カテゴリ',
    subCategory: 'サブカテゴリ',
    // date 
    // amount 
    notes: 'メモ',
    create: '作成',
    cancel: 'キャンセル',
    selectOption: 'オプションを選択',
    enterAmount: '金額を入力',
    enterSomething: '何か入力してください...',

    typeValidationLabel: 'タイプを選択してください',
    categoryValidationLabel: 'カテゴリを選択してください',
    subCategoryValidationLabel: 'サブカテゴリを選択してください',
    dateValidationLabel: '日付を選択してください',
    amountValidationLabel: '金額を選択してください',

    // add saving 
    // name
    saving: '貯蓄',
    nameValidtionLabel: '名前を入力してください',
    enterName: '名前を入力',

    // add budget 
    title: 'タイトル',
    titleValidationLabel: 'タイトルを入力してください',

    //add goal 
    /// title
    // category 
    targetAmount: '目標金額',
    deadLine: '期限',
    remarks: '備考',
    priority: '優先度',
    priorityValidationLabel: '優先度を選択してください',
    total: '合計',

    // transaction delete conformation 
    confirmDeletionOfTransaction: '取引削除の確認',
    areYouSureWantToDeleteTheSelectedRows: '選択した行を削除してもよろしいですか？',
    thisActionCannotBeUnDone: 'この操作は元に戻せません。',

    // budgets 
    addExpense: '支出を追加',
    edit: '編集',
    delete: '削除',

    // budgets delete conformation
    confirmDeletionOfBudget: '予算削除の確認',
    areYouSureWantToDeleteTheSelectedBudget: '選択した予算を削除してもよろしいですか？',
    //thisActionCannotBeUnDone: 'この操作は元に戻せません。',
    selected: '選択済み',

    remainingFrom: '残額（元）',
    createdOn: '作成日',
    amountSpent: '使用額',
    utilization: '利用率',

    deposit: '入金',
    withdraw: '出金',

    areYouSureWantToDeleteTheSelectedGoal: '選択した目標を削除してもよろしいですか？',
    confirmDeletionOfGoal: '目標の削除を確認',

    addFund: '資金を追加',
    outOf: 'のうち',
    daysLeft: '残り日数',
    priority: '優先度',

    noRecords: '記録がありません',
    nothingToShow: '現在表示するものがありません',
    addTransactionToSeeData: 'ここに表示するには新しい取引を追加してください。',

    logout: 'ログアウト',
    confirmationForLogout: 'ログアウトの確認',
    areYouSureAboutLogout: 'このアプリケーションからログアウトしてもよろしいですか？',
    chooseYourResponse: '以下から選択してください',

    selectLanguage: '言語を選択',
    selectCurrency: '通貨を選択',

    personalize: 'カスタマイズ',
    appearance: '外観',
    selectTheme: 'テーマを選択',

    noValues: '値がありません',
    chooseCategoryToSeeValuesHere: 'カテゴリを選択してオプションを表示',

    accountSettings: 'アカウント設定',
    exportDesc: 'バックアップやレポート用に、すべての取引と貯蓄データをエクスポートします。',
    clickToExport: 'ここをクリックしてエクスポート',
    resetDesc: '取引、貯蓄、予算、目標を含むすべてのデータが完全に削除されます。この操作は元に戻せません。',
    clickToReset: 'すべてのデータをリセット',

    pages: 'ページ',
    of: 'の',
    goToSettingsPage: '設定ページへ移動',

    financialOverview: '財務概要',
    recentTransaction: '最近の取引',
    accountOverview: '口座概要',
    activeGoals: '進行中の目標',
    savingGrowth: '貯蓄の成長',
    viewMore: 'もっと見る',
    balance: '残高'
  },
};

export const themeOptionLabels = {
  1: { // English
    dark: 'Dark',
    light: 'Light',
    system: 'System',
  },

  2: { // Hindi
    dark: 'डार्क',
    light: 'लाइट',
    system: 'सिस्टम',
  },

  3: { // German
    dark: 'Dunkel',
    light: 'Hell',
    system: 'System',
  },

  4: { // French
    dark: 'Sombre',
    light: 'Clair',
    system: 'Système',
  },

  5: { // Spanish
    dark: 'Oscuro',
    light: 'Claro',
    system: 'Sistema',
  },

  6: { // Japanese
    dark: 'ダーク',
    light: 'ライト',
    system: 'システム',
  },
};


export const exportTableHeaders = {
  1: { // English
    slno: 'Sl. No.',
    date: 'Date',
    type: 'Type',
    title: 'Title',
    amount: 'Amount',
    notes: 'Notes',
    subCategory: 'Sub Category',
    category: 'Category',
    expenseReport: 'Expense_Report',
    transactions: 'Transactions',
    savings: 'Savings',
  },

  2: { // Hindi
    slno: 'क्रम संख्या',
    date: 'तारीख',
    type: 'प्रकार',
    title: 'शीर्षक',
    amount: 'राशि',
    notes: 'टिप्पणियाँ',
    subCategory: 'उप-श्रेणी',
    category: 'श्रेणी',
    expenseReport: 'खर्च_रिपोर्ट',
    transactions: 'लेन-देन',
    savings: 'बचत',
  },

  3: { // German
    slno: 'Nr.',
    date: 'Datum',
    type: 'Typ',
    title: 'Titel',
    amount: 'Betrag',
    notes: 'Notizen',
    subCategory: 'Unterkategorie',
    category: 'Kategorie',
    expenseReport: 'Ausgabenbericht',
    transactions: 'Transaktionen',
    savings: 'Ersparnisse',
  },

  4: { // French
    slno: 'N°',
    date: 'Date',
    type: 'Type',
    title: 'Titre',
    amount: 'Montant',
    notes: 'Notes',
    subCategory: 'Sous-catégorie',
    category: 'Catégorie',
    expenseReport: 'Rapport_des_dépenses',
    transactions: 'Transactions',
    savings: 'Économies',
  },

  5: { // Spanish
    slno: 'N.º',
    date: 'Fecha',
    type: 'Tipo',
    title: 'Título',
    amount: 'Monto',
    notes: 'Notas',
    subCategory: 'Subcategoría',
    category: 'Categoría',
    expenseReport: 'Informe_de_gastos',
    transactions: 'Transacciones',
    savings: 'Ahorros',
  },

  6: { // Japanese
    slno: '番号',
    date: '日付',
    type: '種類',
    title: 'タイトル',
    amount: '金額',
    notes: 'メモ',
    subCategory: 'サブカテゴリ',
    category: 'カテゴリ',
    expenseReport: '支出レポート',
    transactions: '取引',
    savings: '貯蓄',
  },
};


export const loginPageData = {
  1: {
    // English
    email: 'Email',
    password: 'Password',
    logIn: 'Log In',
    forgotPassword: 'Forgot password',
    orLoginWith: 'Or, Login with',
    signUpWithGoogle: 'Sign up with Google',
    dontHaveAnAccount: "Don't have an account",
    registerHere: 'Register here',
    welcomeBack: 'Welcome Back',
    welcome: 'Welcome',
    enterYourEmailAndPasswordToAccessYourAccount:
      'Enter your email and password to access your account.',
  },

  2: {
    // Hindi
    email: 'ईमेल',
    password: 'पासवर्ड',
    logIn: 'लॉग इन',
    forgotPassword: 'पासवर्ड भूल गए?',
    orLoginWith: 'या, इसके साथ लॉग इन करें',
    signUpWithGoogle: 'गूगल के साथ साइन अप करें',
    dontHaveAnAccount: 'खाता नहीं है?',
    registerHere: 'यहाँ रजिस्टर करें',
    welcomeBack: 'वापसी पर स्वागत है',
    welcome: 'स्वागत है',
    enterYourEmailAndPasswordToAccessYourAccount:
      'अपने खाते तक पहुँचने के लिए अपना ईमेल और पासवर्ड दर्ज करें।',
  },

  3: {
    // German
    email: 'E-Mail',
    password: 'Passwort',
    logIn: 'Anmelden',
    forgotPassword: 'Passwort vergessen?',
    orLoginWith: 'Oder anmelden mit',
    signUpWithGoogle: 'Mit Google registrieren',
    dontHaveAnAccount: 'Noch kein Konto?',
    registerHere: 'Hier registrieren',
    welcomeBack: 'Willkommen zurück',
    welcome: 'Willkommen',
    enterYourEmailAndPasswordToAccessYourAccount:
      'Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein, um auf Ihr Konto zuzugreifen.',
  },

  4: {
    // French
    email: 'E-mail',
    password: 'Mot de passe',
    logIn: 'Se connecter',
    forgotPassword: 'Mot de passe oublié ?',
    orLoginWith: 'Ou se connecter avec',
    signUpWithGoogle: "S'inscrire avec Google",
    dontHaveAnAccount: "Vous n'avez pas de compte ?",
    registerHere: 'Inscrivez-vous ici',
    welcomeBack: 'Bon retour',
    welcome: 'Bienvenue',
    enterYourEmailAndPasswordToAccessYourAccount:
      'Entrez votre e-mail et votre mot de passe pour accéder à votre compte.',
  },

  5: {
    // Spanish
    email: 'Correo electrónico',
    password: 'Contraseña',
    logIn: 'Iniciar sesión',
    forgotPassword: '¿Olvidaste tu contraseña?',
    orLoginWith: 'O iniciar sesión con',
    signUpWithGoogle: 'Registrarse con Google',
    dontHaveAnAccount: '¿No tienes una cuenta?',
    registerHere: 'Regístrate aquí',
    welcomeBack: 'Bienvenido de nuevo',
    welcome: 'Bienvenido',
    enterYourEmailAndPasswordToAccessYourAccount:
      'Introduce tu correo electrónico y contraseña para acceder a tu cuenta.',
  },

  6: {
    // Japanese
    email: 'メールアドレス',
    password: 'パスワード',
    logIn: 'ログイン',
    forgotPassword: 'パスワードを忘れましたか？',
    orLoginWith: 'または次でログイン',
    signUpWithGoogle: 'グーグルで登録',
    dontHaveAnAccount: 'アカウントをお持ちでないですか？',
    registerHere: 'こちらから登録',
    welcomeBack: 'おかえりなさい',
    welcome: 'ようこそ',
    enterYourEmailAndPasswordToAccessYourAccount:
      'アカウントにアクセスするには、メールアドレスとパスワードを入力してください。',
  },
};

export const transactionTimeSpan = {
  1: [ // English
    { key: 1, value: 'All' },
    { key: 2, value: 'Today' },
    { key: 3, value: 'Yesterday' },
    { key: 4, value: 'This Week' },
    { key: 5, value: 'This Month' },
    { key: 6, value: 'This Year' },
  ],
  2: [ // Hindi
    { key: 1, value: 'सभी' },
    { key: 2, value: 'आज' },
    { key: 3, value: 'कल' },
    { key: 4, value: 'इस सप्ताह' },
    { key: 5, value: 'इस महीने' },
    { key: 6, value: 'इस वर्ष' },
  ],
  3: [ // German
    { key: 1, value: 'Alle' },
    { key: 2, value: 'Heute' },
    { key: 3, value: 'Gestern' },
    { key: 4, value: 'Diese Woche' },
    { key: 5, value: 'Dieser Monat' },
    { key: 6, value: 'Dieses Jahr' },
  ],
  4: [ // French
    { key: 1, value: 'Tous' },
    { key: 2, value: 'Aujourd\'hui' },
    { key: 3, value: 'Hier' },
    { key: 4, value: 'Cette semaine' },
    { key: 5, value: 'Ce mois-ci' },
    { key: 6, value: 'Cette année' },
  ],
  5: [ // Spanish
    { key: 1, value: 'Todos' },
    { key: 2, value: 'Hoy' },
    { key: 3, value: 'Ayer' },
    { key: 4, value: 'Esta semana' },
    { key: 5, value: 'Este mes' },
    { key: 6, value: 'Este año' },
  ],
  6: [ // Japanese
    { key: 1, value: 'すべて' },
    { key: 2, value: '今日' },
    { key: 3, value: '昨日' },
    { key: 4, value: '今週' },
    { key: 5, value: '今月' },
    { key: 6, value: '今年' },
  ],
};

export const currency = [
  { key: 1, code: 'INR', value: '₹' },
  { key: 2, code: 'USD', value: '$' },
  { key: 3, code: 'EUR', value: '€' },
  { key: 4, code: 'GBP', value: '£' },
  { key: 5, code: 'JPY', value: '¥' },
  { key: 6, code: 'AUD', value: '$' },
  { key: 7, code: 'CAD', value: '$' },
  { key: 8, code: 'CNY', value: '¥' }
]

export const savingsGrowthDropDownValues = {
  1: [ // English
    { key: 1, value: "Last 6 Months" },
    { key: 2, value: "Last 3 Months" },
    { key: 3, value: "This Month" },
  ],

  2: [ // Hindi
    { key: 1, value: "पिछले 6 महीने" },
    { key: 2, value: "पिछले 3 महीने" },
    { key: 3, value: "इस महीने" },
  ],

  3: [ // German
    { key: 1, value: "Letzte 6 Monate" },
    { key: 2, value: "Letzte 3 Monate" },
    { key: 3, value: "Dieser Monat" },
  ],

  4: [ // French
    { key: 1, value: "6 derniers mois" },
    { key: 2, value: "3 derniers mois" },
    { key: 3, value: "Ce mois-ci" },
  ],

  5: [ // Spanish
    { key: 1, value: "Últimos 6 meses" },
    { key: 2, value: "Últimos 3 meses" },
    { key: 3, value: "Este mes" },
  ],

  6: [ // Japanese
    { key: 1, value: "過去6か月" },
    { key: 2, value: "過去3か月" },
    { key: 3, value: "今月" },
  ],
};


export const financialOverviewDropDOwnValues = {
  1: [ // English
    { key: 1, value: "This Month" },
    { key: 2, value: "This Year" },
    { key: 3, value: "Last Year" },
    { key: 4, value: "Last 6 Months" },
  ],

  2: [ // Hindi
    { key: 1, value: "यह महीना" },
    { key: 2, value: "यह वर्ष" },
    { key: 3, value: "पिछला वर्ष" },
    { key: 4, value: "पिछले 6 महीने" },
  ],

  3: [ // German
    { key: 1, value: "Dieser Monat" },
    { key: 2, value: "Dieses Jahr" },
    { key: 3, value: "Letztes Jahr" },
    { key: 4, value: "Letzte 6 Monate" },
  ],

  4: [ // French
    { key: 1, value: "Ce mois-ci" },
    { key: 2, value: "Cette année" },
    { key: 3, value: "L’année dernière" },
    { key: 4, value: "Les 6 derniers mois" },
  ],

  5: [ // Spanish
    { key: 1, value: "Este mes" },
    { key: 2, value: "Este año" },
    { key: 3, value: "El año pasado" },
    { key: 4, value: "Últimos 6 meses" },
  ],

  6: [ // Japanese
    { key: 1, value: "今月" },
    { key: 2, value: "今年" },
    { key: 3, value: "昨年" },
    { key: 4, value: "過去6か月" },
  ],
};

