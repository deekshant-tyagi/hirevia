# 🚀 HireVia - Your Gateway to Dream Careers

<div align="center">
  <img src="./public/newLogo-Photoroom.png" alt="HireVia Logo" width="200" height="200"/>

[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0+-FF0055.svg)](https://www.framer.com/motion/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF.svg)](https://clerk.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E.svg)](https://supabase.com/)

</div>

## ✨ Overview

**HireVia** is a modern, full-stack job portal application that connects job seekers with their dream careers and helps employers find top talent. Built with cutting-edge technologies and featuring a **minimalist, aesthetic design** with **smooth animations** and **professional user experience**.

## 🔧 Core Functionality

### 🔐 **Authentication & Security**

- **Clerk Authentication** with Google and email/password
- **Custom cursor** that works with all modals
- **Secure session management**
- **Profile management** with user roles

### 💼 **Job Management**

- **Job Postings**: Recruiters can post jobs with Markdown descriptions
- **Job Browsing**: Candidates can browse and filter jobs
- **Application System**: Apply with resume uploads
- **Status Tracking**: Real-time application status updates
- **Wishlist**: Save jobs for later viewing

### 📊 **Advanced Features**

- **Resume Upload** via storage buckets
- **Job Filters** by location, company, and role
- **Markdown Support** for rich job descriptions
- **Real-time Updates** for application status
- **Application Management** for recruiters

## 🛠️ Technologies Used

### **Frontend & UI**

- **React 18+** - Modern React with hooks and concurrent features
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful, accessible component library
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon library

### **Animation & Interaction**

- **Custom Smooth Scroll** - 60fps scrolling with easing
- **Interactive Cursor** - Custom cursor with physics
- **Loading Animations** - Progress bars with shimmer effects
- **Hover Effects** - Smooth transitions and transforms

### **Backend & Database**

- **Supabase** - Open source Firebase alternative
- **PostgreSQL** - Robust relational database
- **Storage Buckets** - File upload and management
- **Real-time Subscriptions** - Live data updates

### **Authentication & Security**

- **Clerk** - Complete authentication solution
- **Session Management** - Secure user sessions
- **Role-based Access** - Candidate/Recruiter permissions

### **Development Tools**

- **Vite** - Fast build tool and dev server
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation

## 🚀 Application Flow

### 👤 **For Job Seekers (Candidates)**

1. **🎬 Experience the Loading Animation** - Beautiful 11-second intro
2. **🔐 Sign In** - Google OAuth or email/password via Clerk
3. **🏠 Explore Landing Page** - 11 sections with smooth animations
4. **🔍 Browse Jobs** - Filter by location, company, role
5. **📄 Apply with Resume** - Upload and submit applications
6. **📊 Track Applications** - Real-time status updates
7. **❤️ Save Favorites** - Wishlist jobs for later
8. **👤 Manage Profile** - Update personal information

### 🏢 **For Employers (Recruiters)**

1. **🎬 Experience the Loading Animation** - Professional first impression
2. **🔐 Sign In** - Secure authentication with role detection
3. **📝 Post Jobs** - Rich Markdown descriptions with formatting
4. **📋 Manage Applications** - Review and update candidate status
5. **📊 Track Performance** - Monitor job posting success
6. **✏️ Edit/Delete Jobs** - Full job management capabilities
7. **👥 Candidate Communication** - Update hiring status in real-time

## 🎨 **User Experience Highlights**

- **🎬 First Impression**: Stunning animated loader sets professional tone
- **⚡ Performance**: 60fps smooth scrolling throughout the app
- **🖱️ Interactivity**: Custom cursor that works everywhere
- **📱 Responsive**: Perfect experience on desktop, tablet, and mobile
- **🎯 Accessibility**: Keyboard navigation and screen reader support
- **🌙 Dark Theme**: Modern dark UI with gradient accents

## ⚙️ **Setup & Installation**

### **Prerequisites**

- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account

### **Environment Variables**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### **Installation Steps**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/hirevia.git
   cd hirevia
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5174
   ```

### **Build for Production**

```bash
npm run build
npm run preview
```

## 🚀 **Performance & Optimization**

- **⚡ Fast Loading**: Vite build system for instant dev server
- **🎯 Code Splitting**: Lazy loading for optimal bundle size
- **📱 Mobile First**: Responsive design with touch optimization
- **🎨 Smooth Animations**: 60fps with requestAnimationFrame
- **🔧 SEO Ready**: Meta tags and semantic HTML structure

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact**

- **Project Link**: [https://github.com/deekshant-tyagi/hirevia](https://github.com/deeekshant-tyagi/hirevia)
- **Live Demo**: [https://hirevia.netlify.app](https://hirevia.netlify.app)
- **Email**: deekshanttyagii@gmail.com

---

<div align="center">
  <p>Made with ❤️ by Deekshant Tyagi</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
