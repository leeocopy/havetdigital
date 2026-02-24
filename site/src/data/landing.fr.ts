// ─── All copy & pricing extracted from plaquette_havetdigital.docx ───
// No meaning has been changed — only structured as typed data.

export const brand = {
    name: 'HavetDigital × IAWeb',
    tagline: 'Votre présence en ligne, enfin rentable.',
    primaryCta: { label: 'Réserver un audit', href: '#audit' },
    secondaryCta: { label: 'Découvrir nos offres', href: '#offres' },
};

export const hero = {
    badge: 'Programme One-Page Vitrine',
    title: 'Votre présence en ligne, enfin rentable.',
    subtitle:
        'Un site web professionnel, conçu pour convertir vos visiteurs en clients.',
    bullets: [
        'Livré en 7 jours',
        'Sans jargon',
        'Sans mauvaise surprise',
    ],
};

export const problem = {
    sectionTitle: 'Le problème',
    paragraph:
        'Vous êtes référencé sur PagesJaunes. Peut-être sur Google Maps. Vos clients actuels vous connaissent — mais les nouveaux prospects\u00A0? Ils cherchent en ligne, ils comparent, et s\'ils ne trouvent pas un site rassurant en 10 secondes… ils appellent votre concurrent.',
    painsTitle: 'Ce que vivent de nombreux artisans\u00A0:',
    pains: [
        'Pas de site web, ou un site obsolète',
        'Des prospects qui partent sans appeler',
        'Un agenda qui se remplit… au hasard',
        'Une image perçue comme moins professionnelle',
    ],
    gainsTitle: 'Ce que vous méritez\u00A0:',
    gains: [
        'Un site professionnel qui travaille pour vous 24h/24',
        'Des demandes de devis directement dans votre boîte mail',
        'Une image moderne et rassurante',
        'Un avantage concurrentiel immédiat',
    ],
};

export const solution = {
    title: 'Le Programme One-Page Vitrine',
    paragraph:
        'Nous avons conçu une offre spécifiquement pensée pour les TPE, artisans et indépendants. Un site one-page, c\'est simple, rapide à charger, facile à lire sur mobile — et surtout\u00A0: conçu pour pousser le visiteur à vous contacter.',
    chips: [
        { icon: '📱', label: '100\u00A0% Mobile', desc: 'Optimisé pour tous les écrans' },
        { icon: '⚡', label: 'Livré en 7 jours', desc: 'De la commande à la mise en ligne' },
        { icon: '🎯', label: 'Orienté conversion', desc: 'Conçu pour générer des contacts' },
        { icon: '🤝', label: 'Sans engagement', desc: 'Paiement unique ou abonnement flexible' },
    ],
};

export const pricingOneTime = {
    sectionTitle: 'Nos offres — Paiement unique',
    sectionSubtitle:
        'Payez une fois, votre site vous appartient. Idéal si vous souhaitez investir dès le départ dans un outil de qualité.',
    plans: [
        {
            name: 'Starter',
            price: '399',
            unit: '€ HT',
            highlight: false,
            features: [
                'Site one-page professionnel',
                'Design responsive (mobile)',
                'Sections\u00A0: accueil, services, contact',
                'Formulaire de contact',
                'Hébergement 1ère année inclus',
                'Nom de domaine inclus',
                'Livraison en 5 à 7 jours',
            ],
        },
        {
            name: 'Pro',
            price: '799',
            unit: '€ HT',
            highlight: true,
            badge: 'Le plus populaire',
            features: [
                'Tout le Starter +',
                'Section avis clients (Google)',
                'Galerie photos',
                'Bouton d\'appel direct',
                'Intégration Google Maps',
                'SEO local optimisé',
                '1 révision incluse',
                'Livraison en 7 jours',
            ],
        },
        {
            name: 'Premium',
            price: '1\u202F599',
            unit: '€ HT',
            highlight: false,
            features: [
                'Tout le Pro +',
                'Copywriting professionnel',
                'Système de prise de RDV',
                'Chat ou chatbot d\'accueil',
                'Automatisation des devis',
                'Suivi analytique avancé',
                '2 révisions incluses',
                'Support prioritaire 3 mois',
            ],
        },
    ],
    note: 'Le plus populaire\u00A0? Le Pro. Le meilleur rapport résultat/investissement pour un artisan qui veut se démarquer rapidement.',
};

export const pricingSub = {
    sectionTitle: 'Préférez l\'abonnement — Zéro effort, zéro souci',
    sectionSubtitle:
        'Vous n\'avez pas envie de gérer l\'hébergement, les mises à jour ou la maintenance\u00A0? Nos formules mensuelles s\'occupent de tout. Sans engagement longue durée.',
    plans: [
        {
            name: 'Essentiel',
            price: '59',
            unit: '€ HT/mois',
            highlight: false,
            features: [
                'Site one-page inclus',
                'Hébergement & domaine',
                'Mises à jour contenu (1/mois)',
                'Support par email',
            ],
        },
        {
            name: 'Confort',
            price: '89',
            unit: '€ HT/mois',
            highlight: true,
            badge: 'Recommandé',
            features: [
                'Tout Essentiel +',
                'Modifications illimitées',
                'Intégration avis Google',
                'Rapport mensuel de visites',
                'Support prioritaire',
            ],
        },
        {
            name: 'Sérénité',
            price: '129',
            unit: '€ HT/mois',
            highlight: false,
            features: [
                'Tout Confort +',
                'SEO local mensuel',
                'Prise de RDV automatisée',
                'Suivi des performances',
                'Accompagnement stratégique',
            ],
        },
    ],
};

