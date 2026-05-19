const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        filelist = walkSync(dir + '/' + file, filelist);
      }
    }
    else {
      if (file.endsWith('page.tsx')) {
        filelist.push(dir + '/' + file);
      }
    }
  });
  return filelist;
};

const files = walkSync('./app');

// Actual inner pages that need breadcrumbs + service schema
// We will look for directories that look like service pages
const isServicePage = (folder) => {
  return [
    'shower-remodeling', 'tub-to-shower-conversion', 'master-bathroom-remodel', 'small-bathroom-remodeling',
    'bathroom-tile-installation', 'bathroom-vanity-installation', 'ada-bathroom-remodeling', 'luxury-bathroom-remodeling',
    'guest-bathroom-remodeling', 'bathroom-flooring-installation', 'bathroom-lighting-installation', 'bathtub-remodeling',
    'shower-replacement', 'tub-removal', 'walk-in-showers'
  ].includes(folder);
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  if (file === './app/page.tsx') {
    // Add FAQSchema if not present
    if (!content.includes('<FAQSchema')) {
      if (!content.includes('FAQSchema')) {
        if(content.includes('@/components/seo/json-ld')) {
           content = content.replace(/import {([^}]*)} from ['"]@\/components\/seo\/json-ld['"]/, (match, p1) => {
              if(!p1.includes('FAQSchema')) return `import { ${p1}, FAQSchema } from "@/components/seo/json-ld"`;
              return match;
           });
        } else {
           content = 'import { FAQSchema } from "@/components/seo/json-ld";\n' + content;
        }
      }
      
      const faqData = `const homeFaqs = [
  { question: "How much does a bathroom remodel cost in Chandler?", answer: "The cost varies depending on the scope of work, but a typical bathroom remodel in Chandler ranges from $10,000 to $25,000 for standard updates, and $30,000+ for luxury master baths." },
  { question: "How long does a bathroom remodel take?", answer: "A standard bathroom remodel takes 2-4 weeks. A full custom master bathroom can take 4-6 weeks." },
  { question: "Are you licensed and insured?", answer: "Yes, ARZ Home Remodeling is fully licensed by the Arizona Registrar of Contractors and carries comprehensive insurance." }
];`;
      
      if (!content.includes('homeFaqs')) {
         content = content.replace(/export default function/, faqData + '\n\nexport default function');
      }
      
      if (!content.includes('<FAQSchema')) {
         content = content.replace(/(<main[^>]*>)/, '$1\n        <FAQSchema faqs={homeFaqs} />');
      }
    }
  } else if (file !== './app/layout.tsx' && file.includes('/app/') && !file.includes('admin') && !file.includes('[slug]')) {
    let parts = file.split('/');
    let folder = parts[parts.length - 2];
    if(folder === 'app') return; // Skip layout etc

    let url = `https://arzhomeremodeling.com/${folder}/`;
    let name = folder.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Add BreadcrumbSchema
    if (!content.includes('<BreadcrumbSchema')) {
      if (!content.includes('BreadcrumbSchema')) {
        if(content.includes('@/components/seo/json-ld')) {
           content = content.replace(/import {([^}]*)} from ['"]@\/components\/seo\/json-ld['"]/, (match, p1) => {
              if(!p1.includes('BreadcrumbSchema')) return `import { ${p1}, BreadcrumbSchema } from "@/components/seo/json-ld"`;
              return match;
           });
        } else {
           content = 'import { BreadcrumbSchema } from "@/components/seo/json-ld";\n' + content;
        }
      }
      
      const breadcrumbCode = `<BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "${name}", url: "${url}" } ]} />`;
      content = content.replace(/(return\s*\(\s*(?:<>|<[^>]*>)\s*)/, `$1\n      ${breadcrumbCode}\n`);
    }

    // Add Service Schema for service pages
    if (isServicePage(folder)) {
      if (!content.includes('<ServiceSchema')) {
        if (!content.includes('ServiceSchema')) {
          if(content.includes('@/components/seo/json-ld')) {
             content = content.replace(/import {([^}]*)} from ['"]@\/components\/seo\/json-ld['"]/, (match, p1) => {
                if(!p1.includes('ServiceSchema')) return `import { ${p1}, ServiceSchema } from "@/components/seo/json-ld"`;
                return match;
             });
          } else {
             content = 'import { ServiceSchema } from "@/components/seo/json-ld";\n' + content;
          }
        }

        const serviceCode = `<ServiceSchema serviceName="${name}" serviceDescription="Professional ${name} services in Chandler, AZ by ARZ Home Remodeling." serviceUrl="${url}" />`;
        content = content.replace(/(return\s*\(\s*(?:<>|<[^>]*>)\s*)/, `$1\n      ${serviceCode}\n`);
      }
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated schema for:', file);
  }
});
