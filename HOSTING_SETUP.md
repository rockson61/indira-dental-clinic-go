# Complete Hosting Setup Guide
**Indira Dental Clinic - www.dentalclinicinvellore.in**

---

## 📁 **Index Files Created**

### **1. `public/index.html`** ✅
- Fallback static HTML page
- Redirects to Next.js app
- Shows clinic information while loading
- Professional loading animation
- Contact information displayed
- Works for static hosting scenarios

### **2. `vercel.json`** ✅
- Vercel deployment configuration
- Environment variables
- Route handling
- Optimized for Singapore region (closest to India)

### **3. `public/.htaccess`** ✅
- Apache server configuration
- HTTPS redirect
- Gzip compression
- Browser caching
- Security headers
- Custom error pages

---

## 🚀 **Deployment Methods**

### **Method 1: Vercel (Recommended - Easiest)**

#### **Setup (2 minutes):**

**Option A: GitHub Integration (Recommended)**
```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for deployment with index files"
git push origin main

# 2. Go to https://vercel.com
# 3. Click "New Project"
# 4. Import your GitHub repository
# 5. Configure:
#    - Framework: Next.js (auto-detected)
#    - Build Command: pnpm build
#    - Output Directory: .next
# 6. Click "Deploy"
# 7. Wait 2-3 minutes
# 8. Your site is live!
```

**Option B: Vercel CLI**
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
cd /Users/rockson61/Downloads/indira-dental-clinic
vercel

# 4. Follow prompts:
# - Setup and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? indira-dental-clinic
# - Directory? ./
# - Override settings? No

# 5. Deploy to production
vercel --prod
```

#### **Custom Domain Setup:**
```bash
# In Vercel Dashboard:
# 1. Go to Project → Settings → Domains
# 2. Add domain: www.dentalclinicinvellore.in
# 3. Add DNS records as instructed:

# DNS Records:
Type    Name    Value
----    ----    -----
CNAME   www     cname.vercel-dns.com
A       @       76.76.21.21

# 4. Wait 5-10 minutes for propagation
# 5. SSL certificate auto-generated
# 6. Done!
```

---

### **Method 2: Netlify**

#### **Setup:**

**Option A: Netlify UI**
```bash
# 1. Go to https://netlify.com
# 2. Click "New site from Git"
# 3. Connect to GitHub
# 4. Select repository: indira-dental-clinic
# 5. Configure:
#    - Build command: pnpm build
#    - Publish directory: .next
#    - Install command: pnpm install
# 6. Click "Deploy site"
# 7. Wait 3-5 minutes
# 8. Site is live!
```

**Option B: Netlify CLI**
```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
cd /Users/rockson61/Downloads/indira-dental-clinic
netlify init

# 4. Follow prompts
netlify deploy --prod
```

#### **Custom Domain:**
```bash
# In Netlify Dashboard:
# 1. Site settings → Domain management
# 2. Add custom domain: www.dentalclinicinvellore.in
# 3. Configure DNS:

Type    Name    Value
----    ----    -----
CNAME   www     your-site.netlify.app
A       @       75.2.60.5

# 4. Enable HTTPS (automatic)
```

---

### **Method 3: Self-Hosted (VPS/Dedicated Server)**

#### **Requirements:**
- Ubuntu 20.04+ / Debian 11+
- Node.js 20+
- Nginx / Apache
- Domain with DNS access

#### **Step 1: Server Setup**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Install PM2
npm install -g pm2

# Install Nginx
sudo apt-get install nginx -y
```

#### **Step 2: Clone and Build**
```bash
# Create directory
sudo mkdir -p /var/www
cd /var/www

# Clone repository
sudo git clone https://github.com/yourusername/indira-dental-clinic.git
cd indira-dental-clinic

# Install dependencies
sudo pnpm install

# Build for production
sudo pnpm build

# Test production build
pnpm start
# Open http://your-server-ip:3000 to verify
```

#### **Step 3: PM2 Setup (Process Management)**
```bash
# Start with PM2
pm2 start npm --name "dental-clinic" -- start

# Save PM2 configuration
pm2 save

# Enable PM2 on boot
pm2 startup
# Run the command it outputs

# Check status
pm2 status
pm2 logs dental-clinic
```

