# How to Push Files to GitHub Repository

## 🚨 Git Not Found in PATH

Git command-line is not available in your current PowerShell session. Here are your options:

---

## ✅ Option 1: Using GitHub Desktop (Easiest)

If you have GitHub Desktop installed:

1. **Open GitHub Desktop**
   - Launch GitHub Desktop application

2. **Add the Repository**
   - File → Add Local Repository
   - Browse to: `E:\Git Desktop\pharmazen`
   - Click "Add Repository"

3. **Review Changes**
   - You should see all modified and new files:
     - Modified: `src/components/landing/HeroSection.tsx`
     - Deleted: `src/components/ProductDemo.tsx`
     - Added: `DEPLOYMENT.md`, `CHANGES.md`, `VERIFICATION.md`, `QUICK-DEPLOY.md`

4. **Commit Changes**
   - In the "Summary" field, enter: `Remove watch demo functionality and prepare for Vercel deployment`
   - In the "Description" field (optional), add details about the changes
   - Click "Commit to main"

5. **Push to GitHub**
   - Click "Push origin" button at the top
   - Wait for the push to complete

6. **Verify**
   - Go to: https://github.com/SongsBeats/Pharmazen-Website
   - Verify your changes are there

---

## ✅ Option 2: Install/Fix Git Command Line

### Install Git for Windows

1. **Download Git**
   - Go to: https://git-scm.com/download/win
   - Download the latest version

2. **Install Git**
   - Run the installer
   - Use default settings
   - **Important**: Check "Git from the command line and also from 3rd-party software"

3. **Restart PowerShell/Terminal**
   - Close and reopen your terminal
   - Test: `git --version`

4. **Then run these commands:**
   ```powershell
   cd "E:\Git Desktop\pharmazen"
   
   # Check current status
   git status
   
   # Add all changes
   git add .
   
   # Commit changes
   git commit -m "Remove watch demo functionality and prepare for Vercel deployment"
   
   # Check remote repository
   git remote -v
   
   # If remote is not set, add it:
   git remote add origin https://github.com/SongsBeats/Pharmazen-Website.git
   
   # Push to GitHub
   git push -u origin main
   ```

---

## ✅ Option 3: Add Git to PATH (If Already Installed)

If Git is installed but not in PATH:

1. **Find Git Installation**
   - Check: `C:\Program Files\Git\cmd\git.exe`
   - Or: `C:\Program Files (x86)\Git\cmd\git.exe`

2. **Add to PATH**
   - Press `Win + X` → System
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "System variables", find "Path"
   - Click "Edit"
   - Click "New"
   - Add: `C:\Program Files\Git\cmd`
   - Click OK on all dialogs

3. **Restart PowerShell**
   - Close and reopen your terminal
   - Test: `git --version`

4. **Then push using commands from Option 2**

---

## ✅ Option 4: Use VS Code Source Control

If you have VS Code:

1. **Open Project in VS Code**
   - Open the folder: `E:\Git Desktop\pharmazen`

2. **Open Source Control**
   - Click the Source Control icon (left sidebar)
   - Or press `Ctrl + Shift + G`

3. **Stage Changes**
   - Click the "+" icon next to "Changes" to stage all files
   - Or click "+" next to individual files

4. **Commit**
   - Enter commit message: `Remove watch demo functionality and prepare for Vercel deployment`
   - Click the checkmark icon or press `Ctrl + Enter`

5. **Push**
   - Click the "..." menu → "Push"
   - Or click "Sync Changes" button

---

## 📋 Files to be Pushed

The following files have been modified/created:

### Modified:
- `src/components/landing/HeroSection.tsx` - Removed Watch Demo button

### Deleted:
- `src/components/ProductDemo.tsx` - Removed demo component

### Created:
- `DEPLOYMENT.md` - Vercel deployment guide
- `CHANGES.md` - Summary of changes
- `VERIFICATION.md` - Manual testing checklist
- `QUICK-DEPLOY.md` - Quick deployment reference
- `dist/` folder - Build output (should be in .gitignore)

---

## 🔍 Verify Remote Repository

Your repository URL should be:
```
https://github.com/SongsBeats/Pharmazen-Website.git
```

After pushing, verify at:
https://github.com/SongsBeats/Pharmazen-Website

---

## ❓ Need Help?

If you're still having issues:

1. **Tell me which method you prefer** (GitHub Desktop, VS Code, or command line)
2. **Let me know if Git is installed** on your system
3. **Share any error messages** you encounter

Once the files are pushed to GitHub, you can proceed with Vercel deployment!