export const options = {
    sectionTitle: 'Options à la carte — Allez plus loin',
    sectionSubtitle:
        'Ajoutez les options qui correspondent à votre situation, à tout moment.',
    items: [
        {
            icon: '✍️',
            name: 'Copywriting',
            price: '349\u00A0€',
            benefit:
                'Textes professionnels rédigés pour vous\u00A0: accroche, services, confiance, appel à l\'action. Vos mots, en mieux.',
        },
        {
            icon: '📅',
            name: 'Prise de RDV / Devis',
            price: '189\u00A0€',
            benefit:
                'Formulaire intelligent de prise de rendez-vous ou demande de devis, intégré à votre agenda ou email.',
        },
        {
            icon: '⚙️',
            name: 'Automatisation',
            price: '399\u00A0€',
            benefit:
                'Réponse automatique par email/SMS à chaque demande de contact. Relances, confirmations, notifications. Zéro effort.',
        },
    ],
};

export const whyUs = {
    sectionTitle: 'Pourquoi HavetDigital × IAWeb\u00A0?',
    france: {
        flag: '🇫🇷',
        name: 'HavetDigital — France',
        bullets: [
            'Stratégie digitale & acquisition client',
            'Branding & positionnement local',
            'Interlocuteur francophone unique',
            'Connaissance terrain des TPE & artisans',
        ],
    },
    morocco: {
        flag: '🇲🇦',
        name: 'IAWeb — Maroc',
        bullets: [
            'Développement web & technique',
            'Automatisation & intégrations',
            'Réactivité & qualité d\'exécution',
            'Infrastructure fiable et évolutive',
        ],
    },
    conclusion:
        'Deux expertises complémentaires. Un seul interlocuteur côté France. Une promesse commune\u00A0: des sites qui convertissent, livrés sans friction.',
};

export const audit = {
    title: 'Audit offert — 15 minutes, sans engagement',
    paragraph:
        'En 15 minutes, nous analysons votre présence en ligne actuelle et vous proposons un plan d\'action concret.',
    subtext:
        'Pas de discours commercial. Juste des réponses claires à vos questions.',
    ctaText: 'Réservez votre audit gratuit',
    ctaHref: 'https://www.havetdigital.fr',
    email: 'contact@havetdigital.fr',
};

export const faq = [
    {
        q: 'Combien de temps faut-il pour avoir mon site en ligne\u00A0?',
        a: 'Votre site est livré en 5 à 7 jours ouvrés après validation de votre commande et réception de vos contenus (textes, photos, logo).',
    },
    {
        q: 'Dois-je fournir les textes et les images\u00A0?',
        a: 'Idéalement oui, mais si vous n\'avez pas de contenu prêt, nous proposons une option Copywriting à 349\u00A0€ pour rédiger des textes professionnels adaptés à votre activité.',
    },
    {
        q: 'Quelle est la différence entre paiement unique et abonnement\u00A0?',
        a: 'Le paiement unique vous donne la propriété totale du site. L\'abonnement inclut l\'hébergement, la maintenance et les mises à jour — vous n\'avez rien à gérer.',
    },
    {
        q: 'Mon site sera-t-il bien référencé sur Google\u00A0?',
        a: 'Oui. Tous nos sites intègrent les bonnes pratiques SEO de base. Les formules Pro et Premium incluent un SEO local optimisé pour apparaître dans les recherches de proximité.',
    },
    {
        q: 'Puis-je modifier mon site après la livraison\u00A0?',
        a: 'Avec le paiement unique, des révisions sont incluses selon la formule choisie. Avec l\'abonnement Confort ou Sérénité, les modifications sont illimitées.',
    },
    {
        q: 'Est-ce que je suis engagé sur une durée\u00A0?',
        a: 'Non. Nos formules d\'abonnement sont sans engagement longue durée. Vous pouvez résilier à tout moment.',
    },
    {
        q: 'L\'audit gratuit, comment ça se passe\u00A0?',
        a: 'C\'est un appel de 15 minutes pendant lequel nous analysons votre présence en ligne actuelle et vous proposons un plan d\'action concret, sans obligation.',
    },
    {
        q: 'Qui est mon interlocuteur\u00A0?',
        a: 'Vous avez un interlocuteur unique côté France (HavetDigital) pour la stratégie et la relation client. L\'équipe technique IAWeb au Maroc assure le développement et la réactivité.',
    },
];

export const contact = {
    sectionTitle: 'Contactez-nous',
    email: 'contact@havetdigital.fr',
    website: 'www.havetdigital.fr',
};

export const footer = {
    copyright: 'HavetDigital × IAWeb — Programme One-Page Vitrine — Tous droits réservés',
};