#### **Step 4: Nginx Configuration**

Create `/etc/nginx/sites-available/dental-clinic`:
```nginx
# Upstream configuration
upstream dental_clinic {
    server 127.0.0.1:3000;
    keepalive 64;
}

# HTTP to HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name dentalclinicinvellore.in www.dentalclinicinvellore.in;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name dentalclinicinvellore.in www.dentalclinicinvellore.in;

    # SSL Configuration (will be added by Certbot)
    ssl_certificate /etc/letsencrypt/live/dentalclinicinvellore.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dentalclinicinvellore.in/privkey.pem;
    
    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_stapling on;
    ssl_stapling_verify on;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

    # Logging
    access_log /var/log/nginx/dental-clinic-access.log;
    error_log /var/log/nginx/dental-clinic-error.log;

    # Root and index
    root /var/www/indira-dental-clinic;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;
    gzip_disable "MSIE [1-6]\.";

    # Proxy to Next.js
    location / {
        proxy_pass http://dental_clinic;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp|woff|woff2|ttf|otf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Next.js static files
    location /_next/static {
        proxy_cache_valid 60m;
        proxy_pass http://dental_clinic;
    }

    # Favicon
    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }

    # Robots.txt
    location = /robots.txt {
        log_not_found off;
        access_log off;
    }

    # Sitemap
    location = /sitemap.xml {
        proxy_pass http://dental_clinic;
        proxy_cache_valid 1h;
    }
}
```

Enable the site:
```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/dental-clinic /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# If test passes, restart Nginx
sudo systemctl restart nginx
```

#### **Step 5: SSL Certificate (Let's Encrypt)**
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d dentalclinicinvellore.in -d www.dentalclinicinvellore.in

# Follow prompts:
# - Enter email address
# - Agree to terms
# - Redirect HTTP to HTTPS: Yes

# Test auto-renewal
sudo certbot renew --dry-run

# Certificate auto-renews every 90 days
```

#### **Step 6: Firewall Configuration**
```bash
# Enable UFW
sudo ufw enable

# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Check status
sudo ufw status
```

#### **Step 7: Monitoring**
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs dental-clinic

# Monitor server resources
pm2 monit

# Nginx logs
sudo tail -f /var/log/nginx/dental-clinic-access.log
sudo tail -f /var/log/nginx/dental-clinic-error.log
```

---

### **Method 4: cPanel / Shared Hosting**

#### **Requirements:**
- cPanel access
- Node.js support
- SSH access (optional but recommended)

#### **Setup:**

**Step 1: Upload Files**
```bash
# Option A: Upload via FTP
# - Compress your project: zip -r dental-clinic.zip .
# - Upload via FileZilla/FTP client
# - Extract in public_html

# Option B: Git deployment
# - Enable Git in cPanel
# - Clone repository
# - Install dependencies
```

**Step 2: Setup Node.js App**
```bash
# In cPanel → Setup Node.js App:
# - Node.js version: 20.x
# - Application mode: Production
# - Application root: public_html/indira-dental-clinic
# - Application URL: dentalclinicinvellore.in
# - Application startup file: node_modules/next/dist/bin/next

# Set environment variables in cPanel
```

**Step 3: Configure `.htaccess`**
```bash
# The .htaccess file is already created in public/.htaccess
# Copy it to your root directory if needed
```

---

## 🌐 **DNS Configuration**

### **For Vercel:**
```dns
Type    Name    Value                           TTL
----    ----    -----                           ---
A       @       76.76.21.21                     3600
CNAME   www     cname.vercel-dns.com           3600
```

### **For Netlify:**
```dns
Type    Name    Value                           TTL
----    ----    -----                           ---
A       @       75.2.60.5                       3600
CNAME   www     your-site.netlify.app          3600
```

### **For Self-Hosted:**
```dns
Type    Name    Value                           TTL
----    ----    -----                           ---
A       @       YOUR_SERVER_IP                  3600
A       www     YOUR_SERVER_IP                  3600
```

