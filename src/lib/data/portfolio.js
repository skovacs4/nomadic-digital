export const projects = [
    {
        slug: 'conte',
        i18nKey: 'portfolio.projects.conte',
        title: 'CONTE',
        client: 'Conte Elegant',
        year: 2025,
        categoryKey: 'portfolio.categories.ecommerceBrandPlatform',
        statusKey: 'portfolio.status.live',

        thumbnail: '/portfolio/conte/cover-3.png',

        hero: {
            image: '/portfolio/conte/cover-3.png',
            logo: '/logos/clients/conte-white.png',
            theme: 'dark'
        },

        demos: [
            {
                video: '/portfolio/conte/videos/video-1.mp4',
                titleKey: 'portfolio.projects.conte.demos.stock.title',
                bodyKey: 'portfolio.projects.conte.demos.stock.body',
                inverted: false
            },
            {
                video: '/portfolio/conte/videos/video-2.mp4',
                titleKey: 'portfolio.projects.conte.demos.dashboard.title',
                bodyKey: 'portfolio.projects.conte.demos.dashboard.body',
                inverted: true
            },
            {
                video: '/portfolio/conte/videos/video-3.mp4',
                titleKey: 'portfolio.projects.conte.demos.uiux.title',
                bodyKey: 'portfolio.projects.conte.demos.uiux.body',
                inverted: false
            }
        ],

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

        tech: [
            'Shopify',
            'Node.js',
            'SoftOne ERP',
            'Custom Integrations'
        ]
        ,

        results: [
            { labelKey: 'portfolio.metrics.pageSpeed', value: '+132%' },
            { labelKey: 'portfolio.metrics.conversionRate', value: '+9.1%' },
            { labelKey: 'portfolio.metrics.bounceRate', value: '-65%' }
        ],

        gallery: [
            { src: '/portfolio/conte/logo-brand-conte.jpeg', video: false },
            { src: '/portfolio/conte/logo-brand-conte-2.jpeg', video: false },
            { src: '/portfolio/conte/logo-brand-conte-3.jpg', video: false },
            { src: '/portfolio/conte/logo-brand-conte-4.jpg', video: false }
        ],

        testimonial: {
            quoteKey: 'portfolio.projects.conte.testimonial.quote',
            author: 'Conte Elegant Team',
            roleKey: 'portfolio.roles.ecommerceOperations'
        }
    },

    /* ------------------------------------------------------------------ */
    /* LOCALLIA */
    /* ------------------------------------------------------------------ */

    {
        slug: 'locallia',
        i18nKey: 'portfolio.projects.locallia',
        title: 'Locallia',
        client: 'Locallia',
        year: 2025,
        categoryKey: 'portfolio.categories.saasDigitalAdvertising',
        statusKey: 'portfolio.status.live',

        thumbnail: '/portfolio/locallia/abstract-skeleton.jpg',

        hero: {
            image: '/portfolio/locallia/abstract-skeleton.jpg',
            logo: '/portfolio/locallia/locallia-logo-white.png',
            theme: 'dark'
        },

        demos: [
            {
                video: '/portfolio/locallia/videos/video-1.mp4',
                titleKey: 'portfolio.projects.locallia.demos.analytics.title',
                bodyKey: 'portfolio.projects.locallia.demos.analytics.body',
                inverted: true
            },
            {
                video: '/portfolio/locallia/videos/video-2.mp4',
                titleKey: 'portfolio.projects.locallia.demos.dashboard.title',
                bodyKey: 'portfolio.projects.locallia.demos.dashboard.body',
                inverted: false
            }
        ],

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
            'portfolio.scope.reportingAnalytics',
            'portfolio.scope.roleBasedAccess'
        ],

        deliverableKeys: [
            'portfolio.deliverables.webAdminPlatform',
            'portfolio.deliverables.clientDashboards',
            'portfolio.deliverables.campaignReporting'
        ],

        tech: ['SvelteKit', 'Firebase', 'Chart.js', 'Stripe'],

        results: [
            { labelKey: 'portfolio.metrics.activeScreens', value: '10+' },
            { labelKey: 'portfolio.metrics.monthlyImpressions', value: '80K+' }
        ],

        gallery: [
            { src: '/portfolio/locallia/mockup-dashboard-cover.jpg', video: false },
            { src: '/portfolio/locallia/mockup-dashboard-cover-2.jpg', video: false }
        ]
    },

    /* ------------------------------------------------------------------ */
    /* KRONBURG */
    /* ------------------------------------------------------------------ */

    {
        slug: 'kronburg',
        i18nKey: 'portfolio.projects.kronburg',
        title: 'Kronburg',
        client: 'Kronburg',
        year: 2025,
        categoryKey: 'portfolio.categories.corporateWebsite',
        statusKey: 'portfolio.status.live',

        thumbnail: '/portfolio/kronburg/cover.png',

        hero: {
            image: '/portfolio/kronburg/cover.png',
            logo: '/logos/clients/kronburg-white.png',
            theme: 'light'
        },

        demos: [
            {
                video: '/portfolio/kronburg/videos/video-1.mp4',
                titleKey: 'portfolio.projects.kronburg.demos.website.title',
                bodyKey: 'portfolio.projects.kronburg.demos.website.body',
                inverted: true
            },
            {
                video: '/portfolio/kronburg/videos/video-2.mp4',
                titleKey: 'portfolio.projects.kronburg.demos.uiux.title',
                bodyKey: 'portfolio.projects.kronburg.demos.uiux.body',
                inverted: false
            }
        ],

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
            'portfolio.scope.seoStructure'
        ],

        deliverableKeys: [
            'portfolio.deliverables.corporateWebsite',
            'portfolio.deliverables.responsiveLayouts',
            'portfolio.deliverables.seoReadyPages'
        ],

        tech: ['PHP', 'JavaScript'],

        gallery: [{ src: '/portfolio/kronburg/content.png', video: false },
        { src: '/portfolio/kronburg/content-2.png', video: false }
        ]
    },

    /* ------------------------------------------------------------------ */
    /* FLUXUM */
    /* ------------------------------------------------------------------ */

    {
        slug: 'fluxum',
        i18nKey: 'portfolio.projects.fluxum',
        title: 'Fluxum',
        client: 'Fluxum',
        year: 2025,
        categoryKey: 'portfolio.categories.saasSportsManagement',
        statusKey: 'portfolio.status.inProgress',

        thumbnail: '/portfolio/fluxum/fight-style.jpg',

        hero: {
            image: '/portfolio/fluxum/fight-style.jpg',
            logo: '/portfolio/fluxum/fluxum.png',
            theme: 'dark'
        },

        // demos: [
        //     {
        //         video: '/portfolio/placeholders/demo-dashboard.mp4',
        //         titleKey: 'portfolio.projects.fluxum.demos.dashboard.title',
        //         bodyKey: 'portfolio.projects.fluxum.demos.dashboard.body',
        //         inverted: false
        //     },
        //     {
        //         video: '/portfolio/placeholders/demo-payments.mp4',
        //         titleKey: 'portfolio.projects.fluxum.demos.payments.title',
        //         bodyKey: 'portfolio.projects.fluxum.demos.payments.body',
        //         inverted: true
        //     }
        // ],

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
            'portfolio.scope.paymentFlows',
        ],

        deliverableKeys: [
            'portfolio.deliverables.webAdminPanel',
            'portfolio.deliverables.memberDashboard',
            'portfolio.deliverables.paymentSystem',
            'portfolio.deliverables.mobileDevelopment'
        ],

        tech: ['SvelteKit', 'Supabase', 'Stripe', 'Mailgun', 'Flutter', 'Firebase', 'Vercel'],

        gallery: [
            { src: '/portfolio/fluxum/fluxum-product.png', video: false },
            { src: '/portfolio/fluxum/mobile-app-side.png', video: false }
        ]
    },

    /* ------------------------------------------------------------------ */
    /* NATSCENT */
    /* ------------------------------------------------------------------ */

    {
        slug: 'natscent',
        i18nKey: 'portfolio.projects.natscent',
        title: 'Natscent',
        client: 'Natscent',
        year: 2025,
        categoryKey: 'portfolio.categories.ecommerceBrandWebsite',
        statusKey: 'portfolio.status.live',

        thumbnail: '/portfolio/natscent/cover-2.jpg',

        hero: {
            image: '/portfolio/natscent/cover-2.jpg',
            logo: '/logos/clients/natscent-logo-white.png',
            theme: 'light'
        },

        demos: [
            {
                video: '/portfolio/natscent/videos/video-1.mp4',
                titleKey: 'portfolio.projects.natscent.demos.uiux.title',
                bodyKey: 'portfolio.projects.natscent.demos.uiux.body',
                inverted: true
            },
            {
                video: '/portfolio/natscent/videos/video-2.mp4',
                titleKey: 'portfolio.projects.natscent.demos.ecommerce.title',
                bodyKey: 'portfolio.projects.natscent.demos.ecommerce.body',
                inverted: false
            }
        ],

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
            'portfolio.scope.seoOptimization'
        ],

        deliverableKeys: [
            'portfolio.deliverables.customStorefront',
            'portfolio.deliverables.productPages'
        ],

        tech: ['Liquid', 'Supabase', 'Edge Functions', 'Shopify'],

        gallery: [
            { src: '/portfolio/natscent/content-1.png', video: false },
            { src: '/portfolio/natscent/content-2.png', video: false },
            { src: '/portfolio/natscent/content-3.png', video: false },
            { src: '/portfolio/natscent/content-4.jpg', video: false }
        ]
    },

    /* ------------------------------------------------------------------ */
    /* VIORICA */
    /* ------------------------------------------------------------------ */

    {
        slug: 'viorica-cosmetic',
        i18nKey: 'portfolio.projects.viorica',
        title: 'Viorica Cosmetic',
        client: 'Viorica Cosmetic',
        year: 2020,
        categoryKey: 'portfolio.categories.corporateBrandWebsite',
        statusKey: 'portfolio.status.completed',

        thumbnail: '/portfolio/viorica/cover.jpg',

        hero: {
            image: '/portfolio/viorica/cover.jpg',
            logo: '/portfolio/viorica/logo.png',
            theme: 'light'
        },

        demos: [
            {
                video: '/portfolio/viorica/videos/video-1.mp4',
                titleKey: 'portfolio.projects.viorica.demos.erpSync.title',
                bodyKey: 'portfolio.projects.viorica.demos.erpSync.body',
                inverted: false
            },
            {
                video: '/portfolio/viorica/videos/video-2.mp4',
                titleKey: 'portfolio.projects.viorica.demos.orderAutomation.title',
                bodyKey: 'portfolio.projects.viorica.demos.orderAutomation.body',
                inverted: true
            }
        ],
        overview: {
            headlineKey: 'portfolio.projects.viorica.overview.headline',
            descriptionKey: 'portfolio.projects.viorica.overview.description'
        },

        outcomes: {
            headlineKey: 'portfolio.projects.viorica.outcomes.headline',
            descriptionKey: 'portfolio.projects.viorica.outcomes.description'
        },

        scopeKeys: [
            'portfolio.scope.erpApiIntegrations',
            'portfolio.scope.automation'
        ],

        deliverableKeys: [
            'portfolio.deliverables.productStockSync',
            'portfolio.deliverables.automatedInvoicing'
        ],

        tech: [
            'API Integrations',
            'Node.js',
            'Automation Services',
            'Softone ERP',
            'Shopify',
            'Edge Functions'
        ],

        gallery: [{ src: '/portfolio/viorica/content-1.png', video: false },
        { src: '/portfolio/viorica/content-2.png', video: false }
        ]
    }
];
