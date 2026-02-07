# FlowMadeIt - Video & Digital Marketing Agency Website

A modern, professional website for a video and digital marketing agency built with React and Vite.

## ✨ Features

### Modern Design
- Clean, professional UI with gradient effects
- Smooth animations and transitions
- Fully responsive layout

### Key Sections
- **Hero Section**: Eye-catching landing page with animated background shapes
- **Packages Section**: Three pricing tiers with the starter package highlighted in the center
- **Portfolio Section**: Filterable project showcase with hover effects
- **Team Section**: Team member cards with social media links
- **Statistics Section**: Animated counters and interactive charts
- **Footer**: Complete contact information and links

### Modern Effects
- Scroll-triggered animations
- Smooth fade-in transitions
- Hover effects and transformations
- Floating animations
- Gradient overlays
- Backdrop blur effects
- Animated counters
- Interactive charts

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Navigate to the project directory:**
   ```bash
   cd Flowmadeit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploy to Vercel (Recommended)

Your project is pre-configured for Vercel with `vercel.json`. **No manual setup needed!**

### Quick Deploy (GitHub Integration):

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com/)
   - Click "Add New" → "Project"
   - Import your repository: `Serkiy/FlowmadeitWeb`
   - Click "Deploy"
   - ⚡ Live in ~1 minute!

### Alternative: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

📖 **See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions**

---

## 🌐 Deploy to Netlify (Alternative)

Your project also supports Netlify deployment with `netlify.toml`.

### Option 1: Deploy with Netlify CLI

1. **Install Netlify CLI globally:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Deploy to Netlify:**
   ```bash
   netlify deploy
   ```

4. **For production deployment:**
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

2. **Go to [Netlify](https://app.netlify.com/) and sign in**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to your Git provider and select your repository**

5. **Configure build settings** (these are already set in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`

6. **Click "Deploy site"**

Your site will be live in minutes! 🎉

### Option 3: Drag & Drop Deploy

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to [Netlify Drop](https://app.netlify.com/drop)**

3. **Drag the `dist` folder to the upload area**

## 📁 Project Structure

```
Flowmadeit/
├── src/
│   ├── components/
│   │   ├── Hero.jsx & Hero.css
│   │   ├── Packages.jsx & Packages.css
│   │   ├── Portfolio.jsx & Portfolio.css
│   │   ├── Team.jsx & Team.css
│   │   ├── Statistics.jsx & Statistics.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── netlify.toml (Netlify configuration)
└── package.json
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src\App.css` and `src\index.css`:
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

### Content
- **Packages**: Edit the `packages` array in `src\components\Packages.jsx`
- **Portfolio**: Edit the `projects` array in `src\components\Portfolio.jsx`
- **Team**: Edit the `team` array in `src\components\Team.jsx`
- **Statistics**: Modify the stats in `src\components\Statistics.jsx`

### Images
Replace the Unsplash URLs in the components with your own images.

## 🛠 Technologies Used

- React 19
- Vite 7
- CSS3 with modern animations
- Intersection Observer API for scroll animations
- Google Fonts (Inter)

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance Features

- Lazy loading with Intersection Observer
- Optimized animations
- Responsive images
- Modern CSS features
- Fast build times with Vite
- CDN distribution via Netlify

## 📝 Environment Variables (Optional)

If you need environment variables, create a `.env` file in the root:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=info@flowmadeit.com
```

Access them in your code with `import.meta.env.VITE_API_URL`

## 🔒 Security Headers

The `netlify.toml` file includes security headers:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

## 📄 License

MIT License - Feel free to use this template for your projects!

---

Built with ❤️ for FlowMadeIt | Deployed on Netlify

