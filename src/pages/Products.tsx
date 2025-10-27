import React, { useState } from 'react';
import './Products.css';

type ServiceCategory = 'land' | 'finance' | 'licensing' | 'infrastructure';
type WorkflowStep = 'step-1' | 'step-2' | 'step-3' | 'step-4';

const Products: React.FC = () => {
  const [activeServiceCategory, setActiveServiceCategory] = useState<ServiceCategory>('land');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<WorkflowStep>('step-1');

  // Service data configuration
  const serviceData: Record<ServiceCategory, { title: string; description: string }> = {
    land: {
      title: 'ඉඩම් අනු බෙදුම් සහ ඉදිකිරීම්',
      description: 'ඉඩම් අනු බෙදුම් නිකුත් කිරීම හා ගොඩනැගිලි අයදුම් පත්‍ර අනුමත කිරීම, වීථී රේඛා සහතික නිකුත් කිරීම.'
    },
    finance: {
      title: 'මුදල් සහ බදු',
      description: 'වරිපනම් බදු හා මශ්‍ර ආදායම් අය කර ගැනීම, අනෙකුත් සේවා ගාස්තු අය කිරීම.'
    },
    licensing: {
      title: 'බලපත්‍ර නිකුත් කිරීම',
      description: 'පරිසර බලපත්‍ර, වෙළෙඳ බලපත්‍ර, සහ අනෙකුත් අදාළ බලපත්‍ර නිකුත් කිරිම.'
    },
    infrastructure: {
      title: 'යටිතල සහ පරිසරය',
      description: 'ග්‍රාමීය මාර්ග සංවර්ධනය, අපද්‍රව්‍ය කළමනාකරණය, පොදු වෙළෙඳසැල් නඩත්තුව.'
    }
  };

  // Workflow step details
  const workflowSteps: Record<WorkflowStep, { title: string; description: string }> = {
    'step-1': {
      title: 'පියවර 1: අයදුම්පත් ඉදිරිපත් කිරීම',
      description: 'සම්පූර්ණ කරන ලද අයදුම් පත්‍රය, අයිතිය තහවුරු කරන ලියකියවිලි සහ ඇඳි සැලසුම් සමඟ ප්‍රධාන කාර්යාලයට හෝ අදාළ උප කාර්යාලයට බාර දිය යුතුය.'
    },
    'step-2': {
      title: 'පියවර 2: ක්ෂේත්‍ර පරීක්ෂාව',
      description: 'අයදුම්පතේ නිරවද්‍යතාව සහ ඉදිකිරීම් නීතිවලට අනුකූලතාව පරීක්ෂා කිරීම සඳහා අදාළ නිලධාරීන් විසින් ස්ථානීය පරීක්ෂාවක් සිදු කරනු ලැබේ.'
    },
    'step-3': {
      title: 'පියවර 3: කමිටු අනුමැතිය',
      description: 'පරීක්ෂාවෙන් පසු, අයදුම්පත අනුමැතිය සඳහා ප්‍රාදේශීය සභා ස්ථාවර කමිටුව වෙත යොමු කෙරේ. අනුමැතිය ලැබුණහොත්, ගාස්තු ගෙවීම සඳහා දැනුම් දෙනු ලැබේ.'
    },
    'step-4': {
      title: 'පියවර 4: සහතිකය නිකුත් කිරීම',
      description: 'අවශ්‍ය සියලු ගාස්තු ගෙවීමෙන් පසු, ගොඩනැගිලි අනුමත කිරීමේ සහතිකය හෝ වීථී රේඛා සහතිකය නිකුත් කරනු ලැබේ.'
    }
  };

  return (
    <div className="products-page">

      <main className="products-main">
        <section className="page-content">
          <div className="page-header-card">
            <p className="page-description">
              බියගම ප්‍රාදේශීය සභාව මඟින් සපයන ප්‍රධාන සේවාවන් තේමාත්මකව වර්ගීකරණය කර ඇත. සේවාවක් තෝරාගෙන එහි විස්තර සහ අදාළ ක්‍රියාවලිය බලන්න.
            </p>
          </div>

          <div className="service-tabs" role="tablist" aria-label="සේවා වර්ග">
            {(Object.keys(serviceData) as ServiceCategory[]).map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeServiceCategory === category}
                onClick={() => setActiveServiceCategory(category)}
                className={`service-card ${activeServiceCategory === category ? 'active' : ''}`}
              >
                {serviceData[category].title}
              </button>
            ))}
          </div>

          <div className="service-details-card">
            <div className="service-header">
              <h3 className="service-title">{serviceData[activeServiceCategory].title}</h3>
              <p className="service-description">{serviceData[activeServiceCategory].description}</p>
            </div>

            <div className="workflow-section">
              <h4 className="workflow-title">ප්‍රධාන සේවා ක්‍රියාවලිය: ගොඩනැගිලි අයදුම්පත් අනුමත කිරීම</h4>
              <div className="workflow-steps" role="tablist">
                <button
                  role="tab"
                  aria-selected={activeWorkflowStep === 'step-1'}
                  onClick={() => setActiveWorkflowStep('step-1')}
                  className={`workflow-step ${activeWorkflowStep === 'step-1' ? 'active' : ''}`}
                >
                  1. අයදුම්පත් ඉදිරිපත් කිරීම
                </button>
                <button
                  role="tab"
                  aria-selected={activeWorkflowStep === 'step-2'}
                  onClick={() => setActiveWorkflowStep('step-2')}
                  className={`workflow-step ${activeWorkflowStep === 'step-2' ? 'active' : ''}`}
                >
                  2. ක්ෂේත්‍ර පරීක්ෂාව
                </button>
                <button
                  role="tab"
                  aria-selected={activeWorkflowStep === 'step-3'}
                  onClick={() => setActiveWorkflowStep('step-3')}
                  className={`workflow-step ${activeWorkflowStep === 'step-3' ? 'active' : ''}`}
                >
                  3. කමිටු අනුමැතිය
                </button>
                <button
                  role="tab"
                  aria-selected={activeWorkflowStep === 'step-4'}
                  onClick={() => setActiveWorkflowStep('step-4')}
                  className={`workflow-step ${activeWorkflowStep === 'step-4' ? 'active' : ''}`}
                >
                  4. සහතිකය නිකුත් කිරීම
                </button>
              </div>
            </div>

            <div className="workflow-details">
              <article className="step-detail">
                <h5 className="step-title">{workflowSteps[activeWorkflowStep].title}</h5>
                <p className="step-description">{workflowSteps[activeWorkflowStep].description}</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;