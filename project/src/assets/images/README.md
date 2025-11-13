# Images Folder

Place your images here:

1. **hero-banner.jpg** - Background banner image for the Hero section (recommended size: **1920x1080px** or **2560x1440px** for best quality)

   - Format: JPG, PNG, or WebP (WebP recommended for smaller file size)
   - Aspect ratio: 16:9 (landscape)
   - This image will be used as a full-screen background banner

2. **project1.jpg** - Image for Project 1 (AgriConnect) (recommended size: **1200x600px** or **1600x800px** for best quality)

   - Format: JPG, PNG, or WebP (WebP recommended for smaller file size)
   - Aspect ratio: 2:1 (landscape)
   - This image will be displayed at the top of the project card

3. **project2.jpg** - Image for Project 2 (Task Management App) (recommended size: **1200x600px** or **1600x800px** for best quality)

   - Format: JPG, PNG, or WebP (WebP recommended for smaller file size)
   - Aspect ratio: 2:1 (landscape)

4. **project3.jpg** - Image for Project 3 (Weather Dashboard) (recommended size: **1200x600px** or **1600x800px** for best quality)

   - Format: JPG, PNG, or WebP (WebP recommended for smaller file size)
   - Aspect ratio: 2:1 (landscape)

5. **project4.jpg** - Image for Project 4 (Portfolio CMS) (recommended size: **1200x600px** or **1600x800px** for best quality)

   - Format: JPG, PNG, or WebP (WebP recommended for smaller file size)
   - Aspect ratio: 2:1 (landscape)

6. **profile.jpg** - Your profile picture for the circle div (recommended size: 512x512px or square)
7. **image1.jpg** - First image for the explanation section (recommended size: 400x400px or square)
8. **image2.jpg** - Second image for the explanation section (recommended size: 400x400px or square)

## How to Add Images

### Hero Banner Image

1. Add your `hero-banner.jpg` file to this folder (`src/assets/images/`)
2. **Recommended size: 1920x1080px (Full HD) or 2560x1440px (2K)**
   - This ensures the image looks sharp on all screen sizes
   - The image will be used as a background with `background-size: cover`
   - Format: JPG (for photos), PNG (for graphics with transparency), or WebP (best compression)
3. Open `src/components/Hero.tsx`
4. Uncomment the import statement: `// import heroBanner from '../assets/images/hero-banner.jpg';`
5. Remove or comment out the line: `const heroBanner: string | undefined = undefined;`
6. The banner image will now display as the background of the Hero section!

### About Section Images

1. Add your image files to this folder (`src/assets/images/`)
2. Make sure the filenames match:
   - `profile.jpg` (or `.png`, `.webp`, etc.)
   - `image1.jpg` (or `.png`, `.webp`, etc.)
   - `image2.jpg` (or `.png`, `.webp`, etc.)
3. Open `src/components/About.tsx`
4. Uncomment the import statements at the top (lines starting with `// import profileImage...`)
5. Remove or comment out the lines that set the variables to `undefined`:
   ```typescript
   // Remove these lines:
   const profileImage: string | undefined = undefined;
   const image1: string | undefined = undefined;
   const image2: string | undefined = undefined;
   ```
6. Your images will now display in the About section!

### Project Images

1. Add your project image files to this folder (`src/assets/images/`)
2. Make sure the filenames match:
   - `project1.jpg` (or `.png`, `.webp`, etc.) - for AgriConnect
   - `project2.jpg` (or `.png`, `.webp`, etc.) - for Task Management App
   - `project3.jpg` (or `.png`, `.webp`, etc.) - for Weather Dashboard
   - `project4.jpg` (or `.png`, `.webp`, etc.) - for Portfolio CMS
3. **Recommended size: 1200x600px (2:1 aspect ratio) or 1600x800px for best quality**
   - This ensures the images look sharp on all screen sizes
   - The images will be displayed at the top of each project card
   - Format: JPG (for screenshots/photos), PNG (for graphics with transparency), or WebP (best compression)
4. Open `src/components/Projects.tsx`
5. Uncomment the import statements at the top (lines starting with `// import project1Image...`)
6. Remove or comment out the lines that set the variables to `undefined`:
   ```typescript
   // Remove these lines:
   const project1Image: string | undefined = undefined;
   const project2Image: string | undefined = undefined;
   const project3Image: string | undefined = undefined;
   const project4Image: string | undefined = undefined;
   ```
7. Your project images will now display instead of the number placeholders!

**Note:** You can use other image formats like `.png`, `.webp`, etc. Just make sure to update the file extensions in the import statements to match your actual filenames. If you don't add project images, the numbers (1, 2, 3, 4) will continue to display as placeholders.
