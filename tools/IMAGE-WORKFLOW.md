# 📸 Image Workflow — Complete Guide

Read this once and you'll never have to ask again. Written for non-coders.

---

## 🗂️ The folder structure (already created for you)

Your repo has TWO image folders. One is a drop zone (you put raw photos here),
the other is the live folder (compressed `.webp` files that ship to the site).

### Drop zone — `images-raw/atlas/`
This is where YOU put raw photos straight from your phone/camera/textbook scan.

```
images-raw/atlas/
├── forelimb/
│   ├── osteology/       ← drop raw scapula.jpg, humerus.png here
│   ├── myology/
│   ├── arthrology/
│   ├── neurology/
│   ├── angiology/
│   └── splanchnology/
├── hindlimb/
│   └── (same 6 subfolders)
├── head-neck/
│   └── (same 6 subfolders)
├── thorax/
│   └── osteology, myology, splanchnology, angiology
├── abdomen/
│   └── osteology, myology, splanchnology, angiology
├── introduction/         ← single folder, no subdivision
├── histology/
└── embryology/
```

### Live folder — `images/atlas/`
You **never touch this directly**. The compress script auto-fills it with
properly-sized `.webp` files that mirror the drop-zone structure.

---

## 📋 The complete 4-step workflow

### Step 1 — Drop raw photos
1. Open File Explorer
2. Navigate to `D:\ANATOMY APP\repo\images-raw\atlas\`
3. Pick the right subfolder (e.g. `forelimb\osteology\`)
4. Drag your raw photos in (any format: JPG, PNG, even huge 10MB camera files)
5. **Name them sensibly** — the closer the filename to the structure name, the better the auto-mapper works. Examples:
   - ✅ `scapula.jpg`, `humerus-distal.png`, `radius-ulna-comparative.jpg`
   - ❌ `IMG_4823.jpg`, `WhatsApp Image 2026-05-24.jpeg`

### Step 2 — Compress (double-click)
1. In File Explorer, go to `D:\ANATOMY APP\repo\tools\`
2. **Double-click `compress.bat`**
3. A black window opens. You'll see it walk every subfolder:
   ```
   ▼ Processing  images-raw/atlas/  (12 files across 3 folder(s))
     • forelimb/osteology/  (5 files)
         ✓ scapula.jpg              → forelimb/osteology/scapula.webp     287 KB
         ✓ humerus.png              → forelimb/osteology/humerus.webp     298 KB
     • forelimb/myology/   (4 files)
     • hindlimb/osteology/ (3 files)
   ```
4. Each raw file gets compressed to ~300 KB `.webp` and dropped in the matching `images/atlas/<region>/<system>/` folder.
5. The original raw file gets moved to a `_done/` subfolder so you don't re-process it next time.
6. Window says "Press any key to close" → press Enter.

### Step 3 — Map images to data entries (double-click)
1. Same `tools\` folder. **Double-click `map-images.bat`**.
2. A black window scans your files and writes a report. Your browser auto-opens **`image-map-report.html`** showing:
   - 🟢 **High-confidence matches** — ready to auto-apply
   - 🟡 **Probable matches** — copy-paste lines, you decide
   - 🔴 **No match** — rename the file
   - ⚪ **Entries still missing an image** — what's left to shoot
3. **Magic trick:** because you organized by region+system folders, the script ALREADY knows where each image belongs. It only matches a `forelimb/osteology/` image against Forelimb-Osteology entries. So your accuracy will be ~95%+ instead of the old ~70%.

### Step 4 — Apply (double-click)
1. Happy with the green rows? **Double-click `map-images-apply.bat`**.
2. It asks `Proceed? [Y/N]:` → press **Y** → Enter.
3. It writes the `img: "images/atlas/forelimb/osteology/scapula.webp"` lines into your data files.
4. **Safety net:** before editing each `data-*.JS`, it makes a `.bak` backup. If anything looks wrong, rename the `.bak` to restore.
5. Open GitHub Desktop → review changes → commit → push.
6. Cloudflare rebuilds in ~1 minute. Refresh your live site. Images appear.

---

## 🛡️ The "25 MB limit" — what's real and what's not

| Limit you may have heard | The actual rule | Affects us? |
|---|---|---|
| "GitHub 25 MB folder limit" | Doesn't exist. GitHub limits *individual files* to 25 MB via web upload (100 MB via Desktop). | ❌ No |
| "Cloudflare 25 MB folder limit" | Doesn't exist. Cloudflare Pages limits *individual files* to 25 MB. | ❌ No |
| GitHub total repo size | Soft 1 GB, hard 5 GB | At 300 KB per image = room for **3000+ images** |
| Cloudflare Pages file count | 20,000 files per deployment | At ~250 atlas entries = room for **80 images per entry** |

**Bottom line:** there is no "25 MB folder" limit anywhere. You can put hundreds of images in one folder. The only real limit is 25 MB per *individual file*, and your compressor keeps every file at ~300 KB — that's 80× under the limit.

---

## 🚨 Common problems

**Problem:** Compress.bat says "No images found"
**Cause:** You dropped images at the top level of `images-raw/atlas/` instead of inside a subfolder.
**Fix:** Move them into one of the subfolders like `forelimb/osteology/`.

**Problem:** map-images.bat finds the image but matches it to the wrong entry
**Cause:** Filename doesn't match the structure name closely enough.
**Fix:** Rename the file (e.g. `IMG_482.jpg` → `scapula-medial.jpg`), re-run.

**Problem:** I accidentally pushed `.bak` files to GitHub
**Cause:** Backup files leaked into the commit.
**Fix:** Add `*.bak` to `.gitignore` (already done if you commit this README's neighbour), or delete the `.bak` files manually after pushing.

**Problem:** Image shows broken icon on live site
**Cause:** The `img:` path in the data file doesn't match the actual file path.
**Fix:** Open browser DevTools (F12) → Network tab → find the failed image → its URL tells you what the data expects. Either fix the data line or rename the file.

---

## ✅ Quick reference card

```
DROP HERE          →  images-raw/atlas/<region>/<system>/<your-file>.jpg
COMPRESS           →  double-click tools/compress.bat
MAP                →  double-click tools/map-images.bat       (opens report)
APPLY              →  double-click tools/map-images-apply.bat (writes data files)
COMMIT             →  GitHub Desktop → review → commit → push
DEPLOY             →  Cloudflare auto-rebuilds in ~1 minute
```

That's it. Once you do this loop twice it becomes muscle memory.
