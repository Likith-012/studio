import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    }
  })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default function handler(req, res) {
  upload.single('file')(req, res, (err) => {
    if (err) return res.status(500).json({ message: 'File upload failed' });
    return res.status(200).json({ message: 'File uploaded successfully' });
  });
}
