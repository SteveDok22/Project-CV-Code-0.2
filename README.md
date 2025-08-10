# Professional Portfolio | Stiven Ntoktorov
**Creative Dark Mode Portfolio - Full-Stack Developer in Training**

## 🎨 Project Overview

This is a modern, responsive portfolio website showcasing a creative dark mode design with dynamic animations and professional content. Built with vanilla HTML, CSS, and JavaScript, it demonstrates advanced front-end development skills and contemporary web design principles.

**Live Website:** [See deployed website](https://stevedok22.github.io/Project-CV-Code-0.2/)

## ✨ Features

### 🎯 **Core Functionality**
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Hamburger Navigation**: Fully functional mobile menu with smooth animations
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Section Highlighting**: Dynamic navigation state management
- **PDF Download**: Direct CV download with email fallback option

### 🎪 **Visual Effects**
- **Animated Background Mesh**: Moving gradient patterns
- **Floating Elements**: Dynamic particle system
- **Glassmorphism Design**: Modern backdrop blur effects
- **Gradient Text Animations**: Color-shifting typography
- **Hover Interactions**: Responsive card effects
- **Timeline Design**: Professional experience visualization

### 📱 **Mobile Optimization**
- **Touch Gestures**: Swipe to close navigation
- **Responsive Grid**: Adaptive layouts across devices
- **Performance Optimized**: Efficient animations and rendering
- **Accessibility**: WCAG 2.1 compliance considerations

## 🛠️ Technical Stack

- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Advanced animations, gradients, and responsive design
- **JavaScript ES6+**: Modern syntax with event handling
- **Google Fonts**: Poppins and JetBrains Mono typography
- **SVG Icons**: Scalable vector graphics (GitHub logo included)

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML structure
├── style.css              # All CSS styles and animations
├── script.js              # Interactive functionality
├── assets/
│   ├── images/
│   │   └── profile-photo.jpg
│   └── cv/
│       └── Stiven_Ntoktorov_CV.pdf
└── README.md              # This documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Web server (for local development)

### Installation

1. **Clone or download the project files**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Add your profile photo**
   - Place your profile image at `assets/images/profile-photo.jpg`
   - Recommended size: 400x400px or larger (square format)

3. **Add your CV**
   - Place your PDF CV at `assets/cv/Stiven_Ntoktorov_CV.pdf`
   - Update the filename in `index.html` if different

4. **Run locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx live-server
   
   # Or simply open index.html in browser
   ```

## 🎨 Customization

### Color Scheme
The portfolio uses a vibrant color palette defined in CSS:
- **Primary**: `#ff6b6b` (Coral Red)
- **Secondary**: `#4ecdc4` (Teal)
- **Accent**: `#45b7d1` (Sky Blue)
- **Highlight**: `#96ceb4` (Mint Green)

### Content Updates
Edit the following sections in `index.html`:
- Personal information and contact details
- Professional objective
- Skills and expertise
- Work experience and timeline
- Educational background
- Project descriptions
- Professional references

### Styling Modifications
Key CSS sections for customization:
- **Hero Section**: `.hero-title`, `.hero-subtitle`
- **Navigation**: `.nav-links a`, `.logo`
- **Cards**: `.card`, `.skill-box`, `.timeline-item`
- **Animations**: `@keyframes` rules
- **Colors**: Root variables or direct color values

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Browser Support

### Confirmed Compatible
- ✅ Chrome 90+ (Desktop & Mobile)
- ✅ Firefox 88+ (Desktop & Mobile)
- ✅ Safari 14+ (Desktop & Mobile)
- ✅ Edge 90+ (Desktop & Mobile)
- ✅ Samsung Internet
- ✅ iOS Safari

### Key Features Tested
- ✅ Responsive navigation and hamburger menu
- ✅ Smooth scrolling and active states
- ✅ CSS animations and transitions
- ✅ Touch gesture support
- ✅ PDF download functionality

## 🐛 Troubleshooting

### Common Issues

**Hamburger menu not working on mobile:**
- Check browser console for JavaScript errors
- Ensure `script.js` is loading correctly
- Test with `window.testHamburger()` in console

**Images not loading:**
- Verify image paths in `assets/images/`
- Check file permissions
- Ensure web server is serving static files

**PDF download not working:**
- Confirm PDF exists at `assets/cv/Stiven_Ntoktorov_CV.pdf`
- Check MIME type configuration on server
- Test email fallback option

### Debug Tools
Open browser console and use:
```javascript
// Test hamburger functionality
window.testHamburger()

// Access debug utilities
window.portfolioDebug.toggleMenu()
window.portfolioDebug.getActiveSection()
window.portfolioDebug.createFloatingElement()
```

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Access via `https://username.github.io/repository-name`

### Netlify
1. Connect repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy automatically on push

### Other Hosting Options
- **Vercel**: Automatic deployment from Git
- **Firebase Hosting**: Google's hosting platform
- **Surge.sh**: Simple static site hosting

## 📈 Performance

### Optimization Features
- **Efficient Animations**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Intersection Observer for scroll animations
- **Debounced Events**: Optimized scroll event handling
- **Minimal Dependencies**: Vanilla JavaScript approach

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

## 🎯 Business Value

### Professional Benefits
- **Modern Design**: Demonstrates current web development trends
- **Technical Skills**: Showcases HTML, CSS, and JavaScript proficiency
- **Responsive Development**: Mobile-first approach
- **User Experience**: Smooth interactions and animations
- **Code Quality**: Clean, well-documented, maintainable code

### Industry Applications
- **Creative Agencies**: Modern, innovative design approach
- **Tech Startups**: Cutting-edge visual effects
- **Corporate Roles**: Professional content structure
- **Freelance Work**: Portfolio demonstration capabilities

## 🔄 Updates and Maintenance

### Content Updates
- **Regular**: Update experience, projects, and skills
- **Quarterly**: Review and refresh project descriptions
- **Annually**: Update educational background and certifications

### Technical Maintenance
- **Dependencies**: Monitor for font and library updates
- **Browser Support**: Test with new browser versions
- **Performance**: Regular Lighthouse audits
- **Security**: Keep hosting platform updated

## 📞 Contact Information

**Stiven Ntoktorov**  
*Full-Stack Developer in Training*

📍 **Address**: 8052 Zürich, Switzerland  
📞 **Phone**: +41 76 525 9731  
📧 **Email**: s.doktorov123@gmail.com  
💼 **GitHub**: [SteveDok22](https://github.com/SteveDok22)

🏛️ **Legal Status**: Swiss Permit B | EU Citizen (Greek Nationality)

## 📋 Changelog

### Version 1.0.0 (July 2025)
- ✅ Initial portfolio release
- ✅ Responsive design implementation
- ✅ Mobile hamburger navigation
- ✅ Download CV functionality
- ✅ Professional content structure
- ✅ Dark mode creative design
- ✅ Animation system integration

### Planned Features (Future Versions)
- 🔄 Contact form integration
- 🔄 Blog section addition
- 🔄 Project gallery expansion
- 🔄 Testimonials section
- 🔄 Multi-language support
- 🔄 Dark/Light mode toggle
- 🔄 Advanced analytics integration

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome:

1. **Issues**: Report bugs or suggest improvements
2. **Pull Requests**: Submit code improvements
3. **Feedback**: Share design or content suggestions

## 📜 License

This project is licensed for personal and educational use. Please contact for commercial usage rights.

### Usage Guidelines
- ✅ Personal portfolios and learning projects
- ✅ Educational demonstrations and tutorials
- ✅ Open source contributions and modifications
- ❌ Commercial redistribution without permission
- ❌ Direct copying for client projects

## 🙏 Acknowledgments

### Inspiration and Resources
- **Design Trends**: Modern SaaS interface patterns
- **Color Palettes**: Contemporary gradient combinations
- **Typography**: Google Fonts (Poppins, JetBrains Mono)
- **Icons**: Custom SVG implementations
- **Animations**: CSS3 and JavaScript best practices

### Educational Framework
- **Code Institute**: Full-Stack Development training
- **Web Standards**: W3C guidelines and MDN documentation
- **Accessibility**: WCAG 2.1 compliance principles

## 🔗 Related Projects

### Portfolio Variations
This repository includes multiple color scheme variations:
- **Original Creative**: Red/Teal/Blue/Green
- **Ocean Blue**: Professional blue tones
- **Emerald Forest**: Green sustainability theme
- **Royal Purple**: Luxury and creativity focus
- **Monochrome**: Black/White/Gray professional

### Technical Implementations
- **Responsive Design**: Mobile-first CSS Grid and Flexbox
- **Animation Library**: Custom CSS keyframe animations
- **Component System**: Modular CSS class structure
- **Performance**: Optimized loading and rendering

---

## 📚 Additional Documentation

### CSS Architecture
The stylesheet follows a logical organization:
1. **Reset and Base**: Universal styles and typography
2. **Layout Components**: Navigation, hero, sections
3. **Interactive Elements**: Buttons, cards, forms
4. **Animations**: Keyframes and transitions
5. **Responsive**: Media queries and mobile optimizations

### JavaScript Modules
The script is organized into functional sections:
1. **Navigation**: Menu toggle and active states
2. **Animations**: Floating elements and scroll effects
3. **User Interaction**: Touch gestures and hover effects
4. **Performance**: Debounced events and optimization
5. **Debug Tools**: Development and testing utilities

### File Dependencies
```
index.html
├── style.css (required)
├── script.js (required)
├── assets/images/profile-photo.jpg (recommended)
├── assets/cv/Stiven_Ntoktorov_CV.pdf (optional)
└── Google Fonts (external, CDN)
```

---

**Built with ❤️ by Stiven Ntoktorov | 2025**

*This portfolio represents a journey from culinary excellence to software development, showcasing transferable skills, analytical thinking, and a passion for creating innovative digital experiences.*