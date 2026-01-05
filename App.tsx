import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AnalyticsConsent } from './components/AnalyticsConsent';
import { OpenApplication } from './components/OpenApplication';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark font-display text-white selection:bg-primary/30">
      <AnalyticsConsent />
      <div className="flex h-full grow flex-col">
        <Header />
        
        <main className="flex-grow">
          <Hero />

          <FeatureSection
            category="Colorectal"
            title="Insight in GI Procedures"
            description="Visualise tissue perfusion and health during colorectal procedures. HSI aids in assessing anastomosis viability, potentially lowering complication rates and promoting faster, more successful recoveries for patients."
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAAlPq7OwwsBY8H1-NW0p4BGJen1q2vZsxvHtQpMsWOCUrSOdLpo_ddgUkU_EnWPnZ9UAu7FRdmemul_E5zsmx9RBrWPq28w15cl8qhbfBLJ6i7kgoLQrvcaRnjZFZjdY-Z9sfCWh_2iBXvlyHXSAleD8oUx9Z4TZ5-uQL7nog7Z-aq9Q4clR2dH7xIvLXHWw1qOPinKNpJ-Venc6I1Qp_vqTmajpegnaTtZg5IYmxq6ErR63ouvDIMWrfTa4E2wsoFyTpUq-HRXgZh"
            imageAlt="A stylized image representing the colorectal region"
          />

          <FeatureSection
            category="Oncological"
            title="Clarity in Oncology"
            description="Enhance breast-conserving surgery by accurately assessing tumour boundaries. Our system helps ensure all cancerous tissue is removed in a single operation, reducing the need for follow-up surgeries and improving patient peace of mind."
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAozNkGVgQkm483ipI6jjZVO1BESRmb-8F_5i5Kle8hYJTotKuR0YcmO7_jqI_RC9th3swHiusfP8gdNVQSkCd4nqgbu8YnzHMSdQ-RIQ-XGYuoRTQgWW0lUmO-1Wc-NArVhZLaFnxXh1cGjgQCmRQ9hECoUhjK7kJoAXmTjPIe5g3sUmP3YdmXx_e7oRei0tSs552KM26Xo1le5sFgsUdykZNVpJjf5xLVqNnowE9Nvkc6FFlCCXw6zaXR8U0wqGWFaSYLfXA-T3dI"
            imageAlt="A detailed, abstract visualisation of breast tissue with hyperspectral imaging effects"
            reversed={true}
          />

          <FeatureSection
            category="Neurological"
            title="Precision in Neurosurgery"
            description="Our HSI technology provides real-time tissue differentiation, helping surgeons to precisely identify tumour margins and preserve critical brain function. This leads to more complete resections and safer procedures."
            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCjfT-iIr3OlcHTEOZjjYlUEH0FfTtj3CMxwNqIUDAnbQSMxy5Tb_gH1-upfcYgIs6hDD6NNNMkfz2T8MqzWCOGDY7TnOneE1WDs5owBsvPxoIgRgIne3ckWHLxW651lnxjNWioi8ZMnZQTk3eKuU5Rd1FIBxsgsAYOx7zkGy_DEuJD4h8IQyXobQB9aV_Q092z8mWBvzS0ASLJRg0jA6nF5ZaL6SYLqe__wUmnCclrh-tZKcQhYbHmuMaPZH4eGJ8AJTjJdO8wcINw"
            imageAlt="Abstract vibrant light patterns in shades of cyan and purple overlaying a medical scan of a human brain"
          />

          <OpenApplication />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
