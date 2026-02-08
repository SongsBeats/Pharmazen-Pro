import { Helmet } from "react-helmet";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export const SEO = ({
    title = "PharmaZen - Digital Platform for Pharma & Healthcare",
    description = "PharmaZen is a next-generation digital ecosystem for pharmacies, distributors, doctors, and patients. Automate operations, reduce losses, enable digital healthcare.",
    keywords = "pharmacy software, pharma management, healthcare platform, pharmacy billing, distributor management, EHR, e-prescription",
    image = "https://lovable.dev/opengraph-image-p98pqg.png",
    url = "https://pharmazen.com",
    type = "website",
}: SEOProps) => {
    const fullTitle = title.includes("PharmaZen") ? title : `${title} | PharmaZen`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="PharmaZen" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="PharmaZen" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional SEO */}
            <link rel="canonical" href={url} />
            <meta name="theme-color" content="#1FA69A" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "PharmaZen",
                    "applicationCategory": "HealthApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "2999",
                        "priceCurrency": "INR"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "ratingCount": "1250"
                    }
                })}
            </script>
        </Helmet>
    );
};
