# 🎓 EduPath - Scholarship Recommendation System

A **modern, clean, and user-friendly web application** that helps students discover and apply for scholarships worldwide.  
Built with a **light educational theme**, optimized for **accessibility**, **performance**, and **user experience**.

---

## 🎯 Features

### 🧠 Core Functionality
- **Smart Scholarship Finder** – AI-powered recommendation system based on user preferences  
- **Comprehensive Database** – 70+ scholarships from 16 countries worldwide  
- **Advanced Filtering** – Filter by country, category, education level, or deadline urgency  
- **Real-time Search** – Instant and responsive keyword search  
- **Interactive Analytics** – Modern CSS-based charts and statistics  
- **Responsive Design** – Works seamlessly on all devices  

### 💡 User Experience
- **Clean Educational Theme** – Light-only design with a professional color palette  
- **Smooth Animations** – Subtle hover and transition effects  
- **Accessibility-Ready** – ARIA labels, keyboard navigation, and screen reader support  
- **Performance Optimized** – Lightweight, fast-loading interface  

### 🚀 Advanced Features
- **Saved Scholarships** – Bookmark favorite opportunities (local storage)  
- **Multiple View Modes** – Grid and list layouts  
- **Smart Sorting** – Sort by deadline, name, country, or scholarship amount  
- **Pagination** – Load more for better performance  
- **Share Integration** – Share scholarship details easily  

---

## ⚙️ Getting Started

### 🔧 Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)  
- No additional dependencies required  

### 📦 Installation
```bash
# 1. Clone the repository
git clone https://github.com/your-username/EduPath.git

# 2. Navigate into the folder
cd EduPath

# 3. Open the app
open index.html
````

Or simply open `index.html` directly in your browser.

### 📁 File Structure

```
Minor-project-main/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and theme
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

---

## 🎨 Design System

### 🎨 Color Palette

| Role            | Color     | Meaning                      |
| --------------- | --------- | ---------------------------- |
| Primary Blue    | `#2563eb` | Professional and trustworthy |
| Secondary Green | `#059669` | Growth and opportunity       |
| Accent Orange   | `#f59e0b` | Highlights and attention     |
| Success Green   | `#10b981` | Positive actions             |
| Error Red       | `#dc2626` | Alerts and warnings          |

### ✍️ Typography

* **Primary Font**: [Inter](https://fonts.google.com/specimen/Inter) – Clean and readable
* **Heading Font**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) – Modern and distinctive
* **Monospace**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) – For code and data

### 🧩 Components

* Educational cards with soft shadows
* Interactive buttons with hover effects
* Consistent form elements with focus states
* Fixed navigation bar with blur backdrop

---

## 📊 Analytics Features

### Visualization Types

1. **Country Distribution** – Scholarships by country (bar chart)
2. **Category Breakdown** – Scholarship fields overview
3. **Education Level** – Levels like undergraduate, postgraduate, etc.
4. **Timeline View** – Scholarships by application deadlines

### Statistics Dashboard Includes:

* Total available scholarships
* Active opportunities count
* Real-time filtering stats
* Category-wise data

---

## 🎓 Scholarship Database

### Data Structure

Each scholarship entry includes:

```js
{
  name: "Scholarship Name",
  country: "Country",
  category: "Field",
  educationLevel: "Level",
  amount: "Amount or 'Varies'",
  deadline: "Date",
  link: "Official URL",
  latest: true // optional indicator
}
```

### Categories Covered

* STEM (Science, Tech, Engineering, Mathematics)
* Business & Economics
* Arts & Humanities
* Social Sciences
* Medicine & Health
* Engineering
* Environmental Studies
* International Relations

---

## 🛠️ Technical Implementation

### Frontend Stack

* **HTML5** – Semantic and accessible structure
* **CSS3** – Custom properties, animations, and responsiveness
* **Vanilla JavaScript** – Core logic and interactivity
* **FontAwesome** – Icons for better UX
* **Google Fonts** – For enhanced typography

### Key JavaScript Functions

| Function                 | Description                       |
| ------------------------ | --------------------------------- |
| `findScholarships()`     | Main recommendation engine        |
| `filterScholarships()`   | Advanced filtering system         |
| `displayFilteredLinks()` | Dynamic rendering of scholarships |
| `showVisualization()`    | Analytics and charts              |
| `saveScholarship()`      | Local storage bookmarking         |

### CSS Architecture

* Mobile-first, responsive approach
* Component-based modular styling
* CSS custom properties for easy theming
* Smooth animation and transition system

---

## 📱 Responsive Design

| Device  | Breakpoint     | Features                                  |
| ------- | -------------- | ----------------------------------------- |
| Mobile  | `<768px`       | Collapsible nav, touch-friendly interface |
| Tablet  | `768px–1024px` | Optimized layout                          |
| Desktop | `>1024px`      | Full experience                           |

---

## 🧭 User Journey

1. **Discovery** – Browse featured scholarships & dashboard
2. **Search** – Use filters and real-time search
3. **Evaluate** – Compare scholarships and save favorites
4. **Apply** – Visit official links and share opportunities

---

## 🧩 Customization

### Adding New Scholarships

1. Open `script.js`
2. Add a new entry in the `scholarships` array
3. Follow the same data structure
4. Refresh the page

### Theme Modifications

* Edit CSS variables inside `:root`
* Change color palette or typography
* Adjust spacing for layout tweaks

### Feature Extensions (Optional)

* Add user authentication
* Implement backend database
* Track applications
* Add email notifications

---

## ✅ Best Practices

### Performance

* Optimized assets and minimal dependencies
* Efficient DOM rendering
* Progressive enhancement

### Accessibility

* ARIA labels and roles
* Keyboard and screen reader support
* High contrast colors

### SEO

* Semantic HTML
* Optimized meta tags
* Fast load times

---

## 🤝 Contributing

### Development Guidelines

1. Follow code style conventions
2. Test on multiple browsers
3. Ensure mobile compatibility
4. Maintain accessibility standards

### Feature Requests

* Open an issue with your proposal
* Explain the use case clearly
* Ensure a positive UX impact
* Test before submitting

---

## 📄 License

This project is **open-source** and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

* Scholarship data sourced from verified university and organization websites
* Icons: [FontAwesome](https://fontawesome.com)
* Fonts: [Google Fonts](https://fonts.google.com)
* Design inspiration from modern educational platforms

---

## 📞 Support

If you face any issues:

1. Review documentation
2. Check browser compatibility
3. Open an issue with detailed information

---

> **EduPath** – Empowering students to find their path to educational success through accessible scholarship opportunities.# Scholarship-Recommendation-System