### **Email (Optional):**
```dns
Type    Name    Value                           Priority    TTL
----    ----    -----                           --------    ---
MX      @       mail.dentalclinicinvellore.in  10          3600
```

---

## ✅ **Post-Deployment Checklist**

### **Immediate (First Hour):**
- [ ] Verify site is accessible via domain
- [ ] Check HTTPS certificate (should show padlock)
- [ ] Test all major pages load correctly
- [ ] Submit a test question via form
- [ ] Test WhatsApp integration
- [ ] Check mobile responsiveness
- [ ] Verify images are loading
- [ ] Test navigation menu
- [ ] Check sitemap: /sitemap.xml
- [ ] Verify robots.txt: /robots.txt

### **First Day:**
- [ ] Submit sitemap to Google Search Console
- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights
- [ ] Monitor error logs
- [ ] Test from different devices
- [ ] Test from different locations
- [ ] Check all forms work

### **First Week:**
- [ ] Monitor uptime (should be 99%+)
- [ ] Review analytics (if enabled)
- [ ] Check for 404 errors
- [ ] Monitor form submissions
- [ ] Review WhatsApp inquiries
- [ ] Check server resources (if self-hosted)
- [ ] Update DNS TTL if needed

---

## 📊 **Performance Monitoring**

### **Tools to Use:**

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev
   - Test your live site
   - Target: 90+ on mobile and desktop

2. **Google Search Console**
   - URL: https://search.google.com/search-console
   - Add property
   - Submit sitemap
   - Monitor indexing

3. **Uptime Robot (Free)**
   - URL: https://uptimerobot.com
   - Monitor every 5 minutes
   - Email alerts on downtime

4. **Vercel Analytics** (if using Vercel)
   - Automatic with Vercel deployment
   - Real-time performance metrics
   - Core Web Vitals monitoring

---

## 🔧 **Troubleshooting**

### **Issue: Site Not Loading**
```bash
# Check if server is running
pm2 status

# Check server logs
pm2 logs dental-clinic

# Check Nginx
sudo nginx -t
sudo systemctl status nginx

# Check port 3000
sudo netstat -tulpn | grep 3000
```

### **Issue: HTTPS Not Working**
```bash
# Renew SSL certificate
sudo certbot renew

# Check certificate
sudo certbot certificates

# Force HTTPS redirect in Nginx
# (Already configured in our nginx.conf)
```

### **Issue: Slow Performance**
```bash
# Check server resources
htop

# Check PM2 memory
pm2 monit

# Restart PM2 process
pm2 restart dental-clinic

# Clear Next.js cache
cd /var/www/indira-dental-clinic
rm -rf .next
pnpm build
pm2 restart dental-clinic
```

---

## 🎯 **Deployment Summary**

### **Files Created for Hosting:**
1. ✅ `public/index.html` - Fallback HTML page
2. ✅ `vercel.json` - Vercel configuration
3. ✅ `public/.htaccess` - Apache configuration

### **Recommended Platform:**
**Vercel** - Easiest and fastest deployment for Next.js

### **Deployment Time:**
- Vercel: **2-5 minutes** ⚡
- Netlify: **3-7 minutes**
- Self-Hosted: **30-60 minutes**
- cPanel: **15-30 minutes**

### **Cost:**
- Vercel Free Tier: **$0/month** ✅
- Netlify Free Tier: **$0/month** ✅
- Self-Hosted VPS: **$5-20/month**
- cPanel Hosting: **$3-10/month**

---

## 🚀 **Quick Deploy Command**

**For Vercel (Fastest):**
```bash
# One-line deployment
npx vercel --prod
```

**For Build Test:**
```bash
# Test production build locally
cd /Users/rockson61/Downloads/indira-dental-clinic
pnpm build && pnpm start
```

---

## 📞 **Support**

### **Platform Support:**
- **Vercel:** support@vercel.com
- **Netlify:** support@netlify.com
- **Documentation:** See DEPLOYMENT_GUIDE.md

---

**🎉 Your website is now ready to host on any platform!**

**Recommended Next Step:** Deploy to Vercel for fastest setup.

---

**Last Updated:** October 25, 2025  
**Status:** ✅ Ready for Production Hosting

