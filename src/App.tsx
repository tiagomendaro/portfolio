import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />

      <ProjectSection
        id="repstly"
        title="Repstly"
        subtitle="AI Virtual Assistants SaaS Platform"
        description="A comprehensive SaaS platform that enables businesses to create and manage AI-powered virtual assistants for customer service. Users can configure assistants with custom voices, assign phone numbers, manage services, and monitor calls in real-time."
        liveUrl="https://repstly.com"
        technologies={[
          'Next.js 14',
          'TypeScript',
          'Tailwind CSS',
          'shadcn/ui',
          'Framer Motion',
          'Firebase Auth',
          'Firestore',
          'Stripe',
          'Railway API'
        ]}
        features={[
          'AI-powered virtual assistants with custom voice configuration',
          'Multi-language support (Spanish/English)',
          'Real-time call monitoring and analytics dashboard',
          'Stripe integration for subscription management',
          'Service scheduling with calendar integration',
          'Multi-user company management',
          'Phone number assignment by country/region'
        ]}
        images={[
          '/images/repstly-1.png',
          '/images/repstly-2.png',
          '/images/repstly-3.png'
        ]}
      />

      <ProjectSection
        id="tracs"
        title="TRACs"
        subtitle="Texas Gas & Electricity Infrastructure"
        description="A workflow automation and document management platform built for Sempra Electricity to manage the construction and maintenance of electrical poles across Texas. Features a comprehensive file system, reviewer workflows, advanced search capabilities, and nested item management."
        technologies={[
          'PowerApps',
          'Power Automate',
          'SharePoint',
          'Microsoft 365'
        ]}
        features={[
          'Workflow automation for construction approvals',
          'Document management with version control',
          'Multi-level reviewer system',
          'Advanced search and filtering',
          'PDF generation and archiving',
          'Nested item management for pole components',
          'Real-time collaboration and notifications',
          'Integration with existing Sempra systems'
        ]}
        images={[
          '/images/tracs-1.png',
          '/images/tracs-2.png',
          '/images/tracs-3.png'
        ]}
        isReverse
      />

      <ProjectSection
        id="factureando"
        title="Factureando"
        subtitle="Invoice Management System"
        description="A complete Spanish web application for comprehensive invoice lifecycle management, designed with a mobile-first approach. Handles everything from draft creation to payment tracking, with role-based permissions, automatic PDF generation, and tax calculations."
        technologies={[
          'React 18',
          'JavaScript',
          'Vite',
          'CSS Modules',
          'Firebase Auth',
          'Cloud Firestore',
          'Firebase Storage',
          'html2pdf.js',
          'EmailJS',
          'decimal.js'
        ]}
        features={[
          'Complete invoice lifecycle: Draft → Proforma → Pending → Paid',
          'Automatic tax calculations (IVA 21%, base amounts)',
          'Multi-role system: User, Invoicer, Business Owner, Admin',
          'PDF generation with three separate generators',
          'Automatic settlement calculations with fiscal deductions',
          'Client database with full CRUD operations',
          'Email integration for invoice delivery',
          'Mobile-first responsive design with collapsible cards'
        ]}
        images={[
          '/images/factureando-1.png',
          '/images/factureando-2.png',
          '/images/factureando-3.png'
        ]}
      />

      <Footer />
    </div>
  );
}

export default App;