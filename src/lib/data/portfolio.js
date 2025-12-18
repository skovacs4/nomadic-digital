export const projects = [
    {
        thumbnail: '/portfolio/conte/cover-3.png',
        slug: 'conte',
        i18nKey: 'portfolio.projects.conte',
        title: 'CONTE',
        client: 'Conte Elegant',
        year: 2025,
        categoryKey: 'portfolio.categories.ecommerceBrandPlatform',
        statusKey: 'portfolio.status.live',

        hero: {
            image: '/portfolio/conte/cover-3.png',
            logo: '/logos/clients/conte-white.png',
            theme: 'dark'
        },

        overview: {
            headlineKey: 'portfolio.projects.conte.overview.headline',
            descriptionKey: 'portfolio.projects.conte.overview.description'
        },

        outcomes: {
            headlineKey: 'portfolio.projects.conte.outcomes.headline',
            descriptionKey: 'portfolio.projects.conte.outcomes.description'
        },

        scopeKeys: [
            'portfolio.scope.platformArchitecture',
            'portfolio.scope.uxUiDesign',
            'portfolio.scope.ecommerceDevelopment',
            'portfolio.scope.erpApiIntegrations',
            'portfolio.scope.performanceOptimization'
        ],

        deliverableKeys: [
            'portfolio.deliverables.customStorefront',
            'portfolio.deliverables.adminDashboard',
            'portfolio.deliverables.productStockSync',
            'portfolio.deliverables.seoReadyStructure',
            'portfolio.deliverables.analyticsSetup'
        ],

        tech: ['SvelteKit', 'Tailwind CSS', 'Node.js', 'Stripe', 'SoftOne ERP'],

        results: [
            { labelKey: 'portfolio.metrics.pageSpeed', value: '+48%' },
            { labelKey: 'portfolio.metrics.conversionRate', value: '+1.7%' },
            { labelKey: 'portfolio.metrics.bounceRate', value: '-23%' }
        ],

        gallery: [
            'https://placehold.co/1600x1000/png?text=Project+Preview+01',
            'https://placehold.co/1600x1000/png?text=Project+Preview+02',
            'https://placehold.co/1600x1000/png?text=Project+Preview+03',
            'https://placehold.co/1600x1000/png?text=Project+Preview+04'
        ],

        testimonial: {
            quoteKey: 'portfolio.projects.conte.testimonial.quote',
            author: 'Conte Elegant Team',
            roleKey: 'portfolio.roles.ecommerceOperations'
        }
    },

    {
        thumbnail: '/portfolio/locallia/abstract-skeleton.jpg',
        slug: 'locallia',
        i18nKey: 'portfolio.projects.locallia',
        title: 'Locallia',
        client: 'Locallia',
        year: 2025,
        categoryKey: 'portfolio.categories.saasDigitalAdvertising',
        statusKey: 'portfolio.status.live',

        hero: {
            image: '/portfolio/locallia/abstract-skeleton.jpg',
            logo: '/portfolio/locallia/locallia-logo-white.png',
            theme: 'dark'
        },

        overview: {
            headlineKey: 'portfolio.projects.locallia.overview.headline',
            descriptionKey: 'portfolio.projects.locallia.overview.description'
        },

        outcomes: {
            headlineKey: 'portfolio.projects.locallia.outcomes.headline',
            descriptionKey: 'portfolio.projects.locallia.outcomes.description'
        },

        scopeKeys: [
            'portfolio.scope.saasArchitecture',
            'portfolio.scope.adminDashboard',
            'portfolio.scope.tabletInterface',
            'portfolio.scope.reportingAnalytics',
            'portfolio.scope.roleBasedAccess'
        ],

        deliverableKeys: [
            'portfolio.deliverables.webAdminPlatform',
            'portfolio.deliverables.tabletUi',
            'portfolio.deliverables.campaignReporting',
            'portfolio.deliverables.clientDashboards'
        ],

        tech: ['SvelteKit', 'Firebase', 'Chart.js', 'Stripe'],

        results: [
            { labelKey: 'portfolio.metrics.activeScreens', value: '100+' },
            { labelKey: 'portfolio.metrics.monthlyImpressions', value: '250K+' }
        ],

        gallery: ['/portfolio/locallia/screen-1.jpg', '/portfolio/locallia/screen-2.jpg']
    },

    {
        thumbnail: '/portfolio/kronburg/cover.png',
        slug: 'kronburg',
        i18nKey: 'portfolio.projects.kronburg',
        title: 'Kronburg',
        client: 'Kronburg',
        year: 2025,
        categoryKey: 'portfolio.categories.corporateWebsite',
        statusKey: 'portfolio.status.live',

        hero: {
            image: '/portfolio/kronburg/cover.png',
            logo: '/logos/clients/kronburg-white.png',
            theme: 'light'
        },

        overview: {
            headlineKey: 'portfolio.projects.kronburg.overview.headline',
            descriptionKey: 'portfolio.projects.kronburg.overview.description'
        },

        outcomes: {
            headlineKey: 'portfolio.projects.kronburg.outcomes.headline',
            descriptionKey: 'portfolio.projects.kronburg.outcomes.description'
        },

        scopeKeys: [
            'portfolio.scope.uxUiDesign',
            'portfolio.scope.websiteDevelopment',
            'portfolio.scope.seoStructure',
            'portfolio.scope.performanceOptimization'
        ],

        deliverableKeys: [
            'portfolio.deliverables.corporateWebsite',
            'portfolio.deliverables.responsiveLayouts',
            'portfolio.deliverables.contentStructure',
            'portfolio.deliverables.seoReadyPages'
        ],

        tech: ['SvelteKit', 'Tailwind CSS'],

        gallery: ['/portfolio/kronburg/screen-1.jpg']
    },

    {
        thumbnail: '/portfolio/fluxum/fight-style.jpg',
        slug: 'fluxum',
        i18nKey: 'portfolio.projects.fluxum',
        title: 'Fluxum',
        client: 'Fluxum',
        year: 2025,
        categoryKey: 'portfolio.categories.saasSportsManagement',
        statusKey: 'portfolio.status.inProgress',

        hero: {
            image: '/portfolio/fluxum/fight-style.jpg',
            logo: '/portfolio/fluxum/fluxum.png',
            theme: 'dark'
        },

        overview: {
            headlineKey: 'portfolio.projects.fluxum.overview.headline',
            descriptionKey: 'portfolio.projects.fluxum.overview.description'
        },

        outcomes: {
            headlineKey: 'portfolio.projects.fluxum.outcomes.headline',
            descriptionKey: 'portfolio.projects.fluxum.outcomes.description'
        },

        scopeKeys: [
            'portfolio.scope.saasArchitecture',
            'portfolio.scope.adminDashboard',
            'portfolio.scope.memberManagement',
            'portfolio.scope.paymentFlows',
            'portfolio.scope.mobileFirstUx'
        ],

        deliverableKeys: [
            'portfolio.deliverables.webAdminPanel',
            'portfolio.deliverables.memberDashboard',
            'portfolio.deliverables.paymentSystem',
            'portfolio.deliverables.classScheduling'
        ],

        tech: ['SvelteKit', 'Supabase', 'Stripe', 'Chart.js'],

        results: [
            { labelKey: 'portfolio.metrics.clubsOnboarded', value: '20+' },
            { labelKey: 'portfolio.metrics.activeMembers', value: '1,000+' }
        ],

        gallery: ['/portfolio/fluxum/screen-1.jpg', '/portfolio/fluxum/screen-2.jpg']
    },

    {
        thumbnail: '/portfolio/natscent/cover-2.jpg',
        slug: 'natscent',
        i18nKey: 'portfolio.projects.natscent',
        title: 'Natscent',
        client: 'Natscent',
        year: 2025,
        categoryKey: 'portfolio.categories.ecommerceBrandWebsite',
        statusKey: 'portfolio.status.live',

        hero: {
            image: '/portfolio/natscent/cover-2.jpg',
            logo: '/logos/clients/natscent-logo-white.png',
            theme: 'light'
        },

        overview: {
            headlineKey: 'portfolio.projects.natscent.overview.headline',
            descriptionKey: 'portfolio.projects.natscent.overview.description'
        },

        outcomes: {
            headlineKey: 'portfolio.projects.natscent.outcomes.headline',
            descriptionKey: 'portfolio.projects.natscent.outcomes.description'
        },

        scopeKeys: [
            'portfolio.scope.brandUx',
            'portfolio.scope.ecommerceDevelopment',
            'portfolio.scope.productPresentation',
            'portfolio.scope.seoOptimization'
        ],

        deliverableKeys: [
            'portfolio.deliverables.customStorefront',
            'portfolio.deliverables.productPages',
            'portfolio.deliverables.contentDrivenLayout',
            'portfolio.deliverables.analyticsSetup'
        ],

        tech: ['SvelteKit', 'Tailwind CSS', 'Stripe'],

        gallery: ['/portfolio/natscent/screen-1.jpg', '/portfolio/natscent/screen-2.jpg']
    },

    {
        thumbnail: '/portfolio/viorica/cover.jpg',
        slug: 'viorica-cosmetic',
        i18nKey: 'portfolio.projects.viorica',
        title: 'Viorica Cosmetic',
        client: 'Viorica Cosmetic',
        year: 2020,
        categoryKey: 'portfolio.categories.corporateBrandWebsite',
        statusKey: 'portfolio.status.completed',

        hero: {
            image: '/portfolio/viorica/cover.jpg',
            logo: '/portfolio/viorica/logo.png',
            theme: 'light'
        },

        overview: {
            headlineKey: 'portfolio.projects.viorica.overview.headline',
            descriptionKey: 'portfolio.projects.viorica.overview.description'
        },

        outcomes: {
            headlineKey: 'portfolio.projects.viorica.outcomes.headline',
            descriptionKey: 'portfolio.projects.viorica.outcomes.description'
        },

        scopeKeys: [
            'portfolio.scope.websiteRedesign',
            'portfolio.scope.contentStructure',
            'portfolio.scope.brandPresentation'
        ],

        deliverableKeys: [
            'portfolio.deliverables.corporateWebsite',
            'portfolio.deliverables.productPresentation',
            'portfolio.deliverables.multilingualStructure'
        ],

        tech: ['HTML', 'CSS', 'JavaScript'],

        gallery: ['/portfolio/viorica/screen-1.jpg']
    }
];
