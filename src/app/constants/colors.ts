// Brand Color Constants
export const BRAND_COLORS = {
  // Main brand colors
  blue: '#026EC4',
  cyan: '#0ECEEO',
  
  // RGB values for gradients
  blueRGB: '2 110 196',
  cyanRGB: '14 206 224',
  
  // Light variations
  blue50: '#e6f2fb',
  blue100: '#cce5f7',
  blue200: '#99cbef',
  blue400: '#3498d9',
  
  cyan50: '#e7fcfe',
  cyan100: '#cff9fc',
  cyan200: '#9ff3f9',
  cyan400: '#3fe4f4',
  
  // Gradients (for inline styles)
  gradientBlueToCyan: 'linear-gradient(to right, #026EC4, #0ECEEO)',
  gradientBlueToCyanBR: 'linear-gradient(to bottom right, #026EC4, #0ECEEO)',
};

// Tailwind classes
export const BRAND_CLASSES = {
  gradientBG: 'bg-gradient-to-r from-[#026EC4] to-[#0ECEEO]',
  gradientBGBR: 'bg-gradient-to-br from-[#026EC4] to-[#0ECEEO]',
  gradientText: 'bg-gradient-to-r from-[#026EC4] to-[#0ECEEO] bg-clip-text text-transparent',
  textBlue: 'text-[#026EC4]',
  textCyan: 'text-[#0ECEEO]',
  bgBlue: 'bg-[#026EC4]',
  bgCyan: 'bg-[#0ECEEO]',
  borderBlue: 'border-[#026EC4]',
  button: 'bg-gradient-to-r from-[#026EC4] to-[#0ECEEO] text-white',
};
