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
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.md')) {
        filelist.push(dir + '/' + file);
      }
    }
  });
  return filelist;
};

const files = walkSync('.');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Phone numbers
  content = content.replace(/\+1\s*\(?480\)?[-.\s]*306[-.\s]*5591/g, '(520) 569-3339');
  content = content.replace(/\(?480\)?[-.\s]*306[-.\s]*5591/g, '(520) 569-3339');
  content = content.replace(/4803065591/g, '(520) 569-3339');
  content = content.replace(/tel:4803065591/g, 'tel:+15205693339');
  content = content.replace(/tel:\+14803065591/g, 'tel:+15205693339');
  content = content.replace(/tel:\(?480\)?[-.\s]*306[-.\s]*5591/g, 'tel:+15205693339');

  // Business Name variations
  content = content.replace(/ARZ Remodeling/g, 'ARZ Home Remodeling');
  content = content.replace(/ChandlerBathroom Remodeling/g, 'ARZ Home Remodeling');
  content = content.replace(/ARZ Home Remodeling Home Remodeling/g, 'ARZ Home Remodeling'); // Fix double replace

  // Email
  content = content.replace(/sales@arzhomeremodeling\.com/g, 'info@arzremodeling.com');

  // Address - standardize
  // Let's assume some variations
  content = content.replace(/6710 W Chicago St[^\n]*/g, '6710 W Chicago St, Chandler, AZ 85226');
  
  // ROC Number
  content = content.replace(/ROC #345678/g, 'ROC Licensed | License #ROC338304');
  content = content.replace(/ROC #XXXXXX/g, 'ROC Licensed | License #ROC338304');

  // Footer Links Fix
  content = content.replace(/\/remodeling-gilbert-az\/?/g, '/bathroom-remodeling-gilbert-az/');
  content = content.replace(/\/remodeling-mesa-az\/?/g, '/bathroom-remodeling-mesa-az/');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
